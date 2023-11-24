import { useState } from 'react';
import KawaiiModel from '../model/KawaiiModel';

const useKawaiiViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [resourceType, setResourceType] = useState('kawaii');
  const [categoryInput, setCategoryInput] = useState('');
  const [resourceData, setResourceData] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await fetchKawaiiByCategory(resourceType, categoryInput);
      setResourceData(new KawaiiModel(data.url));
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      setLoading(false);
    }
  };

  const fetchKawaiiByCategory = async (type, category) => {
    try {
      const response = await fetch(`https://api.waifu.pics/${type === 'kawaii' ? 'sfw' : 'nsfw'}/${category}`);
      const jsonData = await response.json();  // Processar a Promise resultante do método json()
      
      if (!jsonData.url) {
        throw new Error('Falha ao buscar os dados');
      }
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      throw error;
    }
  };

  return {
    loading,
    resourceType,
    categoryInput,
    resourceData,
    setResourceType,
    setCategoryInput,
    handleSearch,
  };
};

export default useKawaiiViewModel;
