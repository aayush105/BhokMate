import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_desc,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow rounded-md w-64"
    >
      {/* Image Section */}
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-full rounded-t-md object-cover"
      />

      {/* Text Content */}
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center gap-x-1">
          <StarIcon color="orange" opacity={0.5} />
          <Text className="text-xs text-gray-500">
            <Text className="text-yellow-500">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row items-center">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby: {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
