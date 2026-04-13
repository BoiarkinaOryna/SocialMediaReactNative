import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./auth.styles";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { loginValidator } from "../models/login.validation";
import { LoginSchema } from "../types/login.types";
import { ResgisterSchema } from "../types/register.types";
import { registerValidator } from "../models/register.validation";

type Props = {
  mode: "login" | "register";
  onChangeMode?: (mode: "login" | "register") => void;
};

export default function AuthForm({ mode, onChangeMode }: Props) {
  const isRegister = mode === "register";

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { handleSubmit, control } = useForm<ResgisterSchema>({
		resolver: yupResolver(registerValidator),
		mode: "onChange",
	});

  return (
    <View style={styles.card}>
      
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => onChangeMode?.("register")}>
          <Text style={[
            styles.tab,
            isRegister && styles.activeTab
          ]}>
            Реєстрація
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onChangeMode?.("login")}>
          <Text style={[
            styles.tab,
            !isRegister && styles.activeTab
          ]}>
            Авторизація
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        {isRegister ? "Приєднуйся до World IT" : "Увійди в акаунт"}
      </Text>

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
        value={email}
        onChangeText={setEmail}
      /> */}
      
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
        value={password}
        onChangeText={setPassword}
      /> */}

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
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          /> */}
        </View>
      )}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {isRegister ? "Створити акаунт" : "Увійти"}
        </Text>
      </TouchableOpacity>

    </View>
  );
}