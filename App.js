import React, { useState } from "react";
import { StyleSheet, Text, Image, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1", },
    { name: "yoshi", id: "2", },
    { name: "mario", id: "3", },
    { name: "luigi", id: "4", },
    { name: "peach", id: "5", },
    { name: "toad", id: "6", },
    { name: "bowser", id: "7", },
  ]);

  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

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
  tinyLogo: {
    paddingTop: 50,
    width: 50,
    height: 50,
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
