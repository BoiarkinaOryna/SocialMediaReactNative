import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useAuthForm } from "../hooks/useAuthForm";
import { styles } from "./auth.styles";

type Props = {
  mode: "login" | "register";
  onChangeMode?: (mode: "login" | "register") => void;
};

export default function AuthForm({ mode, onChangeMode }: Props) {
  const {
    form,
    errors,
    handleChange,
    handleSubmit,
    isLoading,
    isRegister,
  } = useAuthForm(mode);

  return (
    <View style={styles.card}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => onChangeMode?.("register")}>
          <Text style={[styles.tab, isRegister && styles.activeTab]}>
            Реєстрація
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeMode?.("login")}>
          <Text style={[styles.tab, !isRegister && styles.activeTab]}>
            Авторизація
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        {isRegister ? "Створити акаунт" : "Увійти"}
      </Text>

      {/* EMAIL */}
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={form.email}
        onChangeText={(t) => handleChange("email", t)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      {/* PASSWORD */}
      <TextInput
        placeholder="Пароль"
        secureTextEntry
        style={styles.input}
        value={form.password}
        onChangeText={(t) => handleChange("password", t)}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password}</Text>
      )}

      {/* CONFIRM PASSWORD */}
      {isRegister && (
        <View>
          <TextInput
            placeholder="Повтор пароля"
            secureTextEntry
            style={styles.input}
            value={form.confirmPassword}
            onChangeText={(t) =>
              handleChange("confirmPassword", t)
            }
          />

          {errors.confirmPassword && (
            <Text style={styles.error}>
              {errors.confirmPassword}
            </Text>
          )}
        </View>
      )}

      {/* SUBMIT */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading
            ? "Завантаження..."
            : isRegister
            ? "Зареєструватись"
            : "Увійти"}
        </Text>
      </TouchableOpacity>

      {/* GENERAL ERROR */}
      {errors.general && (
        <Text style={styles.error}>{errors.general}</Text>
      )}
    </View>
  );
}