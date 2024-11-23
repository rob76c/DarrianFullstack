import { View, Text, FlatList } from "react-native";
import React from "react";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";


export default function HomeScreen() {
  return (
        <FlatList data={products} renderItem={({item}) => <ProductListItem product= {item}/>}
        />
  );
}
