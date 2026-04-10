import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 32, 
    padding: 30,     
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",
    marginBottom: 30,
  },

  tab: {
    marginHorizontal: 15, 
    fontWeight: "700",
    fontSize: 24,        
    color: "#9E9E9E",
  },

  activeTab: {
    color: "#000",
    borderBottomWidth: 3,
    borderBottomColor: "#4A3248", 
    paddingBottom: 4,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 25,
    textAlign: "center",
    color: "#000",
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
    color: "#1A1A1A",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: "#fff",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#5B3A57",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
