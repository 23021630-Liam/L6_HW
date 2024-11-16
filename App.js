import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, SectionList, Image, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

const datasource = [
  {
    data: [
      { pokemon: 'Charizard', img: require('./img/Charizard.png') },
      { pokemon: 'Ninetales', img: require('./img/Ninetales.png') },
    ],
    icon: "fire-alt",
    title: "Fire",
    bgColor: 'red',
    textColor: "darkred"
  },
  {
    data: [
      { pokemon: 'Articuno', img: require('./img/Articuno.png') },
      { pokemon: 'Lapras', img: require('./img/Lapras.png') },
    ],
    icon: "water",
    title: "Water",
    bgColor: 'lightblue',
    textColor: "blue"
  },
  {
    data: [
      { pokemon: 'Pikachu', img: require('./img/Pikachu.png') },
      { pokemon: 'Dragonite', img: require('./img/Dragonite.png') },
    ],
    icon: "bolt",
    title: "Electric",
    bgColor: 'yellow',
    textColor: "orange"
  }
];

const styles = StyleSheet.create({
  opacityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    textAlign: 'left',
    justifyContent: "space-evenly",
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 21,
    marginLeft: 10,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    width: 150,
    height: 209,
    marginLeft: 10,
  }
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.opacityStyle}>
      <Text style={styles.textStyle}>{item.pokemon}</Text>
      {item.img && <Image source={item.img} style={styles.imageStyle} />}
    </TouchableOpacity>
);

const App = () => (
    <View style={{ marginBottom: 50, margin: 10 }}>
      <Text></Text>
      <Text></Text>
      <Button title="Add Pokemon"/>
      <StatusBar hidden={true} />
      <SectionList
          sections={datasource}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title, bgColor, icon, textColor } }) => (
              <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                <Icon name={icon} size={20} color={textColor} />
                <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
              </View>
          )}
      />
    </View>
);

export default App;


