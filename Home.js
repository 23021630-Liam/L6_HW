import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from "./Data";

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
        textAlign: 'center',
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginLeft: 10,
        resizeMode: 'contain',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    navigation.navigate("Edit", {
                        index: index,
                        pokemon: item.pokemon,
                        image: item.img,
                        type: section.title
                    });
                }}
            >
                <Text style={[styles.textStyle, { textAlign: 'left' }]}>{item.pokemon}</Text>

                <Image source={{ uri: item.img }} style={styles.imageStyle} />
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button
                title="Add Pokemon"
                onPress={() => navigation.navigate("Add")}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;
