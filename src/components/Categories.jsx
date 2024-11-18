import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../../sanity";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setCategory(data);
    });
  }, []);

  // console.log("cate", category);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      {category.map((cat) => (
        <CategoryCard
          key={cat._id}
          imgUrl={urlFor(cat.image).width(200).url()}
          title={cat.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
