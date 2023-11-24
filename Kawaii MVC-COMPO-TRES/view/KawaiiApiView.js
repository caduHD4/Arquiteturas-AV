import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, ActivityIndicator, Image } from 'react-native';
import KawaiiApiController from '../controller/kawaiiApiController.js';
import Botao from './botao'; 

function KawaiiApiView() {
  const [loading, setLoading] = useState(false);
  const [resourceType, setResourceType] = useState('kawaii');
  const [categoryInput, setCategoryInput] = useState('');
  const [resourceData, setResourceData] = useState(null);

  const controller = new KawaiiApiController();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await controller.getResource(resourceType, categoryInput);
      setResourceData(data.url);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma Categoria:</Text>
      <Picker
        style={styles.picker}
        selectedValue={resourceType}
        onValueChange={(itemValue) => setResourceType(itemValue)}>
        <Picker.Item label="Kawaii" value="kawaii" />
        <Picker.Item label="Hentai" value="hentai" />
      </Picker>
      <Text style={styles.label}>Digite a Categoria:</Text>
      <TextInput
        style={styles.input}
        value={categoryInput}
        onChangeText={(text) => setCategoryInput(text)}
        placeholder="Categoria"
      />
      <Botao title="Buscar" onPress={handleSearch} />
      {loading && <ActivityIndicator size="large" color="#007AFF" />}
      {resourceData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultado:</Text>
          <Image source={{ uri: resourceData }} style={styles.image} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default KawaiiApiView;
