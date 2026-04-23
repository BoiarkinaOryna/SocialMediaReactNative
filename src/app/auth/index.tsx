import { useState } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm, { AuthFormData } from "../../modules/auth/ui/AuthForm";

const API_URL = "https://your-api.com";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("register");

  const handleSubmit = async (data: AuthFormData) => {
    if (mode !== "register") return;

    try {
      const payload = {
        email: data.email,
        password: data.password,
      };

      await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

    } catch (error) {
      console.log("Request failed");
    }
  };

  return (
    <View style={styles.container}>
      <AuthForm
        mode={mode}
        onChangeMode={setMode}
        onSubmit={handleSubmit} 
      />
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