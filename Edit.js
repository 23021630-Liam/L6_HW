import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const { index, type } = route.params;

    const sectionIndex = datasource.findIndex((section) => section.title === type);
    const currentPokemon = datasource[sectionIndex].data[index];

    const [pokemon, setPokemon] = useState(currentPokemon.pokemon);
    const [imageUrl, setImageUrl] = useState(currentPokemon.img);

    const handleSave = () => {
        if (!pokemon.trim() || !imageUrl.trim()) {
            Alert.alert('Error', 'Please fill out all fields.');
            return;
        }


        if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
            Alert.alert('Error', 'Please enter a valid image URL.');
            return;
        }

        datasource[sectionIndex].data[index].pokemon = pokemon;
        datasource[sectionIndex].data[index].img = imageUrl;

        Alert.alert('Success', `${pokemon} has been updated.`);
        navigation.navigate('Home');
    };

    const handleDelete = () => {
        Alert.alert('Confirm Deletion', `Are you sure you want to delete ${currentPokemon.pokemon}?`, [
            {
                text: 'Yes',
                onPress: () => {
                    datasource[sectionIndex].data.splice(index, 1);
                    Alert.alert('Deleted', `${currentPokemon.pokemon} has been removed.`);
                    navigation.navigate('Home');
                },
            },
            { text: 'No' },
        ]);
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokémon Name:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    value={pokemon}
                    onChangeText={(text) => setPokemon(text)}
                    placeholder="Enter Pokémon name"
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    placeholder="Enter image URL"
                />
            </View>

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="SAVE" onPress={handleSave} />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button title="DELETE" color="red" onPress={handleDelete} />
                </View>
            </View>
        </View>
    );
};

export default Edit;
