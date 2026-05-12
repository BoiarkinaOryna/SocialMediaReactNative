import { View, Text, Modal } from "react-native";
import { styles } from "./first-visit-modal.styles";
import { Input } from "@shared/ui/Input/Input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { firstVisitValidator } from "@modules/auth/models/first-visit.validation";
import { Button } from "@shared/ui/Button/Button";
import {
  useFirstVisitMutation,
  useLazyMeQuery,
} from "@modules/auth/api/auth.api";
import { useUserContext } from "@modules/auth/context/user.context";
import { useEffect, useState } from "react";
const SKIP_FIRST_VISIT_DEV = true;
export function FirstVisitModal() {
  const { token, user, setUser } = useUserContext();

  const [getUserData] = useLazyMeQuery();
  const [firstVisit, { isLoading, error }] = useFirstVisitMutation();

  const [hasCompleted, setHasCompleted] = useState(false);

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(firstVisitValidator),
    mode: "onChange",
  });

    const isOpen = __DEV__ && SKIP_FIRST_VISIT_DEV 
    ? false 
    : !user?.username && !hasCompleted;

  async function reloadUser() {
    if (!token) return;

    const newUser = await getUserData(token).unwrap();
    setUser(newUser);
  }

  async function submit(data: any) {
    try {
      if (!token) return;

      await firstVisit({ body: data, token }).unwrap();

      await reloadUser();

      setHasCompleted(true); // 🔥 ключевой фикс
    } catch (error) {
      console.log("first visit error:", error);
    }
  }

  return (
    <Modal visible={isOpen} transparent>
      <View style={styles.background}>
        <View style={styles.mainContainer}>
          <View style={styles.title}>
            <Text style={styles.detailsHeadline}>
              Додайте деталі про себе
            </Text>
          </View>

          <View style={styles.details}>
            <Controller
              name="pseudonym"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Псевдонім автора"
                  placeholder="Введіть псевдонім автора"
                  autoCorrect={false}
                  onChangeText={field.onChange}
                  value={field.value}
                  labelStyle={styles.textGray}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="username"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Ім'я користувача"
                  placeholder="@"
                  autoCorrect={false}
                  onChangeText={field.onChange}
                  value={field.value}
                  labelStyle={styles.textGray}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Text style={styles.hint}>
              Або оберіть:{" "}
              <Text style={styles.greenText}>
                (Запропоновані варіанти відповідно до Ім’я та Прізвища)
              </Text>
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSubmit(submit)}
              isDark
              text={!isLoading ? "Продовжити" : "Завантаження"}
              textPosition="right"
            />

            {error && (
              <Text>
                Сталася помилка:{" "}
                {"status" in error ? error.status : error.message}
              </Text>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}