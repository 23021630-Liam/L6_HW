import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Add = ({ navigation }) => {
    const [pokemon, setPokemon] = useState('');
    const [type, setType] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleAdd = () => {
        if (!pokemon.trim() || !type || !imageUrl.trim()) {
            Alert.alert('Error', 'Please fill out all fields.');
            return;
        }


        if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
            Alert.alert('Error', 'Please enter a valid image URL.');
            return;
        }

        const sectionIndex = datasource.findIndex((section) => section.title === type);

        if (sectionIndex === -1) {
            Alert.alert('Error', 'Invalid Pokémon type selected.');
            return;
        }

        datasource[sectionIndex].data.push({ pokemon, img: imageUrl });
        Alert.alert('Success', `${pokemon} has been added.`);
        navigation.navigate('Home');
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokémon Name:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    placeholder="Enter Pokémon name"
                    value={pokemon}
                    onChangeText={(text) => setPokemon(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokémon Type:</Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Fire', value: 'Fire' },
                        { label: 'Water', value: 'Water' },
                        { label: 'Electric', value: 'Electric' },
                    ]}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 5 }}
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                />
            </View>

            <Button title="SUBMIT" onPress={handleAdd} />
        </View>
    );
};

export default Add;
