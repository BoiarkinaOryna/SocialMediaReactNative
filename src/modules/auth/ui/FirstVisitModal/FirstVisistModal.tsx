import { Pressable, View,Text } from "react-native";
import { styles } from "./first-visit-modal.styles";
import { Input } from "@shared/ui/Input/Input"; 
import { ICONS } from "@shared/icons";
type ModalProps = {
  visible?: boolean;
  onClose?: () => void;
};


export function FirstVisitModal(props: ModalProps) {
    const {visible, onClose} = props

    return (
        <View style={styles.background}>
            <View style = {styles.mainContainer}>
              <View  style = {styles.closeButton}>
                  <Pressable>
                    <ICONS.SvgCross />
                  </Pressable>


              </View>
              <View style = {styles.title}>
                <Text style={styles.detailsHeadline}>
                  Додайте деталі про себе
                </Text>
              </View>
              <View style = {styles.details}>
                <Input
                  label="Псевдонім автора"
                  placeholder="Введіть Псевдоніма автора"
                  labelStyle = {styles.textGray}
                />
                <Input
                  label="Ім'я користвуча"
                  placeholder="@"
                  labelStyle = {styles.textGray}
                />
                <Text style={ styles.hint }>Або оберіть: <Text style={ styles.greenText }>(Запропоновані варіанти відповідно до Ім’я та Прізвища)</Text></Text>

              </View>
              <View style = {styles.buttonContainer}>
                <Pressable style = {styles.button}>
                  <Text style = {styles.buttonText}>
                    Продовжити
                  </Text>
                  
                </Pressable>

              </View>
            </View>
        </View>
    )
}