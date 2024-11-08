import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, desc }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xsx text-gray-500 px-4">{desc}</Text>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards */}
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Damna Dai Ko Restaurant"
          rating={4.5}
          genre="Nepali"
          address="New planning, Pepsicola"
          short_desc="write the short description here!!!"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Damna Dai Ko Restaurant"
          rating={4.5}
          genre="Nepali"
          address="New planning, Pepsicola"
          short_desc="write the short description here!!!"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Damna Dai Ko Restaurant"
          rating={4.5}
          genre="Nepali"
          address="New planning, Pepsicola"
          short_desc="write the short description here!!!"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Damna Dai Ko Restaurant"
          rating={4.5}
          genre="Nepali"
          address="New planning, Pepsicola"
          short_desc="write the short description here!!!"
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Damna Dai Ko Restaurant"
          rating={4.5}
          genre="Nepali"
          address="New planning, Pepsicola"
          short_desc="write the short description here!!!"
          dishes={[]}
          long={20}
          lat={10}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
