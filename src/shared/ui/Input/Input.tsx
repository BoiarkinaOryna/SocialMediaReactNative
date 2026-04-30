import React from "react";
import {View,Text,TextInput,StyleSheet,} 
from "react-native";
import { InputProps } from "./input.types";
import { styles } from "./input.styles";
import { COLORS } from "@shared/constants/colors";
// import { styles } from "./input.styles";

export function Input(props: InputProps) {
  const {
    iconLeft,
    iconRight,
    label,
    labelStyle,
    error,
    style,
    ...rest
  } = props;

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      )}    

      <View style={[styles.inputWrapper, error && {borderColor: COLORS.red}]}>
        {iconLeft && <View style={styles.icon}>{iconLeft}</View>}

        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={COLORS.blue20}
          {...rest}
        />

        {iconRight && <View style={styles.icon}>{iconRight}</View>}
      </View>
      { error && <Text style={styles.errorMessage}>{error}</Text> }
    </View>
  );
}