import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Pressable
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { caseStudies } from "../assets/CaseStudies";

export default function CaseStudies() {
  const { width } = useWindowDimensions();
  const compact = width < 900;

  return (
    <View style={styles.outer}>
      <SiteHeader />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.heroPill}>
            <View style={styles.heroPillDot} />
            <Text style={styles.heroPillText}>Global Impact Report</Text>
          </View>
          <Text style={[styles.heroTitle, compact && styles.heroTitleCompact]}>Partner Success</Text>
          <Text style={[styles.heroTitleAccent, compact && styles.heroTitleCompact]}>Stories.</Text>
          <Text style={[styles.heroSubtitle, compact && styles.heroSubtitleCompact]}>
            We help the world&apos;s most ambitious brands dominate the physical landscape through intelligent, data-led
            outdoor advertising.
          </Text>

          <View style={[styles.quoteCard, compact && styles.quoteCardCompact]}>
            <LinearGradient
              colors={["#f8f6f2", "#ffffff", "#f8f3ed"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.quoteGradient}
            />
            <View style={styles.quoteAvatarShell}>
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" }}
                style={styles.quoteAvatar}
              />
              <View style={styles.quoteMarkWrap}>
                <Text style={styles.quoteMark}>&quot;</Text>
              </View>
            </View>
            <View style={styles.quoteTextWrap}>
              <Text style={[styles.quoteText, compact && styles.quoteTextCompact]}>
                &quot;Three Angles transformed our outdoor presence. Their data-driven approach to billboard placement gave
                us a <Text style={styles.quoteHighlight}>40% uplift</Text> in regional awareness within just three months.&quot;
              </Text>
              <Text style={styles.quoteAuthor}>Omar Abdallah</Text>
              <Text style={styles.quoteRole}>CEO of Centrada and Omar Abdallah Developments</Text>
            </View>
          </View>

          <View style={styles.rowTwo}>
            {caseStudies.slice(0, 2).map((card) => (
              <View key={card.id} style={styles.storyCard}>
                <Image source={card.image} style={[styles.storyImage, compact && styles.storyImageCompact]} />
                <View style={styles.partnerPill}>
                  <View style={[styles.partnerIcon, { backgroundColor: card.partnerColor }]}> 
                    <Text style={styles.partnerIconText}>{card.partner.slice(0, 1).toUpperCase()}</Text>
                  </View>
                  <View>
                    <Text style={styles.partnerLabel}>Partner</Text>
                    <Text style={styles.partnerText}>{card.partner}</Text>
                  </View>
                </View>
                <View style={styles.storyBody}>
                  <Text style={[styles.storyTitle, compact && styles.storyTitleCompact]}>{card.title}</Text>
                  <Text style={[styles.storyDesc, compact && styles.storyDescCompact]}>{card.description}</Text>
                  <View style={styles.metricRow}>
                    <Text style={[styles.metricValue, compact && styles.metricValueCompact]}>{card.metric}</Text>
                    <Text style={styles.metricLabel}>{card.note}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.fullCard}>
            <Image source={caseStudies[2].image} style={[styles.fullImage, compact && styles.fullImageCompact]} />
            <View style={styles.partnerPillFull}>
              <View style={[styles.partnerIcon, { backgroundColor: caseStudies[2].partnerColor }]}> 
                <Text style={styles.partnerIconText}>{caseStudies[2].partner.slice(0, 1).toUpperCase()}</Text>
              </View>
              <View>
                <Text style={styles.partnerLabel}>Partner</Text>
                <Text style={styles.partnerText}>{caseStudies[2].partner}</Text>
              </View>
            </View>
            <View style={styles.storyBodyFull}>
              <Text style={styles.storyTitle}>{caseStudies[2].title}</Text>
              <Text style={[styles.storyDesc, compact && styles.storyDescCompact]}>{caseStudies[2].description}</Text>
              <View style={styles.metricRow}>
                <Text style={[styles.metricValue, compact && styles.metricValueCompact]}>{caseStudies[2].metric}</Text>
                <Text style={styles.metricLabel}>{caseStudies[2].note}</Text>
              </View>
            </View>
          </View>

          <View style={styles.ctaCard}>
            <LinearGradient
              colors={["#2b1408", "#3f1b08", "#201007"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.ctaGradient}
            />
            <Text style={[styles.ctaTitle, compact && styles.ctaTitleCompact]}>Ready to build your</Text>
            <Text style={[styles.ctaTitleAccent, compact && styles.ctaTitleCompact]}>own story?</Text>
            <Text style={[styles.ctaSubtitle, compact && styles.ctaSubtitleCompact]}>
              Join hundreds of forward-thinking brands that trust Three Angles for their outdoor advertising
              infrastructure.
            </Text>
            <View style={styles.ctaButtons}>
              <Pressable style={styles.ctaPrimary}>
                <Text style={styles.ctaPrimaryText}>Launch Your Campaign</Text>
              </Pressable>
              <Pressable style={styles.ctaSecondary}>
                <Text style={styles.ctaSecondaryText}>Talk to an Expert</Text>
              </Pressable>
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
    backgroundColor: "#ffffff"
  },
  header: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#ece9e5",
    paddingHorizontal: 16,
    paddingVertical: 12,
    zIndex: 20
  },
  logoDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#f97316"
  },
  container: {
    flex: 1,
    backgroundColor: "#f7f5f2"
  },
  section: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    paddingHorizontal: 18,
    paddingTop: 32,
    paddingBottom: 40
  },
  heroPill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#fdebdc",
    paddingHorizontal: 11,
    paddingVertical: 5,
    borderRadius: 999
  },
  heroPillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ef6c1f"
  },
  heroPillText: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#ef6c1f",
    fontWeight: "700"
  },
  heroTitle: {
    marginTop: 18,
    fontSize: 68,
    fontWeight: "900",
    color: "#20130d",
    lineHeight: 70
  },
  heroTitleCompact: {
    fontSize: 46,
    lineHeight: 50
  },
  heroTitleAccent: {
    fontSize: 68,
    fontWeight: "900",
    color: "#ef6c1f",
    lineHeight: 70
  },
  heroSubtitle: {
    marginTop: 14,
    maxWidth: 700,
    fontSize: 30,
    lineHeight: 42,
    color: "#7e6a5f"
  },
  heroSubtitleCompact: {
    fontSize: 20,
    lineHeight: 30
  },
  quoteCard: {
    marginTop: 48,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "#efe6dc",
    overflow: "hidden",
    padding: 28,
    flexDirection: "row",
    alignItems: "center",
    gap: 24
  },
  quoteCardCompact: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  quoteGradient: {
    ...StyleSheet.absoluteFillObject
  },
  quoteAvatarShell: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#eee4da",
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  quoteAvatar: {
    width: 146,
    height: 146,
    borderRadius: 73
  },
  quoteMarkWrap: {
    position: "absolute",
    bottom: 8,
    right: -8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ef6c1f",
    alignItems: "center",
    justifyContent: "center"
  },
  quoteMark: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "800"
  },
  quoteTextWrap: {
    flex: 1,
    maxWidth: 600
  },
  quoteText: {
    fontSize: 56,
    lineHeight: 62,
    fontWeight: "800",
    fontStyle: "italic",
    color: "#20130d"
  },
  quoteTextCompact: {
    fontSize: 40,
    lineHeight: 46
  },
  quoteHighlight: {
    color: "#ef6c1f"
  },
  quoteAuthor: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: "700",
    color: "#20130d"
  },
  quoteRole: {
    marginTop: 2,
    fontSize: 15,
    color: "#8b786d"
  },
  rowTwo: {
    marginTop: 48,
    flexDirection: "row",
    gap: 28,
    flexWrap: "wrap"
  },
  storyCard: {
    flex: 1,
    minWidth: 300
  },
  storyImage: {
    width: "100%",
    height: 440,
    borderRadius: 24
  },
  storyImageCompact: {
    height: 300
  },
  partnerPill: {
    position: "absolute",
    top: 16,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    ...(Platform.OS === "web" ? { boxShadow: "0px 10px 24px rgba(17,24,39,0.15)" } : {})
  },
  partnerIcon: {
    width: 32,
    height: 32,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center"
  },
  partnerIconText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700"
  },
  partnerLabel: {
    fontSize: 9,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: "#a08f84"
  },
  partnerText: {
    fontSize: 13,
    color: "#20130d",
    fontWeight: "700"
  },
  storyBody: {
    marginTop: 16
  },
  storyTitle: {
    fontSize: 45,
    lineHeight: 48,
    color: "#20130d",
    fontWeight: "800"
  },
  storyTitleCompact: {
    fontSize: 34,
    lineHeight: 38
  },
  storyDesc: {
    marginTop: 12,
    fontSize: 20,
    lineHeight: 30,
    color: "#7e6a5f",
    maxWidth: 500
  },
  storyDescCompact: {
    fontSize: 16,
    lineHeight: 24
  },
  metricRow: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between"
  },
  metricValue: {
    fontSize: 50,
    lineHeight: 52,
    color: "#ef6c1f",
    fontWeight: "800"
  },
  metricValueCompact: {
    fontSize: 38,
    lineHeight: 40
  },
  metricLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#8b786d",
    marginLeft: 8,
    textAlign: "right"
  },
  fullCard: {
    marginTop: 42
  },
  fullImage: {
    width: "100%",
    height: 390,
    borderRadius: 28
  },
  fullImageCompact: {
    height: 280
  },
  partnerPillFull: {
    position: "absolute",
    top: 16,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    ...(Platform.OS === "web" ? { boxShadow: "0px 10px 24px rgba(17,24,39,0.15)" } : {})
  },
  storyBodyFull: {
    marginTop: 18
  },
  ctaCard: {
    marginTop: 52,
    borderRadius: 36,
    overflow: "hidden",
    paddingVertical: 58,
    paddingHorizontal: 24,
    alignItems: "center"
  },
  ctaGradient: {
    ...StyleSheet.absoluteFillObject
  },
  ctaTitle: {
    color: "#ffffff",
    fontSize: 66,
    lineHeight: 68,
    fontWeight: "800"
  },
  ctaTitleCompact: {
    fontSize: 44,
    lineHeight: 48
  },
  ctaTitleAccent: {
    color: "#ef6c1f",
    fontSize: 66,
    lineHeight: 68,
    fontWeight: "800",
    fontStyle: "italic"
  },
  ctaSubtitle: {
    marginTop: 18,
    fontSize: 22,
    lineHeight: 34,
    color: "#f2e9df",
    textAlign: "center",
    maxWidth: 760
  },
  ctaSubtitleCompact: {
    fontSize: 16,
    lineHeight: 24
  },
  ctaButtons: {
    marginTop: 30,
    flexDirection: "row",
    gap: 12
  },
  ctaPrimary: {
    backgroundColor: "#ef6c1f",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999
  },
  ctaPrimaryText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700"
  },
  ctaSecondary: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.20)",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 999
  },
  ctaSecondaryText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600"
  },
  footer: {
    marginTop: 48,
    backgroundColor: "#f3f2ef",
    borderTopWidth: 1,
    borderTopColor: "#e5dfd8",
    paddingHorizontal: 18,
    paddingTop: 28,
    paddingBottom: 16
  },
  footerInner: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20
  },
  footerColLeft: {
    flex: 1,
    minWidth: 220
  },
  footerBrand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  footerBrandText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#20130d"
  },
  footerDesc: {
    marginTop: 10,
    maxWidth: 320,
    fontSize: 12,
    lineHeight: 18,
    color: "#7c6f68"
  },
  footerSocials: {
    marginTop: 14,
    flexDirection: "row",
    gap: 14
  },
  footerColsRight: {
    flexDirection: "row",
    gap: 42
  },
  footerHeading: {
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: "#20130d",
    fontWeight: "700",
    marginBottom: 8
  },
  footerItem: {
    fontSize: 12,
    color: "#6d5d53",
    marginBottom: 8
  },
  footerBottom: {
    width: "100%",
    maxWidth: 1120,
    alignSelf: "center",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#e5dfd8",
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10
  },
  footerCopy: {
    fontSize: 11,
    color: "#7c6f68"
  },
  footerLegal: {
    flexDirection: "row",
    gap: 14
  },
  footerLegalText: {
    fontSize: 11,
    color: "#7c6f68"
  }
});
