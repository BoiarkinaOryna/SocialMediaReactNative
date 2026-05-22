import { COLORS } from "@shared/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.fog,
    paddingHorizontal: 8,
  },
  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.blue10,
    overflow: "hidden",
  },
  header: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 10,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.blue50,
  },
  searchContainer: {
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  searchField: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    minHeight: 40,
    borderWidth: 1,
    borderColor: COLORS.blue20,
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.black,
    paddingVertical: 8,
  },
  listWrapper: {
    flex: 1,
  },
  listContent: {
    paddingTop: 2,
    paddingBottom: 24,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  contactName: {
    fontSize: 17,
    fontWeight: "500",
    color: COLORS.black,
  },
});
