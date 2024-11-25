import { View, Text, FlatList, useWindowDimensions } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";

export default function HomeScreen() {
//   const { width } = useWindowDimensions();
//   const numColumns = width > 700 ? 5 : 2;

const numColumns= useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 5,
});
  return (
    <FlatList
      key={numColumns}
      data={products}
      numColumns={numColumns}
      //Add spacing between rows
      contentContainerClassName="gap-2 mx-auto w-full"
      //Add spacing between columns
      columnWrapperClassName="gap-1"
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
