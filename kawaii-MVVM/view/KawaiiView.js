import React from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, ActivityIndicator, Image } from 'react-native';
import useKawaiiViewModel from '../viewmodel/KawaiiViewModel';
import Botao from './botao';

function KawaiiView() {
  const {
    loading,
    resourceType,
    categoryInput,
    resourceData,
    setResourceType,
    setCategoryInput,
    handleSearch,
  } = useKawaiiViewModel();

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
          <Image source={{ uri: resourceData.url }} style={styles.image} />
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

export default KawaiiView;
