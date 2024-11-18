import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import sanityClient from "../../sanity";

const FeaturedRow = ({ id, title, desc }) => {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id] {
  ...,
  restaurant[] ->{
    ...,
    dishes[] ->,
      type -> {
        name
      }
  },
}[0]`,
        { id }
      )
      .then((data) => {
        setRestaurant(data);
      });
  }, [id]);

  // console.log("restaurants", restaurant);

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
        {restaurant?.restaurant?.map((rest) => (
          <RestaurantCard
            key={rest._id}
            id={rest._id}
            imgUrl={rest.image}
            title={rest.name}
            rating={rest.rating}
            genre={rest.type?.name}
            address={rest.address}
            short_desc={rest.short_desc}
            dishes={rest.dishes}
            long={rest.long}
            lat={rest.lat}
          />
        ))}

        {/* <RestaurantCard
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
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
