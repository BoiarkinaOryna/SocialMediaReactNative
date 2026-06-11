import { ReactNode } from "react";
import { TextInputProps, TextStyle, ViewStyle } from "react-native";


export interface InputProps extends Omit<TextInputProps, "style"> {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    label?: string;
    labelStyle?: TextStyle;
    error?: string;
    style?: ViewStyle;
    inputStyle?: TextStyle;
}
