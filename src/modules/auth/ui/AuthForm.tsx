import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./auth.styles";
import { useState } from "react";

export type AuthFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

type Props = {
  mode: "login" | "register";
  onChangeMode?: (mode: "login" | "register") => void;
  onSubmit?: (data: AuthFormData) => void;
};

export default function AuthForm({ mode, onChangeMode, onSubmit }: Props) {
  const isRegister = mode === "register";

  const [form, setForm] = useState<AuthFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = <K extends keyof AuthFormData>(
    key: K,
    value: AuthFormData[K]
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      console.log("Заповни всі поля");
      return;
    }

    if (isRegister) {
      if (!form.confirmPassword) {
        console.log("Підтверди пароль");
        return;
      }

      if (form.password !== form.confirmPassword) {
        console.log("Паролі не співпадають");
        return;
      }
    }

    onSubmit?.(form);
  };

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

      {/* Title */}
      <Text style={styles.title}>
        {isRegister ? "Приєднуйся до World IT" : "Увійди в акаунт"}
      </Text>

      {/* Email */}
      <Text style={styles.label}>Електронна пошта</Text>
      <Controller
        name="email"
        control={control}
        render={({field, fieldState}) => {
          return <TextInput
            placeholder="you@example.com"
            style={styles.input}
            onChangeText={field.onChange}
						value={field.value}
            error={fieldState.error?.message}
        />
        }}
      />

      {/* <TextInput
        placeholder="you@example.com"
        style={styles.input}
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
      />

      {/* Password */}
      <Text style={styles.label}>Пароль</Text>

      <Controller
        name="password"
        control={control}
        render={({field, fieldState}) => {
          return <TextInput
            placeholder="Введи пароль"
            style={styles.input}
            onChangeText={field.onChange}
						value={field.value}
            error={fieldState.error?.message}
        />
        }}
      />
      {/* <TextInput
        placeholder="Введи пароль"
        secureTextEntry
        style={styles.input}
        value={form.password}
        onChangeText={(text) => handleChange("password", text)}
      />

      {/* Confirm Password */}
      {isRegister && (
        <View>
          <Text style={styles.label}>Підтверди пароль</Text>

          <Controller
            name="passwordConfirmation"
            control={control}
            render={({field, fieldState}) => {
              return <TextInput
                placeholder="Повтори пароль"
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
                error={fieldState.error?.message}
            />
            }}
          />
          {/* <TextInput
            placeholder="Повтори пароль"
            secureTextEntry
            style={styles.input}
            value={form.confirmPassword}
            onChangeText={(text) =>
              handleChange("confirmPassword", text)
            }
          />
        </View>
      )}

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {isRegister ? "Створити акаунт" : "Увійти"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}