import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";

interface CustomButtonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles: StyleProp<ViewStyle> | string;
  isLoading?: boolean;
  textStyles?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  handlePress,
  containerStyles,
  isLoading,
  textStyles,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center 
      ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
