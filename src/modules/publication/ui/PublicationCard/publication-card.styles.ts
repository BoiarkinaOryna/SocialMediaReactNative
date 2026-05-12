import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.blue10,
    overflow: "hidden",
  },
  top: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatarWrap: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: COLORS.pulm10,
  },
  authorName: {
    fontSize: 18,
    fontWeight: "500",
    color: COLORS.black,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.blue10,
  },
  body: {
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.black,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.black,
  },
  link: {
    fontSize: 15,
    color: COLORS.pulm,
  },
  imagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  postImage: {
    width: 150,
    height: 180,
    borderRadius: 18,
  },
});
