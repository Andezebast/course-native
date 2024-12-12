import {
  View,
  Text,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TextInput,
} from "react-native";
import React, { FC, useState } from "react";

interface IFormField {
  title: string;
  value: string;
  handleChangeText: (value: string) => void;
  placeholder?: string;
  otherStyles?: StyleProp<ViewStyle> | string;
  keyboardType?: KeyboardTypeOptions;
}

const FormField: FC<IFormField> = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium pb-2">{title}</Text>
      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
