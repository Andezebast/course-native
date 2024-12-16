import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { FC, Fragment, useState } from "react";
import * as Animatable from "react-native-animatable";

interface ITrendingItemProps {
  activeItem: any;
  item: any;
}

const TrendingItem: FC<ITrendingItemProps> = ({ activeItem, item }) => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <>
      <Animatable.View
        className="mr-5"
        animation={activeItem.id$ == item.$id ? "zoomOut" : "zoomIn"}
        duration={500}
      >
        {play ? (
          <Text className="text-white">Playing</Text>
        ) : (
          <TouchableOpacity
            className="relative items-center justify-center"
            activeOpacity={0.7}
            onPress={() => setPlay(true)}
          >
            <ImageBackground
              source={{ uri: item.thumbnail }}
              className="w-52 h-72 my-5 rounded-[30px] shadow-lg shadow-black/40"
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      </Animatable.View>
    </>
  );
};

interface ITrendingProps {
  posts: any;
}

const Trending: FC<ITrendingProps> = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <TrendingItem activeItem={activeItem} item={item} />}
      horizontal
    />
  );
};

export default Trending;
