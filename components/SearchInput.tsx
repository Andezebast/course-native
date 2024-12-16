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

interface ISearchField {
  handleChangeText?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
}

const SearchInput: FC<ISearchField> = ({ handleChangeText }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View
      className={`flex-row space-x-4 w-full h-16 px-4 bg-black-100 border-2 rounded-2xl items-center ${
        isFocused ? "border-secondary" : "border-black-200"
      }`}
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
