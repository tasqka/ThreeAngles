import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Linking
} from "react-native";
import { assets } from "../../assets/Assets";
import SiteFooter from "../components/SiteFooter";

type Spot = {
  id: string;
  title: string;
  price: string;
  location: string;
  reach: string;
  type: string;
  status: "Available" | "Occupied";
  image: string;
  featured?: boolean;
  category: "Billboards" | "Digital" | "Transit";
};

type MapPoint = {
  lat: number;
  lng: number;
  top: string;
  left: string;
};

const FILTERS = ["All Formats", "Billboards", "Digital", "Transit"] as const;

const MAP_POINTS: Record<string, MapPoint> = {
  "grand-central": { lat: 40.7528, lng: -73.9772, top: "24%", left: "64%" },
  "sunset-strip": { lat: 34.0983, lng: -118.3267, top: "50%", left: "38%" },
  "retail-plaza": { lat: 41.8781, lng: -87.6298, top: "60%", left: "58%" },
  "union-station": { lat: 38.8977, lng: -77.0069, top: "72%", left: "53%" },
  "i95-gantry": { lat: 25.7617, lng: -80.1918, top: "78%", left: "45%" },
  "soho-mini": { lat: 40.7233, lng: -74.003, top: "30%", left: "71%" }
};

const FALLBACK_POINTS: MapPoint[] = [
  { lat: 40.7128, lng: -74.006, top: "30%", left: "63%" },
  { lat: 34.0522, lng: -118.2437, top: "53%", left: "40%" },
  { lat: 41.8781, lng: -87.6298, top: "72%", left: "56%" }
];

function resolveCategory(type: string): Spot["category"] {
  const value = type.toLowerCase();
  if (value.includes("transit") || value.includes("rail") || value.includes("monorail")) return "Transit";
  if (value.includes("digital") || value.includes("screen") || value.includes("mini")) return "Digital";
  return "Billboards";
}

function getPointForSpot(spot: Spot, index: number): MapPoint {
  return MAP_POINTS[spot.id] ?? FALLBACK_POINTS[index % FALLBACK_POINTS.length];
}

export default function Location() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1080;

  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All Formats");
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState<"asc" | "desc" | null>(null);
  const [radiusFilter, setRadiusFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const normalizedAssets = useMemo<Spot[]>(
    () =>
      (assets as Omit<Spot, "category">[]).map((item) => ({
        ...item,
        category: resolveCategory(item.type)
      })),
    []
  );

  const filteredSpots = useMemo(() => {
    const query = search.trim().toLowerCase();
    let spots = normalizedAssets.filter((spot) => {
      const filterPass = activeFilter === "All Formats" ? true : spot.category === activeFilter;
      if (!filterPass) return false;
      if (!query) return true;
      return (
        spot.title.toLowerCase().includes(query) ||
        spot.location.toLowerCase().includes(query) ||
        spot.type.toLowerCase().includes(query)
      );
    });

    if (sortPrice) {
      spots = [...spots].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, "")) || 0;
        const priceB = parseInt(b.price.replace(/\D/g, "")) || 0;
        return sortPrice === "asc" ? priceA - priceB : priceB - priceA;
      });
    }

    return spots;
  }, [activeFilter, normalizedAssets, search, sortPrice]);

  const [selectedId, setSelectedId] = useState<string>(normalizedAssets[0]?.id ?? "");

  useEffect(() => {
    if (filteredSpots.length === 0) {
      setSelectedId("");
      return;
    }
    if (!filteredSpots.some((spot) => spot.id === selectedId)) {
      setSelectedId(filteredSpots[0].id);
    }
  }, [filteredSpots, selectedId]);

  const selectedSpot = useMemo(
    () => filteredSpots.find((spot) => spot.id === selectedId) ?? filteredSpots[0],
    [filteredSpots, selectedId]
  );

  const selectedPoint = selectedSpot ? getPointForSpot(selectedSpot, 0) : FALLBACK_POINTS[0];

  const cityLabel = useMemo(() => {
    const value = selectedSpot?.location ?? "New York, NY";
    const parts = value.split(",").map((part) => part.trim());
    if (parts.length >= 2) return `${parts[parts.length - 2]}, ${parts[parts.length - 1]}`;
    return value;
  }, [selectedSpot]);

  const googleMapEmbedUrl = useMemo(
    () => `https://www.google.com/maps?q=${selectedPoint.lat},${selectedPoint.lng}&z=10&output=embed`,
    [selectedPoint.lat, selectedPoint.lng]
  );

  const leftPanel = (
    <View style={styles.leftPanelContent}>
      <View style={styles.leftHeader}>
        <View style={styles.leftHeaderTop}>
          <View>
            <Text style={styles.title}>Available Spots</Text>
            <Text style={styles.subtitle}>Found {filteredSpots.length} premium locations</Text>
          </View>
          <View style={styles.filterIconWrapper}>
            <Pressable
              onPress={() => setShowFilters(!showFilters)}
              style={[styles.filterIconWrap, showFilters && styles.filterIconWrapActive]}
            >
              <MaterialIcons name="tune" size={18} color={showFilters ? "#fff" : "#344054"} />
            </Pressable>
            {showFilters && (
              <View style={[styles.filterPopupLocation, { backgroundColor: "#fff" }]}>
                <View style={styles.filterPopupContent}>
                  <View style={styles.sortSection}>
                    <Text style={styles.sortSectionLabel}>Sort by Price:</Text>
                    <View style={styles.sortButtonsRow}>
                      <Pressable
                        onPress={() => setSortPrice(sortPrice === "asc" ? null : "asc")}
                        style={[
                          styles.sortFilterBtn,
                          sortPrice === "asc" && styles.sortFilterBtnActive
                        ]}
                      >
                        <Text style={[styles.sortFilterBtnText, sortPrice === "asc" && styles.sortFilterBtnTextActive]}>Low to High</Text>
                      </Pressable>
                      <Pressable
                        onPress={() => setSortPrice(sortPrice === "desc" ? null : "desc")}
                        style={[
                          styles.sortFilterBtn,
                          sortPrice === "desc" && styles.sortFilterBtnActive
                        ]}
                      >
                        <Text style={[styles.sortFilterBtnText, sortPrice === "desc" && styles.sortFilterBtnTextActive]}>High to Low</Text>
                      </Pressable>
                    </View>
                  </View>

                  <View style={styles.radiusSection}>
                    <Text style={styles.sortSectionLabel}>Radius:</Text>
                    <View style={styles.radiusButtonsRow}>
                      {[5, 10, 25, 50].map((radius) => (
                        <Pressable
                          key={radius}
                          onPress={() => setRadiusFilter(radiusFilter === radius ? null : radius)}
                          style={[
                            styles.radiusBtn,
                            radiusFilter === radius && styles.radiusBtnActive
                          ]}
                        >
                          <Text style={[styles.radiusBtnText, radiusFilter === radius && styles.radiusBtnTextActive]}>{radius}mi</Text>
                        </Pressable>
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>

        <View style={styles.chipsRow}>
          {FILTERS.map((filter) => {
            const active = filter === activeFilter;
            return (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                style={[styles.filterChip, active && styles.filterChipActive]}
              >
                <Text style={[styles.filterChipText, active && styles.filterChipTextActive]}>{filter}</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.searchWrap}>
          <MaterialIcons name="search" size={16} color="#94a3b8" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search locations, format, city"
            placeholderTextColor="#94a3b8"
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView style={styles.cardsScroll} showsVerticalScrollIndicator={false}>
        {filteredSpots.map((spot, index) => {
          const selected = selectedId === spot.id;
          return (
            <View key={spot.id} style={[styles.card, selected && styles.cardSelected]}>
              <Pressable onPress={() => setSelectedId(spot.id)}>
                <View style={styles.cardImageWrap}>
                  <Image source={{ uri: spot.image }} style={styles.cardImage} />
                  <View style={styles.cardTypePill}>
                    <Text style={styles.cardTypePillText}>{spot.type.toUpperCase()}</Text>
                  </View>
                </View>
              </Pressable>

              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{spot.title}</Text>
                <View style={styles.cardLocationRow}>
                  <MaterialIcons name="place" size={14} color="#64748b" />
                  <Text style={styles.cardLocationText}>{spot.location}</Text>
                </View>

                <View style={styles.cardStatsRow}>
                  <View>
                    <Text style={styles.cardStatsLabel}>Weekly Reach</Text>
                    <Text style={styles.cardStatsValue}>{spot.reach}</Text>
                  </View>
                  <View>
                    <Text style={styles.cardStatsLabel}>Monthly Rate</Text>
                    <Text style={styles.cardPrice}>{spot.price}</Text>
                  </View>
                </View>

                <View style={styles.cardDivider} />

                <View style={styles.cardBottomRow}>
                  <Pressable
                    style={[styles.LocationBtn, { flex: 1, alignItems: 'center' }]}
                    onPress={() => {
                      const point = getPointForSpot(spot, index);
                      Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${point.lat},${point.lng}`);
                    }}
                  >
                    <Text style={styles.LocationBtnText}>Explore Location</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => router.push({ pathname: "/Specs", params: { id: spot.id } })}
                    style={[styles.specsBtn, { flex: 1, alignItems: 'center' }]}
                  >
                    <Text style={styles.specsBtnText}>View Specs</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        })}

        <SiteFooter />
      </ScrollView>
    </View>
  );

  const mapPanel = (
    <View style={styles.mapShell}>
      {Platform.OS === "web" ? (
        <View style={styles.webMapFrame}>
          {React.createElement("iframe", {
            src: googleMapEmbedUrl,
            title: "Google Map",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            style: { width: "100%", height: "97.5%", border: 0 }
          })}
        </View>
      ) : (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${selectedPoint.lat},${selectedPoint.lng}&zoom=10&size=1200x900&maptype=roadmap`
          }}
          style={styles.nativeMapFallback}
        />
      )}

      <View style={styles.mapTools}>
        <View style={styles.mapZoomTools}>
          <TouchableOpacity style={styles.mapToolBtn}>
            <MaterialIcons name="add" size={20} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mapToolBtn}>
            <MaterialIcons name="remove" size={20} color="#374151" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.mapToolBtn}>
          <MaterialIcons name="my-location" size={20} color="#374151" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mapToolBtn}>
          <MaterialIcons name="layers" size={20} color="#374151" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (isDesktop) {
    return (
      <View style={styles.container}>
        <View style={styles.desktopSplit}>
          <View style={styles.leftPane}>{leftPanel}</View>
          <View style={styles.rightPane}>{mapPanel}</View>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.mobileWrap}>
        <View style={styles.mobileMapWrap}>{mapPanel}</View>
        <View style={styles.mobileLeftWrap}>{leftPanel}</View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f7f4"
  },
  desktopSplit: {
    flex: 1,
    flexDirection: "row",
    minHeight: 760
  },
  leftPane: {
    width: 460,
    borderRightWidth: 1,
    borderRightColor: "#e7e9ee",
    backgroundColor: "#f7f8fb"
  },
  rightPane: {
    flex: 1,
    minWidth: 500
  },
  leftPanelContent: {
    flex: 1
  },
  leftHeader: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 12,
    gap: 14
  },
  leftHeaderTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 40,
    lineHeight: 42,
    fontWeight: "800",
    color: "#162033"
  },
  subtitle: {
    marginTop: 8,
    fontSize: 24,
    lineHeight: 28,
    color: "#6b7a92"
  },
  filterIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    backgroundColor: "#f1f5f9",
    alignItems: "center",
    justifyContent: "center"
  },
  filterIconWrapActive: {
    backgroundColor: "#f97316",
    borderColor: "#f97316"
  },
  filterIconWrapper: {
    position: "relative"
  },
  filterPopupLocation: {
    position: "absolute",
    top: 48,
    right: 0,
    width: 240,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    zIndex: 1100, // Increased zIndex to ensure it is the topmost layer
    ...(Platform.OS === "web"
      ? { boxShadow: "0px 10px 24px rgba(15,23,42,0.15)" }
      : {
          shadowColor: "#0f172a",
          shadowOpacity: 0.15,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 },
          elevation: 8
        }
    )
  },
  filterPopupContent: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 12
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#d4dbe5",
    backgroundColor: "#f8fbff"
  },
  filterChipActive: {
    borderColor: "#f97316",
    backgroundColor: "#f97316"
  },
  filterChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#27364b"
  },
  filterChipTextActive: {
    color: "#ffffff"
  },
  sortFilterRow: {
    gap: 16,
    paddingTop: 8
  },
  sortSection: {
    gap: 8
  },
  radiusSection: {
    gap: 8
  },
  sortSectionLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#27364b",
    textTransform: "uppercase",
    letterSpacing: 0.5
  },
  sortButtonsRow: {
    flexDirection: "row",
    gap: 8
  },
  sortFilterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d4dbe5",
    backgroundColor: "#f8fbff"
  },
  sortFilterBtnActive: {
    borderColor: "#f97316",
    backgroundColor: "#f97316"
  },
  sortFilterBtnText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#27364b"
  },
  sortFilterBtnTextActive: {
    color: "#ffffff"
  },
  radiusButtonsRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap"
  },
  radiusBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d4dbe5",
    backgroundColor: "#f8fbff"
  },
  radiusBtnActive: {
    borderColor: "#f97316",
    backgroundColor: "#f97316"
  },
  radiusBtnText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#27364b"
  },
  radiusBtnTextActive: {
    color: "#ffffff"
  },
  searchWrap: {
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dce3ed",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#1e293b"
  },
  cardsScroll: {
    flex: 1,
    paddingHorizontal: 20
  },
  card: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    marginBottom: 16,
    ...(Platform.OS === "web"
      ? { boxShadow: "0px 14px 30px rgba(15,23,42,0.08)" }
      : {
          shadowColor: "#0f172a",
          shadowOpacity: 0.08,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 8 },
          elevation: 3
        })
  },
  cardSelected: {
    borderColor: "#f97316"
  },
  cardImageWrap: {
    position: "relative",
    height: 210
  },
  cardImage: {
    width: "100%",
    height: "100%"
  },
  cardTypePill: {
    position: "absolute",
    top: 12,
    left: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.92)"
  },
  cardTypePillText: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.5,
    color: "#111827"
  },
  cardBody: {
    padding: 16,
    gap: 10
  },
  cardTitle: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "800",
    color: "#162033"
  },
  cardLocationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  cardLocationText: {
    fontSize: 13,
    color: "#64748b"
  },
  cardStatsRow: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardStatsLabel: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#94a3b8",
    fontWeight: "700"
  },
  cardStatsValue: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "700",
    color: "#1e293b"
  },
  cardPrice: {
    marginTop: 4,
    fontSize: 34,
    lineHeight: 36,
    fontWeight: "800",
    color: "#f97316"
  },
  cardDivider: {
    height: 1,
    backgroundColor: "#e9eef5"
  },
  cardBottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10
  },
  specsBtn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dce4ef"
  },
  specsBtnText: {
    fontSize: 11,
    color: "#334155",
    fontWeight: "700"
  },
  LocationBtn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#f97316"
  },
    LocationBtnText: {
    fontSize: 11,
    color: "#ffffff",
    fontWeight: "700"
  },
  mapShell: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    borderLeftWidth: 0,
    minHeight: 760
  },
  webMapFrame: {
    ...StyleSheet.absoluteFillObject
  },
  nativeMapFallback: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%"
  },
  mapTopPill: {
    position: "absolute",
    top: 24,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 999,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#e6ebf2",
    ...(Platform.OS === "web" ? { boxShadow: "0px 10px 22px rgba(15,23,42,0.12)" } : {})
  },
  mapTopPillDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#9ad6b1"
  },
  mapTopPillText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "600"
  },
  mapTopPillDivider: {
    width: 1,
    height: 16,
    backgroundColor: "#e2e8f0"
  },
  mapPin: {
    position: "absolute",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dce3ed",
    ...(Platform.OS === "web" ? { boxShadow: "0px 10px 22px rgba(15,23,42,0.15)" } : {})
  },
  mapPinActive: {
    backgroundColor: "#c7834f",
    borderColor: "#ffffff",
    borderWidth: 2
  },
  mapPinText: {
    fontSize: 28,
    lineHeight: 30,
    color: "#1e293b",
    fontWeight: "800"
  },
  mapPinTextActive: {
    color: "#ffffff"
  },
  mapTools: {
    position: "absolute",
    top: 24,
    right: 24,
    gap: 10,
    alignItems: "flex-end"
  },
  mapZoomTools: {
    borderRadius: 18,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    ...(Platform.OS === "web" ? { boxShadow: "0px 10px 22px rgba(15,23,42,0.12)" } : {})
  },
  mapToolBtn: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
    ...(Platform.OS === "web" ? { boxShadow: "0px 8px 20px rgba(15,23,42,0.10)" } : {})
  },
  mobileWrap: {
    paddingBottom: 24
  },
  mobileMapWrap: {
    height: 420
  },
  mobileLeftWrap: {
    marginTop: 16,
    backgroundColor: "#f7f8fb",
    borderTopWidth: 1,
    borderColor: "#e6ebf2"
  }
});
