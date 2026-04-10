import { useState } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../../modules/auth/ui/AuthForm";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("register");

  return (
    <View style={styles.container}>
      <AuthForm mode={mode} onChangeMode={setMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#CFCAD3",
    padding: 12,
  },
});