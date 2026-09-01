import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useMemo } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";
import SiteFooter from "../components/SiteFooter";

const contactItems = [
  {
    id: "email",
    title: "Email Us",
    value: "Threeangles.eg@gmail.com",
    note: "Expect a response within 24 hours.",
    icon: "mail"
  },
  {
    id: "phone",
    title: "Call Us",
    value: "+20 1222 16 9797",
    note: "Mon-Fri, 9am - 6pm GST.",
    icon: "call"
  },
  {
    id: "visit",
    title: "Visit HQ",
    value: "Villa 113 north dahshur Axis,",
    note: "El Sheikh Zayed,6th of October City, Egypt",
    icon: "place"
  }
];

export default function Contact() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 980;

  const palette = useMemo(
    () => ({
      bg: "#f8f5f1",
      card: "#ffffff",
      text: "#1f150f",
      muted: "#7a6b62",
      accent: "#e7680c",
      accentSoft: "#f6e6db",
      line: "#eadfd6",
      shadow: "rgba(17,24,39,0.10)"
    }),
    []
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: palette.bg }]} showsVerticalScrollIndicator={false}>
      <View style={styles.section}>
        <Text style={[styles.title, { color: palette.text }]}>Get in Touch</Text>
        <Text style={[styles.subtitle, { color: palette.accent }]}
        >
          Ready to elevate your outdoor advertising? Our team is standing by to help you scale your reach across Sheikh Zayed and 6th of October.
        </Text>
        <View style={[styles.split, !isDesktop && styles.splitStacked]}>
          <View style={styles.leftColumn}>
            {contactItems.map((item) => (
              <View key={item.id} style={styles.contactRow}>
                <View style={styles.contactBody}>
                  <Text style={[styles.contactTitle, { color: palette.text }]}>{item.title}</Text>
                  <Text style={[styles.contactValue, { color: palette.accent }]}
                  >
                    {item.value}
                  </Text>
                  <Text style={[styles.contactNote, { color: palette.muted }]}>{item.note}</Text>
                </View>
              </View>
            ))}

            <View style={[styles.mapCard, { borderColor: palette.line }]}>
              <View style={styles.mapPlaceholder} />
            </View>
          </View>

          <View style={[styles.formCard, { borderColor: palette.line, backgroundColor: palette.card }]}>
            <View style={styles.formRow}>
              <View style={styles.formField}>
                <Text style={[styles.formLabel, { color: palette.text }]}>Full Name</Text>
                <TextInput
                  placeholder="John Doe"
                  placeholderTextColor="#9c8f88"
                  style={[styles.formInput, { borderColor: palette.line, color: palette.text }]}
                />
              </View>
              <View style={styles.formField}>
                <Text style={[styles.formLabel, { color: palette.text }]}>Company</Text>
                <TextInput
                  placeholder="Acme Corp"
                  placeholderTextColor="#9c8f88"
                  style={[styles.formInput, { borderColor: palette.line, color: palette.text }]}
                />
              </View>
            </View>

            <View style={styles.formFieldFull}>
              <Text style={[styles.formLabel, { color: palette.text }]}>Work Email</Text>
              <TextInput
                placeholder="john@company.com"
                placeholderTextColor="#9c8f88"
                style={[styles.formInput, { borderColor: palette.line, color: palette.text }]}
              />
            </View>

            <View style={styles.formFieldFull}>
              <Text style={[styles.formLabel, { color: palette.text }]}>How can we help?</Text>
              <TextInput
                placeholder="Tell us about your outdoor advertising needs..."
                placeholderTextColor="#9c8f88"
                multiline
                style={[styles.formInput, styles.formTextarea, { borderColor: palette.line, color: palette.text }]}
              />
            </View>

            <TouchableOpacity style={[styles.submitBtn, { backgroundColor: palette.accent }]}>
              <Text style={styles.submitBtnText}>Send Message</Text>
              <MaterialIcons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>

            <Text style={[styles.formNote, { color: palette.muted }]}>Secure & Confidential</Text>
          </View>
        </View>
      </View>

      <SiteFooter />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    paddingHorizontal: 22,
    paddingTop: 40,
    paddingBottom: 50,
    maxWidth: 1180,
    width: "100%",
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "800"
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 620
  },
  split: {
    marginTop: 32,
    flexDirection: "row",
    gap: 36,
    alignItems: "flex-start"
  },
  splitStacked: {
    flexDirection: "column"
  },
  leftColumn: {
    flex: 1,
    gap: 26
  },
  contactRow: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-start"
  },
  contactIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center"
  },
  contactBody: {
    flex: 1,
    gap: 4
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: "700"
  },
  contactValue: {
    fontSize: 14,
    fontWeight: "700"
  },
  contactNote: {
    fontSize: 12
  },
  mapCard: {
    borderRadius: 18,
    borderWidth: 1,
    overflow: "hidden"
  },
  mapPlaceholder: {
    height: 160,
    backgroundColor: "#f0e7de"
  },
  formCard: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    padding: 22,
    gap: 16,
    ...(Platform.OS === "web"
      ? { boxShadow: "0px 18px 32px rgba(17,24,39,0.12)" }
      : {
          shadowColor: "#111827",
          shadowOpacity: 0.12,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: 10 },
          elevation: 4
        })
  },
  formRow: {
    flexDirection: "row",
    gap: 16
  },
  formField: {
    flex: 1
  },
  formFieldFull: {
    gap: 10
  },
  formLabel: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8
  },
  formInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 13,
    backgroundColor: "#fff"
  },
  formTextarea: {
    height: 120,
    textAlignVertical: "top"
  },
  submitBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 4
  },
  submitBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14
  },
  formNote: {
    textAlign: "center",
    fontSize: 11,
    letterSpacing: 1
  },
  footer: {
    borderTopWidth: 1
  },
  footerInner: {
    maxWidth: 1180,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 22,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap"
  },
  footerCopy: {
    fontSize: 12
  },
  footerLinks: {
    flexDirection: "row",
    gap: 18
  },
  footerLink: {
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1
  }
});
