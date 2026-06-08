import { Modal, Pressable, Text, View } from "react-native";

import { useGroupModal } from "@modules/chats/context/group-modal.context";

import { ICONS } from "@shared/icons";
import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";

import { styles } from "./new-group-modal.styles";

const MEMBERS = [
  { id: "1", name: "Aeslie Alexander" },
  { id: "2", name: "Aeslie Alexander" },
  { id: "3", name: "Aeslie Alexander" },
];

export function NewGroupModal() {
  const { modalType, closeModal, openNewGroupMembers } = useGroupModal();

  return (
    <Modal visible={modalType === "new-group"} transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Pressable style={styles.close} onPress={closeModal}>
            <ICONS.SvgCross />
          </Pressable>

          <Text style={styles.title}>Нова група</Text>

          <View style={styles.field}>
            <Input label="Назва" placeholder="Введіть назву" />
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>NG</Text>
          </View>

          <View style={styles.photoActions}>
            <Pressable style={styles.photoAction}>
              <ICONS.SvgPlus />
              <Text style={styles.photoText}>Додайте фото</Text>
            </Pressable>
            <Pressable style={styles.photoAction}>
              <ICONS.SvgPhoto />
              <Text style={styles.photoText}>Оберіть фото</Text>
            </Pressable>
          </View>

          <Text style={styles.sectionTitle}>Учасники</Text>

          <View style={styles.members}>
            {MEMBERS.map((item) => (
              <View key={item.id} style={styles.memberRow}>
                <ICONS.SvgNP />
                <Text style={styles.memberName}>{item.name}</Text>
                <Pressable style={styles.deleteButton}>
                  <ICONS.SvgTrashcan />
                </Pressable>
              </View>
            ))}
          </View>

          <View style={styles.buttons}>
            <Button
              text="Назад"
              textPosition="left"
              style={styles.backButton}
              onPress={openNewGroupMembers}
            />
            <Button
              text="Створити групу"
              textPosition="left"
              isDark
              style={styles.createButton}
              onPress={closeModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
