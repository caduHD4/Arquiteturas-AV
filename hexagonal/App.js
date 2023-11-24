import React from 'react';
import { SafeAreaView, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import KawaiiController from './adapters/controller/KawaiiController';

function App() {
  const kawaiiController = new KawaiiController();

  const handleSearch = async () => {
    try {
      await kawaiiController.handleSearch('kawaii', 'categoria'); 
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Button title="Buscar" onPress={handleSearch} />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default App;
