import React, { useMemo } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import { assets } from "../assets/Assets";
import SiteFooter from "./components/SiteFooter";

const specCards = [
  { id: "format", label: "Format Size", value: "14' x 48'", icon: "crop-16-9" },
  { id: "lighting", label: "Lighting", value: "24/7 LED", icon: "emoji-objects" },
  { id: "impressions", label: "Daily Impressions", value: "45,000+", icon: "groups" }
];

const calendarDays = [
  ["28", "29", "30", "31", "1", "2", "3"],
  ["4", "5", "6", "7", "8", "9", "10"],
  ["11", "12", "13", "14", "15", "", ""]
];

const partners = ["#d1d5db", "#9ca3af", "#6b7280", "#d1d5db", "#9ca3af", "#6b7280"];

export default function Specs() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const asset = useMemo(() => assets.find((item) => item.id === id) ?? assets[0], [id]);
  const { width } = useWindowDimensions();
  const showNav = width >= 900;
  const title = asset?.title ?? "Sunset Blvd MiniMega";
  const location = asset?.location ?? "8439 Sunset Blvd, West Hollywood, CA 90069";
  const status = asset?.status ?? "Available";
  const heroImage =
    asset?.image ?? "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=80";
  const price = asset?.price ?? "$4,250";

  return (
    <View style={styles.outer}>
      <View style={[styles.header, Platform.OS === "web" && styles.headerWebSticky]}>
        <View style={styles.sectionInner}>
          <View style={styles.headerContent}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>three</Text>
              <View style={styles.logoStack}>
                <Text style={styles.logoTextBold}>angles</Text>
                <Text style={styles.logoTagline}>advertising agency</Text>
              </View>
            </View>

            {showNav ? (
              <View style={styles.nav}>
                {["Home", "Showcase", "Locations", "Contact"].map((tab) => (
                  <Pressable
                    key={tab}
                    onPress={() => router.push({ pathname: "/", params: { tab } })}
                  >
                    <Text style={styles.navLink}>{tab}</Text>
                  </Pressable>
                ))}
              </View>
            ) : (
              <View style={styles.navSpacer} />
            )}

            <View style={styles.headerActions}>
              <Pressable style={styles.bookBtn}>
                <Text style={styles.bookBtnText}>Book a Campaign</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.breadcrumbRow}>
            <Pressable onPress={() => router.push({ pathname: "/", params: { tab: "Home" } })}>
              <Text style={styles.breadcrumbLink}>Home</Text>
            </Pressable>
            <Text style={styles.breadcrumbSep}>›</Text>
            <Pressable onPress={() => router.push({ pathname: "/", params: { tab: "Showcase" } })}>
              <Text style={styles.breadcrumbLink}>Showcase</Text>
            </Pressable>
            <Text style={styles.breadcrumbSep}>›</Text>
            <Text style={styles.breadcrumbCurrent}>MM-902 Sunset Blvd</Text>
          </View>

        <View style={styles.titleRow}>
          <View style={styles.titleLeft}>
            <View style={styles.statusRow}>
              <View style={styles.statusPill}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>{status === "Available" ? "Available Now" : "Occupied"}</Text>
              </View>
              <Text style={styles.statusId}>ID: MM-902-LA</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.locationRow}>
              <MaterialIcons name="place" size={16} color="#ef6c1f" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>

          <View style={styles.titleActions}>
            <TouchableOpacity style={styles.actionBtn}>
              <MaterialIcons name="share" size={16} color="#111827" />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainGrid}>
          <View style={styles.leftColumn}>
            <View style={styles.heroCard}>
              <Image source={{ uri: heroImage }} style={styles.heroImage} />
              <TouchableOpacity style={styles.photoBtn}>
                <MaterialIcons name="photo-library" size={14} color="#fff" />
                <Text style={styles.photoBtnText}>View All Photos</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sectionHeader}>
              <View style={styles.sectionAccent} />
              <Text style={styles.sectionTitle}>Technical Specifications</Text>
            </View>

            <View style={styles.specGrid}>
              {specCards.map((card) => (
                <View key={card.id} style={styles.specCard}>
                  <View style={styles.specIcon}>
                    <MaterialIcons name={card.icon as any} size={18} color="#ef6c1f" />
                  </View>
                  <Text style={styles.specLabel}>{card.label}</Text>
                  <Text style={styles.specValue}>{card.value}</Text>
                </View>
              ))}
            </View>

            <View style={styles.calendarCard}>
              <View style={styles.calendarHeader}>
                <Text style={styles.calendarTitle}>Availability Calendar</Text>
                <View style={styles.calendarLegend}>
                  <View style={[styles.legendDot, { backgroundColor: "#e5e7eb" }]} />
                  <Text style={styles.legendText}>Booked</Text>
                  <View style={[styles.legendDot, { backgroundColor: "#fdba74" }]} />
                  <Text style={styles.legendText}>Available</Text>
                </View>
              </View>

              <View style={styles.calendarGrid}>
                {calendarDays.map((row, rowIndex) => (
                  <View key={`row-${rowIndex}`} style={styles.calendarRow}>
                    {row.map((day, index) => {
                      const isSelected = false;
                      const isEmpty = day === "";
                      return (
                        <View
                          key={`${day}-${index}`}
                          style={[
                            styles.calendarCell,
                            isSelected && styles.calendarCellActive,
                            isEmpty && styles.calendarCellEmpty
                          ]}
                        >
                          <Text style={[styles.calendarCellText, isSelected && styles.calendarCellTextActive]}>
                            {day}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                ))}
              </View>

              <Text style={styles.calendarNote}>Monthly 12</Text>
            </View>

            <View style={styles.sectionHeader}>
              <View style={styles.sectionAccent} />
              <Text style={styles.sectionTitle}>Past Partners</Text>
            </View>

            <View style={styles.partnerRow}>
              {partners.map((color, index) => (
                <View key={`partner-${index}`} style={[styles.partnerLogo, { backgroundColor: color }]} />
              ))}
            </View>

            <View style={styles.mapCard}>
              <View style={styles.mapHeader}>
                <Text style={styles.mapTitle}>Precise Location</Text>
                <Text style={styles.mapLink}>Get Directions</Text>
              </View>
              <View style={styles.mapFrame}>
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
                  }}
                  style={styles.mapImage}
                />
              </View>
            </View>
          </View>

          <View style={styles.rightColumn}>
            <View style={styles.rateCard}>
              <Text style={styles.rateLabel}>Rate per period</Text>
              <Text style={styles.rateValue}>{price}</Text>
              <Text style={styles.rateSub}>/ 4 weeks</Text>

              <View style={styles.rateLine}>
                <Text style={styles.rateItemLabel}>Platform Fee</Text>
                <Text style={styles.rateItemValue}>$150.00</Text>
              </View>
              <View style={styles.rateLine}>
                <Text style={styles.rateItemLabel}>Production Estimate</Text>
                <Text style={styles.rateItemValue}>$850.00</Text>
              </View>

              <View style={styles.rateTotal}>
                <Text style={styles.rateTotalLabel}>Total Est.</Text>
                <Text style={styles.rateTotalValue}>$5,250.00</Text>
              </View>

              <TouchableOpacity style={styles.primaryBtn}>
                <MaterialIcons name="shopping-bag" size={16} color="#fff" />
                <Text style={styles.primaryBtnText}>Rent Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryBtn}>
                <Text style={styles.secondaryBtnText}>Download Media Kit</Text>
              </TouchableOpacity>

              <View style={styles.guaranteeBox}>
                <View style={styles.guaranteeIcon}>
                  <MaterialIcons name="verified" size={16} color="#16a34a" />
                </View>
                <View style={styles.guaranteeTextWrap}>
                  <Text style={styles.guaranteeTitle}>Guaranteed Visibility</Text>
                  <Text style={styles.guaranteeText}>
                    This unit is part of our Verified Network, ensuring 99.9% uptime for digital displays.
                  </Text>
                </View>
              </View>

              <View style={styles.helpBox}>
                <Text style={styles.helpLabel}>Need help with design?</Text>
                <Text style={styles.helpLink}>Contact our creative team</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <SiteFooter />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: "#f7f5f2"
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f5f2"
  },
  sectionInner: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center"
  },
  header: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    zIndex: 100
  },
  headerWebSticky: {
    position: "sticky",
    top: 0
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16
  },
  logo: {
    flexDirection: "row"
  },
  logoStack: {
    marginLeft: 4
  },
  logoTagline: {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#8a8a95",
    marginTop: -2,
    textAlign: "right"
  },
  logoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF6B35"
  },
  logoTextBold: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000"
  },
  nav: {
    flexDirection: "row",
    gap: 24
  },
  navSpacer: {
    flex: 1
  },
  navLink: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500"
  },
  headerActions: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center"
  },
  bookBtn: {
    backgroundColor: "#FF6B35",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20
  },
  bookBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13
  },
  section: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 40,
    maxWidth: 1200,
    width: "100%",
    alignSelf: "center"
  },
  breadcrumbRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
    flexWrap: "wrap"
  },
  breadcrumbLink: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "600"
  },
  breadcrumbSep: {
    fontSize: 12,
    color: "#cbd5e1"
  },
  breadcrumbCurrent: {
    fontSize: 12,
    color: "#94a3b8"
  },
  titleRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 18
  },
  titleLeft: {
    flex: 1,
    minWidth: 240
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#dcfce7"
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#22c55e"
  },
  statusText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#15803d",
    textTransform: "uppercase",
    letterSpacing: 0.8
  },
  statusId: {
    fontSize: 11,
    color: "#94a3b8",
    fontWeight: "600"
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a"
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6
  },
  locationText: {
    fontSize: 13,
    color: "#475569"
  },
  titleActions: {
    flexDirection: "row",
    gap: 10
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  actionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827"
  },
  mainGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24
  },
  leftColumn: {
    flex: 1,
    minWidth: 300,
    gap: 20
  },
  rightColumn: {
    width: 320
  },
  heroCard: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    ...(Platform.OS === "web"
      ? { boxShadow: "0px 18px 40px rgba(15,23,42,0.15)" }
      : {
          shadowColor: "#0f172a",
          shadowOpacity: 0.2,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: 12 },
          elevation: 6
        })
  },
  heroImage: {
    width: "100%",
    height: 240
  },
  photoBtn: {
    position: "absolute",
    bottom: 10,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(15,23,42,0.85)"
  },
  photoBtnText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "600"
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  sectionAccent: {
    width: 4,
    height: 14,
    borderRadius: 999,
    backgroundColor: "#ef6c1f"
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a"
  },
  specGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12
  },
  specCard: {
    flex: 1,
    minWidth: 140,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  specIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#fff7ed",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  specLabel: {
    fontSize: 11,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: 0.8
  },
  specValue: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0f172a",
    marginTop: 4
  },
  calendarCard: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  calendarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12
  },
  calendarTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f172a"
  },
  calendarLegend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 999
  },
  legendText: {
    fontSize: 10,
    color: "#94a3b8",
    marginRight: 8
  },
  calendarGrid: {
    gap: 8
  },
  calendarRow: {
    flexDirection: "row",
    gap: 8
  },
  calendarCell: {
    width: 42,
    height: 42,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc"
  },
  calendarCellActive: {
    borderColor: "#fb923c",
    backgroundColor: "#ffedd5"
  },
  calendarCellEmpty: {
    borderColor: "transparent",
    backgroundColor: "transparent"
  },
  calendarCellText: {
    fontSize: 12,
    color: "#0f172a",
    fontWeight: "600"
  },
  calendarCellTextActive: {
    color: "#ef6c1f"
  },
  calendarNote: {
    fontSize: 11,
    color: "#94a3b8",
    marginTop: 12
  },
  partnerRow: {
    flexDirection: "row",
    gap: 12
  },
  partnerLogo: {
    width: 44,
    height: 28,
    borderRadius: 6
  },
  mapCard: {
    padding: 16,
    borderRadius: 14,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  mapHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12
  },
  mapTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0f172a"
  },
  mapLink: {
    fontSize: 12,
    color: "#f97316",
    fontWeight: "600"
  },
  mapFrame: {
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
  mapImage: {
    width: "100%",
    height: 200
  },
  rateCard: {
    padding: 18,
    borderRadius: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    ...(Platform.OS === "web"
      ? { boxShadow: "0px 18px 40px rgba(15,23,42,0.12)" }
      : {
          shadowColor: "#0f172a",
          shadowOpacity: 0.18,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: 12 },
          elevation: 5
        })
  },
  rateLabel: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: "#94a3b8",
    fontWeight: "700"
  },
  rateValue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a",
    marginTop: 6
  },
  rateSub: {
    fontSize: 12,
    color: "#94a3b8",
    marginBottom: 12
  },
  rateLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8
  },
  rateItemLabel: {
    fontSize: 12,
    color: "#64748b"
  },
  rateItemValue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155"
  },
  rateTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb"
  },
  rateTotalLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f172a"
  },
  rateTotalValue: {
    fontSize: 16,
    fontWeight: "800",
    color: "#ef6c1f"
  },
  primaryBtn: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#ef6c1f"
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13
  },
  secondaryBtn: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center"
  },
  secondaryBtnText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0f172a"
  },
  guaranteeBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#f1f5f9",
    flexDirection: "row",
    gap: 10
  },
  guaranteeIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: "#dcfce7",
    alignItems: "center",
    justifyContent: "center"
  },
  guaranteeTextWrap: {
    flex: 1
  },
  guaranteeTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0f172a"
  },
  guaranteeText: {
    fontSize: 11,
    color: "#64748b",
    marginTop: 4
  },
  helpBox: {
    marginTop: 16,
    alignItems: "center",
    gap: 6
  },
  helpLabel: {
    fontSize: 11,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: 0.6
  },
  helpLink: {
    fontSize: 12,
    fontWeight: "700",
    color: "#ef6c1f"
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
    paddingHorizontal: 18,
    paddingBottom: 28,
    paddingTop: 24,
    backgroundColor: "#fff"
  },
  footerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%"
  },
  footerCol: {
    flex: 1,
    minWidth: 200,
    gap: 10
  },
  footerColSmall: {
    width: 180,
    gap: 8
  },
  footerTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0f172a",
    textTransform: "uppercase",
    letterSpacing: 1.1
  },
  footerText: {
    fontSize: 11,
    color: "#64748b",
    lineHeight: 16
  },
  footerTextStrong: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0f172a"
  },
  footerBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#e2e8f0",
    alignItems: "center",
    justifyContent: "center"
  },
  footerBadgeText: {
    fontWeight: "800",
    color: "#334155"
  },
  footerNote: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 11,
    color: "#94a3b8"
  }
});
