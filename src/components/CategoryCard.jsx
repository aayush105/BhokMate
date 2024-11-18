import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  // Truncate the title if it exceeds the character limit
  const truncatedTitle = title.length > 5 ? `${title.slice(0, 11)}...` : title;

  return (
    <TouchableOpacity className="mr-4 rounded-lg overflow-hidden shadow-md">
      {/* Image Section */}
      <View className="relative">
        <Image
          source={{
            uri: imgUrl,
          }}
          className="h-24 w-24"
          resizeMode="cover"
        />
        {/* Gradient Overlay */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        />
        {/* Title */}
        <Text
          style={{
            position: "absolute",
            bottom: 5,
            left: 5,
            right: 5,
            color: "white",
            fontWeight: "bold",
            fontSize: 11,
          }}
        >
          {truncatedTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
