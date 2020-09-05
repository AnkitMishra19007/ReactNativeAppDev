import React, { useState } from "react";
import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import Header from "./components/header";


export default function App() {


  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flexDirection: 'row', margin: 30, marginBottom: 0, justifyContent: "space-between", marginHorizontal: 50, }}>
        <Image
          style={styles.cat1}
          source={require('./assets/bath.png')}
        />

        <Image
          style={styles.cat2}
          source={require('./assets/cereal.png')}
        />

      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 0, marginHorizontal: 80, }}>
        <Text style={styles.catText}>
          Bath
        </Text>
        <Text style={styles.catText}>
          Cereals
        </Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 30, marginTop: 20, marginBottom: 0, justifyContent: "space-between", marginHorizontal: 50 }}>
        <Image
          style={styles.cat1}
          source={require('./assets/dairy-products.png')}
        />

        <Image
          style={styles.cat2}
          source={require('./assets/skincare.png')}
        />

      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 0, marginHorizontal: 80, }}>
        <Text style={styles.catText}>
          Dairy
        </Text>
        <Text style={styles.catText}>
          Beauty
        </Text>
      </View>
      <View style={{ flexDirection: 'row', margin: 30, marginTop: 20, justifyContent: "space-between", marginBottom: 0, marginHorizontal: 50, }}>
        <Image
          style={styles.cat1}
          source={require('./assets/snacks.png')}
        />
        <Image
          style={styles.cat2}
          source={require('./assets/soft-drinks.png')}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 0, marginHorizontal: 50, }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold', marginLeft: 26
        }}>
          Snacks
        </Text>
        <Text style={styles.catText}>
          Beverages
        </Text>
      </View>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
  },
  list: {
    marginTop: 5,
  },
  item: {
    textAlign: "center",
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
  cat1: {
    width: 135,
    height: 135,
    borderColor: 'black',
    borderBottomWidth: 2

  },
  cat2: {
    width: 120,
    height: 120,

  },

  catBox: {

    marginHorizontal: 40,
    borderRadius: 8,
    color: 'pink',
  },
  catText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
