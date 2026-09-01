import React, { useMemo, useState } from "react";
import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  const isValidEmail = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()), [email]);

  const handleNewsletterSubmit = () => {
    if (!isValidEmail) return;
    setEmail("");
  };

  return (
    <View style={styles.footer}>
      <View style={styles.sectionInner}>
        <View style={styles.footerTop}>
          <View style={styles.footerColumn}>
            <View style={styles.footerLogo}>
              <Text style={styles.footerLogoText}>three</Text>
              <Text style={styles.footerLogoBold}>angles</Text>
            </View>
            <Text style={styles.footerAbout}>
              Three Angles Advertising Agency. Connecting brands with the world of high-impact solutions.
            </Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeader}>Platform</Text>
            <TouchableOpacity onPress={() => router.push({ pathname: "/", params: { tab: "Showcase" } })}>
              <Text style={styles.footerLink}>Inventory Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/", params: { tab: "Showcase", filter: "Billboards" } })}
            >
              <Text style={styles.footerLink}>Billboards</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/", params: { tab: "Showcase", filter: "Minimegas" } })}
            >
              <Text style={styles.footerLink}>Mini Megas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/", params: { tab: "Showcase", filter: "Screens" } })}
            >
              <Text style={styles.footerLink}>Screens</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/", params: { tab: "Showcase", filter: "Monorail Ads" } })}
            >
              <Text style={styles.footerLink}>Monorail Ads</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeader}>Company</Text>
            <TouchableOpacity onPress={() => router.push("/CaseStudies")}>
              <Text style={styles.footerLink}>Case Studies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push({ pathname: "/", params: { tab: "Contact" } })}>
              <Text style={styles.footerLink}>Contact</Text>
            </TouchableOpacity>
            <Text style={styles.footerHeader}>Social Media</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/threeangles_advertising/")}> 
              <Text style={styles.footerLink}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/p/DUDuqGyCCRY/")}> 
              <Text style={styles.footerLink}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeader}>Stay Updated</Text>
            <View style={styles.newsletterForm}>
              <TextInput
                style={styles.newsletterInput}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
              />
              <TouchableOpacity style={styles.newsletterBtn} onPress={handleNewsletterSubmit}>
                <Text style={styles.newsletterBtnText}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footerBottom}>
          <Text style={styles.footerCopyright}>© 2026 Three Angles Advertising Agency. All rights reserved.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingVertical: 40,
    paddingHorizontal: 24
  },
  sectionInner: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center"
  },
  footerTop: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 32,
    justifyContent: "space-between",
    marginBottom: 32
  },
  footerColumn: {
    minWidth: 180
  },
  footerLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12
  },
  footerLogoText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF6B35"
  },
  footerLogoBold: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000"
  },
  footerAbout: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
    maxWidth: 260
  },
  footerHeader: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111"
  },
  footerLink: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8
  },
  newsletterForm: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff"
  },
  newsletterInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 12,
    color: "#111"
  },
  newsletterBtn: {
    backgroundColor: "#FF6B35",
    paddingHorizontal: 16,
    justifyContent: "center"
  },
  newsletterBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700"
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 20
  },
  footerCopyright: {
    fontSize: 11,
    color: "#999"
  }
});
