import {
  View,
  Text,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { FC, useState } from "react";
import { icons } from "@/constants";

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
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium pb-2">{title}</Text>
      <View
        className={`flex-row w-full h-16 px-4 bg-black-100 border-2 rounded-2xl items-center ${
          isFocused ? "border-secondary" : "border-black-200"
        }`}
      >
        <TextInput
          className="flex-1 w-full h-full flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
