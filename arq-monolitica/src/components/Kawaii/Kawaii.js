// components/KawaiiApi/KawaiiApi.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, ActivityIndicator, Image } from 'react-native';
import KawaiiApi from '../../api/kawaiiApi';

const KawaiiApiView = () => {
  const [loading, setLoading] = useState(false);
  const [resourceType, setResourceType] = useState('kawaii');
  const [categoryInput, setCategoryInput] = useState('');
  const [resourceData, setResourceData] = useState(null);

  const api = new KawaiiApi();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await api.getResource(resourceType, categoryInput);
      setResourceData(data.url);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="title">API Kawaii</h2>
      <label className="label">
        Tipo de Recurso:
        <select className="picker" value={resourceType} onChange={(e) => setResourceType(e.target.value)}>
          <option value="kawaii">Kawaii</option>
          <option value="hentai">Hentai</option>
        </select>
      </label>
      <label className="label">
        Categoria:
        <input className="input" type="text" value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} />
      </label>
      <button className="button" onClick={handleSearch}>
        Buscar
      </button>

      {loading && <ActivityIndicator size="large" color="#007AFF" />}
      {resourceData && (
        <div className="resultContainer">
          <h3 className="resultTitle">Resultado:</h3>
          <img className="image" src={resourceData} alt="Kawaii or Hentai" />
        </div>
      )}
    </div>
  );
};

export default KawaiiApiView;
