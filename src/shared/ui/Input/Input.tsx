import React from "react";
import {View,Text,TextInput,StyleSheet,} 
from "react-native";
import { InputProps } from "./input.types";
import { styles } from "./input.styles";
// import { styles } from "./input.styles";

export function Input(props: InputProps) {
  const {
    iconLeft,
    iconRight,
    label,
    labelStyle,
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

      <View style={styles.inputWrapper}>
        {iconLeft && <View style={styles.icon}>{iconLeft}</View>}

        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#999"
          {...rest}
        />

        {iconRight && <View style={styles.icon}>{iconRight}</View>}
      </View>
    </View>
  );
}