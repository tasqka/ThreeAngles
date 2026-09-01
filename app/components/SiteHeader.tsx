import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Platform, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

export default function SiteHeader() {
  const { tab } = useLocalSearchParams<{ tab?: string }>();
  const { width } = useWindowDimensions();
  const showNav = width >= 900;

  const activeNav = tab === "Home" || tab === "Showcase" || tab === "Locations" || tab === "Contact" ? tab : "Home";

  return (
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
              <TouchableOpacity onPress={() => router.push({ pathname: "/", params: { tab: "Home" } })}>
                <Text style={[styles.navLink, activeNav === "Home" && styles.navLinkActive]}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push({ pathname: "/", params: { tab: "Showcase" } })}>
                <Text style={[styles.navLink, activeNav === "Showcase" && styles.navLinkActive]}>Showcase</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push({ pathname: "/", params: { tab: "Locations" } })}>
                <Text style={[styles.navLink, activeNav === "Locations" && styles.navLinkActive]}>Locations</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push({ pathname: "/", params: { tab: "Contact" } })}>
                <Text style={[styles.navLink, activeNav === "Contact" && styles.navLinkActive]}>Contact</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.navSpacer} />
          )}

          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.bookBtn} onPress={() => router.push({ pathname: "/", params: { tab: "Contact" } })}>
              <Text style={styles.bookBtnText}>Book a Campaign</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  navLinkActive: {
    color: "#111827",
    fontWeight: "700"
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
  }
});
