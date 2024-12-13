// app/screens/AddPlayersScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const AddPlayersScreen = () => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');

  const addPlayer = () => {
    if (players.length < 10 && playerName) {
      setPlayers([...players, playerName]);
      setPlayerName('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Add Players (Max 10)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter player name"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <Button title="Add Player" onPress={addPlayer} />
      
      <View>
        <Text>Players:</Text>
        {players.map((player, index) => (
          <Text key={index}>{player}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default AddPlayersScreen;
