import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { assets } from "../../assets/Assets";
import { router, useLocalSearchParams } from "expo-router";
import SiteFooter from "../components/SiteFooter";
const inventoryTabs = ["All Inventory", "Billboards", "Screens", "Minimegas", "Monorail Ads"];

type InventoryItem = {
  id: string;
  title: string;
  price: string;
  location: string;
  reach: string;
  type: string;
  status: "Available" | "Occupied";
  image: string;
  featured?: boolean;
};

const inventory = assets as InventoryItem[];

export default function Showcase() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const [activeTab, setActiveTab] = useState(inventoryTabs[0]);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [sortPrice, setSortPrice] = useState<"asc" | "desc" | null>(null);
  const [radiusFilter, setRadiusFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const { filter } = useLocalSearchParams<{ filter?: string }>();
  const tabAnims = useRef<Record<string, Animated.Value>>(
    Object.fromEntries(inventoryTabs.map((tab) => [tab, new Animated.Value(tab === inventoryTabs[0] ? 1 : 0)]))
  );
  const specsAnims = useRef<Record<string, Animated.Value>>({});

  useEffect(() => {
    if (!filter) return;
    if (inventoryTabs.includes(filter)) {
      setActiveTab(filter);
    } else if (filter.toLowerCase() === "mini megas") {
      setActiveTab("Minimegas");
    }
  }, [filter]);

  useEffect(() => {
    inventoryTabs.forEach((tab) => {
      const isOn = tab === activeTab || tab === hoveredTab;
      Animated.timing(tabAnims.current[tab], {
        toValue: isOn ? 1 : 0,
        duration: 180,
        useNativeDriver: true
      }).start();
    });
  }, [activeTab, hoveredTab]);

  const getFilteredInventory = () => {
    let filtered = inventory;
    
    if (activeTab !== "All Inventory") {
      const typeMap: Record<string, string> = {
        "Billboards": "BillBoard",
        "Screens": "Digital Screen",
        "Minimegas": "Mini Mega",
        "Monorail Ads": "Monorail Ads"
      };
      const targetType = typeMap[activeTab];
      filtered = filtered.filter(item => item.type === targetType);
    }
    
    if (sortPrice) {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, "")) || 0;
        const priceB = parseInt(b.price.replace(/\D/g, "")) || 0;
        return sortPrice === "asc" ? priceA - priceB : priceB - priceA;
      });
    }
    
    return filtered;
  };

  const getSpecsAnim = (id: string) => {
    if (!specsAnims.current[id]) specsAnims.current[id] = new Animated.Value(0);
    return specsAnims.current[id];
  };

  const runSpecsOnce = (id: string) => {
    const anim = getSpecsAnim(id);
    anim.stopAnimation();
    Animated.sequence([
      Animated.timing(anim, { toValue: 1, duration: 160, useNativeDriver: true }),
      Animated.timing(anim, { toValue: 0, duration: 200, useNativeDriver: true })
    ]).start();
  };

  const palette = useMemo(
    () => ({
      bg: "#f5f5f4",
      surface: "#ffffff",
      text: "#111111",
      muted: "#6b7280",
      line: "#f0f0f0",
      accent: "#f97316",
      accentSoft: "rgba(249,115,22,0.14)",
      shadow: "rgba(15,23,42,0.08)",
      chip: "#0f172a",
      chipText: "#ffffff",
      success: "#1c6a1f",
      slate: "#0f172a",
      tabActive: "#111111",
      tabInactive: "#9ca3af"
    }),
    []
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: palette.bg }]} showsVerticalScrollIndicator={false}>
      <View style={styles.hero}>
        <View style={styles.heroInner}>
          <View style={[styles.premiumPill, { backgroundColor: palette.accentSoft }]}> 
            <Text style={[styles.premiumText, { color: palette.accent }]}>Premium Inventory</Text>
          </View>

          <View style={styles.heroTopRow}>
            <View style={styles.heroCopy}>
              <Text style={[styles.heroTitle, { color: palette.text }]}>The World{"'"}s Most Iconic</Text>
              <Text style={[styles.heroTitle, { color: "#9ca3af" }]}>Advertising Spaces.</Text>
              <Text style={[styles.heroSubtitle, { color: palette.muted }]}> 
                Discover and book exclusive outdoor billboards and transit media across Sheikh Zayed and 6th of October.
              </Text>
            </View>

            <View style={styles.heroSearch}>
              <View style={[styles.searchBox, { backgroundColor: palette.surface, borderColor: palette.line }]}> 
                <MaterialIcons name="search" size={18} color={palette.muted} />
                <TextInput
                  placeholder="Search by city..."
                  placeholderTextColor={palette.muted}
                  style={[styles.searchInput, { color: palette.text }]}
                />
              </View>
              <TouchableOpacity style={[styles.mapBtn, { borderColor: palette.line, backgroundColor: palette.surface }]}>
                <MaterialIcons name="map" size={18} color={palette.text} />
                <Text style={[styles.mapBtnText, { color: palette.text }]}>Map View</Text>
              </TouchableOpacity>
              <View style={styles.filterBtnWrapper}>
                <TouchableOpacity
                  onPress={() => setShowFilters(!showFilters)}
                  style={[styles.filterBtn, { backgroundColor: showFilters ? palette.accent : palette.surface, borderColor: palette.line, borderWidth: showFilters ? 0 : 1 }]}
                >
                  <MaterialIcons name="tune" size={18} color={showFilters ? "#fff" : palette.text} />
                </TouchableOpacity>
                {showFilters && (
                  <View style={[styles.filterPopup, { backgroundColor: palette.surface, borderColor: palette.line }]}>
                    <View style={styles.sortDropdown}>
                      <Text style={[styles.sortLabel, { color: palette.muted }]}>Sort by Price:</Text>
                      <View style={styles.sortButtons}>
                        <Pressable
                          onPress={() => setSortPrice(sortPrice === "asc" ? null : "asc")}
                          style={[
                            styles.sortBtn,
                            {
                              backgroundColor: sortPrice === "asc" ? palette.accent : palette.line,
                              borderColor: palette.line
                            }
                          ]}
                        >
                          <Text style={[styles.sortBtnText, { color: sortPrice === "asc" ? "#fff" : palette.text }]}>Low to High</Text>
                        </Pressable>
                        <Pressable
                          onPress={() => setSortPrice(sortPrice === "desc" ? null : "desc")}
                          style={[
                            styles.sortBtn,
                            {
                              backgroundColor: sortPrice === "desc" ? palette.accent : palette.line,
                              borderColor: palette.line
                            }
                          ]}
                        >
                          <Text style={[styles.sortBtnText, { color: sortPrice === "desc" ? "#fff" : palette.text }]}>High to Low</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>

          <View style={styles.tabRow}>
            {inventoryTabs.map((tab) => {
              const active = activeTab === tab;
              return (
                <Pressable
                  key={tab}
                  onPress={() => setActiveTab(tab)}
                  onHoverIn={() => setHoveredTab(tab)}
                  onHoverOut={() => setHoveredTab(null)}
                >
                  <View style={styles.tabItem}> 
                    <Text style={[styles.tabText, { color: active ? palette.tabActive : palette.tabInactive }]}> 
                      {tab}
                    </Text>
                    <Animated.View
                      pointerEvents="none"
                      style={[
                        styles.tabUnderline,
                        { backgroundColor: palette.accent },
                        {
                          opacity: tabAnims.current[tab],
                          transform: [{ scaleX: tabAnims.current[tab] }]
                        }
                      ]}
                    />
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>

      <View style={styles.gridSection}>
        <View style={styles.gridInner}>
          <View style={[styles.grid, !isTablet && styles.gridMobile]}>
            {getFilteredInventory().map((item) => (
              (() => {
                const isAvailable = item.status === "Available";
                const statusTheme = isAvailable
                  ? {
                      bg: "#f0fdf4",
                      border: "transparent",
                      dot: "#22c55e",
                      text: "#166534",
                      label: "Available"
                    }
                  : {
                      bg: "#b91c1c",
                      border: "#991b1b",
                      dot: "#fee2e2",
                      text: "#ffffff",
                      label: "Occupied"
                    };
                return (
              <View
                key={item.id}
                style={[
                  styles.card,
                  { backgroundColor: palette.surface, borderColor: palette.line },
                  item.featured && styles.cardFeatured
                ]}
              >
                <View style={styles.cardImage}>
                  <Image source={{ uri: item.image }} style={styles.cardImageInner} />

                  <View style={styles.cardBadges}>
                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor: statusTheme.bg,
                          borderColor: statusTheme.border
                        }
                      ]}
                    >
                      <View
                        style={[
                          styles.statusDot,
                          { backgroundColor: statusTheme.dot }
                        ]}
                      />
                      <Text
                        style={[
                          styles.statusText,
                          { color: statusTheme.text }
                        ]}
                      >
                        {statusTheme.label}
                      </Text>
                    </View>

                  </View>
                </View>

                <View style={styles.cardBody}>
                  <View style={styles.cardHeaderRow}>
                    <Text style={[styles.cardTitle, { color: palette.text }]}>{item.title}</Text>
                    <Text style={[styles.cardPrice, { color: palette.accent }]}>{item.price}</Text>
                  </View>

                  <View style={styles.cardMetaRow}>
                    <MaterialIcons name="place" size={14} color={palette.muted} />
                    <Text style={[styles.cardMetaText, { color: palette.muted }]}>{item.location}</Text>
                  </View>

                  <View style={[styles.cardDivider, { backgroundColor: palette.line }]} />

                  <View style={styles.cardFooterRow}>
                    <Text style={[styles.cardType, { color: "#c4c4c4" }]}>{item.type.toUpperCase()}</Text>
                    <Pressable
                      style={styles.viewSpecsBtn}
                      onHoverIn={() => {
                        runSpecsOnce(item.id);
                      }}
                      onHoverOut={() => {
                        Animated.timing(getSpecsAnim(item.id), { toValue: 0, duration: 140, useNativeDriver: true }).start();
                      }}
                      onPress={() => router.push({ pathname: "/Specs", params: { id: item.id } })}
                    >
                      <Text style={[styles.viewSpecsText, { color: palette.text }]}>View Specs</Text>
                      <Animated.View
                        style={{
                          transform: [
                            {
                              translateX: getSpecsAnim(item.id).interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 6]
                              })
                            }
                          ],
                          opacity: getSpecsAnim(item.id).interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.6, 1]
                          })
                        }}
                      >
                        <MaterialIcons name="arrow-forward" size={14} color={palette.text} />
                      </Animated.View>
                    </Pressable>
                  </View>
                </View>
              </View>
                );
              })()
            ))}
          </View>

          <View style={styles.pagination}>
            <TouchableOpacity style={[styles.pageBtn, { borderColor: palette.line }]}>
              <MaterialIcons name="chevron-left" size={18} color={palette.text} />
            </TouchableOpacity>
            {["1", "2", "3", "…", "12"].map((page, index) => (
              <View
                key={`${page}-${index}`}
                style={[
                  styles.pageDot,
                  page === "1" && { backgroundColor: palette.text, borderColor: palette.text }
                ]}
              >
                <Text style={[styles.pageDotText, { color: page === "1" ? "#fff" : palette.muted }]}>{page}</Text>
              </View>
            ))}
            <TouchableOpacity style={[styles.pageBtn, { borderColor: palette.line }]}>
              <MaterialIcons name="chevron-right" size={18} color={palette.text} />
            </TouchableOpacity>
          </View>

          <Text style={[styles.paginationNote, { color: palette.muted }]}>Showing 6 of 124 available spaces</Text>
        </View>
      </View>

      <SiteFooter />
    </ScrollView>
  );
}

const shadowStyle = Platform.OS === "web" 
  ? { boxShadow: "0px 10px 24px rgba(15,23,42,0.15)" }
  : {
      shadowColor: "#0f172a",
      shadowOpacity: 0.15,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
      elevation: 8
    };

const cardShadowStyle = Platform.OS === "web"
  ? { boxShadow: "0px 18px 34px rgba(15,23,42,0.08)" }
  : {
      shadowColor: "#0f172a",
      shadowOpacity: 0.08,
      shadowRadius: 16,
      shadowOffset: { width: 0, height: 10 },
      elevation: 4
    };

const styles = StyleSheet.create({
  container: { flex: 1 },
  hero: {
    paddingTop: 28,
    paddingBottom: 20
  },
  heroInner: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    paddingHorizontal: 18
  },
  premiumPill: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999
  },
  premiumText: {
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1
  },
  heroTopRow: {
    marginTop: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20
  },
  heroCopy: {
    flex: 1,
    minWidth: 260
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: -0.6
  },
  heroSubtitle: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 520
  },
  heroSearch: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "web" ? 10 : 6,
    borderRadius: 999,
    borderWidth: 1,
    minWidth: 220
  },
  searchInput: {
    flex: 1,
    fontSize: 13
  },
  filterBtn: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center"
  },
  filterBtnWrapper: {
    position: "relative"
  },
  filterPopup: {
    position: "absolute",
    top: 56, // Adjusted for better alignment
    right: 0,
    width: 220, // Increased width for better spacing
    borderRadius: 16, // Slightly more rounded corners
    borderWidth: 1,
    paddingHorizontal: 16, // Increased padding for better spacing
    paddingVertical: 16, // Increased padding for better spacing
    zIndex: 1000,
    ...shadowStyle
  },
  mapBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    height: 40,
    borderRadius: 999,
    borderWidth: 1
  },
  mapBtnText: {
    fontSize: 12,
    fontWeight: "600"
  },
  tabRow: {
    marginTop: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 18
  },
  tabItem: {
    paddingBottom: 12
  },
  tabUnderline: {
    height: 2,
    borderRadius: 999,
    marginTop: 8
  },
  tabText: {
    fontSize: 12,
    fontWeight: "600"
  },
  filterRow: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap"
  },
  sortDropdown: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  sortLabel: {
    fontSize: 14, // Slightly larger font size for better readability
    fontWeight: "600",
    marginBottom: 8 // Added margin for spacing between label and buttons
  },
  sortButtons: {
    flexDirection: "row",
    gap: 8
  },
  sortBtn: {
    paddingHorizontal: 16, // Increased padding for better button size
    paddingVertical: 10, // Increased padding for better button size
    borderRadius: 20, // More rounded buttons
    borderWidth: 1
  },
  sortBtnText: {
    fontSize: 13, // Slightly larger font size for better readability
    fontWeight: "600"
  },
  gridSection: {
    paddingTop: 18,
    paddingBottom: 30
  },
  gridInner: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    paddingHorizontal: 18
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "flex-start"
  },
  gridMobile: {
    flexDirection: "column"
  },
  card: {
    width: 340,
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
    ...cardShadowStyle
  },
  cardFeatured: {
    transform: [{ translateY: -6 }]
  },
  cardImage: {
    height: 200,
    overflow: "hidden"
  },
  cardImageInner: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  cardBadges: {
    position: "absolute",
    inset: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    ...shadowStyle
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 999
  },
  statusText: {
    fontSize: 10.5,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.7
  },
  cardBody: {
    paddingHorizontal: 16,
    paddingTop: 26,
    paddingBottom: 22,
    minHeight: 140
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    flex: 1
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "700"
  },
  cardMetaRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  cardDivider: {
    height: 1,
    width: "100%",
    marginTop: 14,
    marginBottom: 12
  },
  cardMetaText: {
    fontSize: 12
  },
  cardFooterRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10
  },
  cardType: {
    fontSize: 10,
    letterSpacing: 1.2,
    fontWeight: "700"
  },
  viewSpecsBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  viewSpecsText: {
    fontSize: 12,
    fontWeight: "600"
  },
  pagination: {
    marginTop: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  pageBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1
  },
  pageDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },
  pageDotText: {
    fontSize: 12,
    fontWeight: "600"
  },
  paginationNote: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 12
  },
  footer: {
    paddingTop: 28
  },
  footerInner: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    paddingHorizontal: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 32,
    justifyContent: "space-between"
  },
  footerBrand: {
    maxWidth: 360
  },
  footerLogo: {
    marginBottom: 12
  },
  footerLogoText: {
    fontSize: 16,
    fontWeight: "700"
  },
  footerCopy: {
    fontSize: 12,
    lineHeight: 18
  },
  footerSocials: {
    marginTop: 14,
    flexDirection: "row",
    gap: 10
  },
  socialBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  footerLinksRow: {
    flexDirection: "row",
    gap: 42
  },
  footerColumn: {
    gap: 10
  },
  footerTitle: {
    fontSize: 13,
    fontWeight: "700"
  },
  footerLink: {
    fontSize: 12
  },
  footerBottom: {
    marginTop: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18
  },
  footerBottomText: {
    fontSize: 11
  }
});
