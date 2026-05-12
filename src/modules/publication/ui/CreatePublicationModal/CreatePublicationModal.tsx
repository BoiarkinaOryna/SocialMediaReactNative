import { Alert, Modal, Pressable, ScrollView, Text, View, ActivityIndicator } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { ICONS } from "@shared/icons";
import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";
import { usePublicationModal } from "@modules/publication/context/modal.context";
import { usePublications } from "@modules/publication/context/publications.context";
import { publicationValidator } from "@modules/publication/models/publication.validation";
import { PublicationSchema } from "@modules/publication/types/publication.types";
import { styles } from "./create-publication-modal.styles";
import { useState } from "react";
import { useUserContext } from "@modules/auth/context/user.context";

const TOPIC_TAGS = [
  "#відпочинок",
  "#натхнення",
  "#життя",
  "#природа",
  "#читання",
  "#спокій",
  "#гармонія",
  "#музика",
  "#фільми",
  "#подорожі",
];

const DEFAULT_VALUES: PublicationSchema = {
  title: "",
  topic: "",
  content: "",
  link: "",
  images: [],
};

export function CreatePublicationModal() {
  const { isOpen, close } = usePublicationModal();
  const { createPublication } = usePublications();
  const { token } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<PublicationSchema>({
      resolver: yupResolver(publicationValidator),
      mode: "onChange",
      defaultValues: DEFAULT_VALUES,
    });

  const contentValue = watch("content") ?? "";
  const selectedImages = watch("images") ?? [];

  function addTagToContent(tag: string) {
    const currentContent = contentValue;
    const tagWithSpace = `${tag} `;

    if (!currentContent.includes(tag)) {
      const newContent =
        currentContent + (currentContent ? " " : "") + tagWithSpace;
      setValue("content", newContent, { shouldValidate: true });
    }
  }

  async function handlePickImages() {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Доступ до фото", "Потрібно дозволити доступ до галереї.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsMultipleSelection: true,
      selectionLimit: 6,
      quality: 0.8, // Уменьшаем качество для экономии трафика
    });

    if (result.canceled) {
      return;
    }

    const imageUris = result.assets.map((asset) => asset.uri);
    setValue("images", [...selectedImages, ...imageUris], {
      shouldValidate: true,
    });
  }

  function removeImage(uri: string) {
    setValue(
      "images",
      selectedImages.filter((image) => image !== uri),
      { shouldValidate: true }
    );
  }

  // Функция для загрузки изображений на сервер
  async function uploadImages(images: string[]): Promise<string[]> {
    const uploadedUrls: string[] = [];

    for (const imageUri of images) {
      try {
        // Создаем FormData
        const formData = new FormData();
        
        // Получаем расширение файла
        const filename = imageUri.split('/').pop() || 'image.jpg';
        const match = /\.(\w+)$/.exec(filename);
        const type = match ? `image/${match[1]}` : 'image/jpeg';

        // Добавляем файл в FormData
        formData.append('image', {
          uri: imageUri,
          name: filename,
          type: type,
        } as any);

        // Отправляем на сервер
        const response = await fetch('http://192.168.88.239:3000/uploads', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.status}`);
        }

        const data = await response.json();
        uploadedUrls.push(data.url); // Предполагаем, что сервер возвращает { url: "путь_к_файлу" }
      } catch (error) {
        console.error('Error uploading image:', error);
        Alert.alert('Помилка', 'Не вдалося завантажити зображення');
      }
    }

    return uploadedUrls;
  }

  async function onSubmit(data: PublicationSchema) {
    if (!token) {
      Alert.alert('Помилка', 'Ви не авторизовані');
      return;
    }

    setIsSubmitting(true);

    try {
      // Сначала загружаем изображения на сервер
      let uploadedImageUrls: string[] = [];
      if (data.images && data.images.length > 0) {
        uploadedImageUrls = await uploadImages(data.images);
      }

      // Создаем публикацию с URL загруженных изображений
      const publicationData = {
        ...data,
        images: uploadedImageUrls, // Отправляем URL вместо локальных URI
      };

      await createPublication(publicationData);
      
      reset(DEFAULT_VALUES);
      close();
      router.push("/(publications)/publications");
    } catch (error) {
      console.error('Error creating publication:', error);
      Alert.alert('Помилка', 'Не вдалося створити публікацію');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal visible={isOpen} onRequestClose={close} animationType="slide">
      <Pressable style={styles.overlay} onPress={close}>
        <Pressable
          style={styles.modal}
          onPress={(event) => event.stopPropagation()}
        >
          <View style={styles.header}>
            <Text style={styles.headline}>Створення публікації</Text>
            <Pressable onPress={close} style={styles.closeButton}>
              <ICONS.SvgCross />
            </Pressable>
          </View>

          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.inputsContainer}>
              <Controller
                name="title"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    label="Назва публікації"
                    labelStyle={styles.darkLabel}
                    placeholder="Напишіть назву"
                    onChangeText={field.onChange}
                    value={field.value}
                    error={fieldState.error?.message}
                  />
                )}
              />

              <View style={styles.topicSection}>
                <Controller
                  name="topic"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Input
                      label="Тема публікації"
                      labelStyle={styles.darkLabel}
                      placeholder="Напишіть тему публікації"
                      onChangeText={field.onChange}
                      value={field.value}
                      error={fieldState.error?.message}
                    />
                  )}
                />

                <View style={styles.tagsContainer}>
                  {TOPIC_TAGS.map((tag) => (
                    <Pressable
                      key={tag}
                      style={styles.tag}
                      onPress={() => addTagToContent(tag)}
                    >
                      <Text style={styles.tagText}>{tag}</Text>
                    </Pressable>
                  ))}

                  <Button icon={<ICONS.SvgPlusB />} style={styles.addTagButton} />
                </View>
              </View>

              <Controller
                name="content"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder="Напишіть текст публікації"
                    multiline
                    numberOfLines={7}
                    onChangeText={field.onChange}
                    value={field.value}
                    error={fieldState.error?.message}
                    style={styles.textArea}
                  />
                )}
              />

              <Controller
                name="link"
                control={control}
                render={({ field, fieldState }) => (
                  <View style={styles.linkBlock}>
                    <Text style={styles.darkLabel}>Посилання</Text>
                    <View style={styles.linkSection}>
                      <View style={styles.linkInputWrapper}>
                        <Input
                          placeholder="Ваше посилання"
                          onChangeText={field.onChange}
                          value={field.value}
                          error={fieldState.error?.message}
                        />
                      </View>
                      <Button
                        icon={<ICONS.SvgPlusB />}
                        style={styles.linkPlusButton}
                      />
                    </View>
                  </View>
                )}
              />

              {!!selectedImages.length && (
                <View style={styles.imagesBlock}>
                  <Text style={styles.darkLabel}>Обрані фото</Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.imagesRow}
                  >
                    {selectedImages.map((uri) => (
                      <View key={uri} style={styles.imagePreviewWrap}>
                        <Image source={uri} style={styles.imagePreview} />
                        <Pressable
                          style={styles.removeImageButton}
                          onPress={() => removeImage(uri)}
                        >
                          <ICONS.SvgCross />
                        </Pressable>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              )}
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <View style={styles.mediaActions}>
              <Button
                icon={<ICONS.SvgaddPhoto />}
                style={styles.circleButton}
                onPress={handlePickImages}
              />
              <Button icon={<ICONS.addEmoji />} style={styles.circleButton} />
            </View>

            <Button
              text={isSubmitting ? "Завантаження..." : "Публікація"}
              textPosition="left"
              isDark
              icon={isSubmitting ? <ActivityIndicator color="white" /> : <ICONS.SvgPlane />}
              onPress={handleSubmit(onSubmit)}
              style={styles.submitButton}
              disabled={isSubmitting}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}