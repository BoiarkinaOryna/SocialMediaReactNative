import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserContext } from "@modules/auth/context/user.context";
import { useUpdateProfileMutation } from "@modules/settings/api/api";
import { MyDataSchema } from "@modules/settings/types/my-data.types";
import { myDataValidator } from "@modules/settings/models/my-data.validation";
import { ICONS } from "@shared/icons";
import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";
import { Link } from "@shared/ui/Links/Links";
import { SettingsCard } from "@shared/ui/SettingsCard/SettingsCard";

import { styles } from "./personal-info.styles";

const DEFAULT_AVATAR = require("../../../../../assets/LinaLi.jpg");
const SIGNATURE_IMAGE = require("../../../../../assets/signature3.png");

const normalizeDate = (date?: string | null) => {
  if (!date || date === "null" || date === "undefined") return "";
  return date.slice(0, 10);
};

export function PersonalInfoPage() {
  const { token, user, setUser } = useUserContext();
  const [update, { error }] = useUpdateProfileMutation();
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [isPersonalEditing, setIsPersonalEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const { control, handleSubmit, reset } = useForm<MyDataSchema>({
    resolver: yupResolver(myDataValidator),
    mode: "onChange",
    defaultValues: {
      name: "",
      surname: "",
      pseudonym: "",
      username: "",
      birthDate: "",
      email: "",
    },
  });

  useEffect(() => {
    if (!user) return;

    reset({
      name: user.first_name ?? "",
      surname: user.last_name ?? "",
      pseudonym: user.pseudonym ?? "",
      username: user.username ?? "",
      birthDate: normalizeDate(user.birth_date),
      email: user.email ?? "",
    });
  }, [reset, user]);

  async function sendForm(data: MyDataSchema) {
    if (!token) return;

    try {
      const updatedUser = await update({ ...data, token }).unwrap();
      setUser(updatedUser);
      setIsProfileEditing(false);
      setIsPersonalEditing(false);
    } catch (error) {
      console.log("profile update error:", error);
    }
  }

  const displayName = [user?.first_name, user?.last_name]
    .filter(Boolean)
    .join(" ");
  const profileTitle = user?.pseudonym || displayName || "Lina Li";
  const username = user?.username
    ? `@${user.username.replace(/^@/, "")}`
    : "@thelili";

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.linksContainer}>
        <Link text="Особиста інформація" linePosition={false} />
        <Link text="Альбоми" link="/settings/album" disabeled />
      </View>

      <SettingsCard
        title="Картка профілю"
        button={
          <Button
            onPress={
              isProfileEditing
                ? handleSubmit(sendForm)
                : () => setIsProfileEditing(true)
            }
            icon={<ICONS.SvgPen />}
            text={isProfileEditing ? "Зберегти" : "Редагувати"}
            textPosition="right"
          />
        }
      >
        <View style={styles.profileCard}>
          {isProfileEditing && (
            <Text style={styles.photoHint}>
              Оберіть або завантажте фото профілю
            </Text>
          )}
          <Image
            style={styles.avatar}
            source={user?.avatar ? { uri: user.avatar } : DEFAULT_AVATAR}
          />

          {isProfileEditing && (
            <View style={styles.photoActions}>
              <Button
                icon={<ICONS.SvgPlus />}
                text="Додайте фото"
                textPosition="right"
                style={styles.flatButton}
              />
              <Button
                icon={<ICONS.SvgPhoto />}
                text="Оберіть фото"
                textPosition="right"
                style={styles.flatButton}
              />
            </View>
          )}

          {isProfileEditing ? (
            <View style={styles.profileInputs}>
              <Text style={styles.currentName}>{profileTitle}</Text>

              <Controller
                name="username"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    label="Ім'я користувача"
                    placeholder="@thelili"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={field.onChange}
                    value={field.value}
                    error={fieldState.error?.message}
                    style={styles.profileInputWide}
                  />
                )}
              />
            </View>
          ) : (
            <View style={styles.nameContainer}>
              <Text style={styles.currentName}>{profileTitle}</Text>
              <Text style={styles.currentUsername}>{username}</Text>
            </View>
          )}
        </View>
      </SettingsCard>

      <SettingsCard
        title="Особиста інформація"
        button={
          <Button
            onPress={
              isPersonalEditing
                ? handleSubmit(sendForm)
                : () => setIsPersonalEditing(true)
            }
            icon={<ICONS.SvgPen />}
            text={isPersonalEditing ? "Зберегти" : "Редагувати"}
            textPosition="right"
          />
        }
      >
        {isPersonalEditing ? (
          <View style={styles.inputContainer}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Ім'я"
                  placeholder="Введіть ім'я"
                  onChangeText={field.onChange}
                  value={field.value}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="surname"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Прізвище"
                  placeholder="Введіть прізвище"
                  onChangeText={field.onChange}
                  value={field.value}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="birthDate"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Дата народження"
                  placeholder="YYYY-MM-DD"
                  onChangeText={field.onChange}
                  value={field.value}
                  error={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Електронна адреса"
                  placeholder="email@example.com"
                  inputMode="email"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect={false}
                  onChangeText={field.onChange}
                  value={field.value}
                  error={fieldState.error?.message}
                />
              )}
            />
          </View>
        ) : (
          <View style={styles.personalPreview}>
            <Text style={styles.previewText}>
              {displayName || "Ім'я не вказано"}
            </Text>
            <Text style={styles.previewMuted}>
              {user?.email || "email@example.com"}
            </Text>
            <Text style={styles.previewMuted}>
              {normalizeDate(user?.birth_date) || "YYYY-MM-DD"}
            </Text>
          </View>
        )}

        {error && (
          <Text style={styles.errorText}>Не вдалося зберегти зміни</Text>
        )}

        <View style={styles.passwordContainer}>
          <Text style={styles.passwordText}>Пароль</Text>
          <Button
            icon={<ICONS.SvgPen />}
            onPress={() => setIsPasswordEditing((value) => !value)}
          />
        </View>
        {isPasswordEditing && (
          <Input
            label="Пароль"
            placeholder="*******"
            iconRight={<ICONS.SvgEyeClosed />}
          />
        )}
      </SettingsCard>

      <SettingsCard
        title="Варіанти підпису"
        button={<Button icon={<ICONS.SvgPen />} />}
      >
        <View style={styles.checkListItem}>
          <ICONS.SvgTick />
          <Text style={styles.signatureText}>Псевдонім автора</Text>
        </View>
        <Text style={styles.pseudonym}>{user?.pseudonym || "Lina Li"}</Text>
        <View style={styles.checkListItem}>
          <ICONS.SvgTick />
          <Text style={styles.signatureText}>Мій електронний підпис</Text>
        </View>
        <View style={styles.signatureContainer}>
          <Image
            source={SIGNATURE_IMAGE}
            contentFit="contain"
            style={styles.signature}
          />
        </View>
      </SettingsCard>
    </ScrollView>
  );
}
