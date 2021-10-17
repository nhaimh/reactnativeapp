import React, { useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

import routes from "../navigation/routes";
import Card from "../components/Card";
import Screen from "./../components/Screen";
import colors from "../config/colors";
import { nstyles, Width } from '../config/styles';
import listings from "../constant/product.js";
// import listings from "../constant/listings.json";


function ListingsScreen({ navigation }) {
  const [showList, setShowList] = useState(true)
  const openList = () => {
    setShowList(!showList)
  }
  return (
    <View style={[nstyles.ncontainer, { paddingHorizontal: 10 }]}>
      <View style={{
        shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.3, shadowRadius: 2, elevation: 2,
        height: Width(12), alignItems: 'center', flexDirection: 'row'
      }}>
        <Image source={require('../assets/logo-red.png')} style={{ width: 25, height: 25, marginRight: 10 }}></Image>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Trang chủ</Text>
      </View>
      <View style={{ marginVertical: 10 }}>
        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Danh sách sản phẩm</Text>
          <TouchableOpacity onPress={() => openList()}>
            <Text style={{ color: 'black' }}>{showList ? 'Xem tất cả' : 'Ẩn danh sách'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showList ||
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.price + "đ"}
              image={item.image}
              rcm={item.rcm}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
