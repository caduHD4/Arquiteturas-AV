import { useState } from 'react';
import KawaiiController from '../controller/KawaiiController';

const useKawaiiViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [resourceType, setResourceType] = useState('kawaii');
  const [categoryInput, setCategoryInput] = useState('happy');

  const kawaiiController = new KawaiiController();

  const handleSearch = async () => {
    try {
      setLoading(true);
      await kawaiiController.handleSearch(resourceType, categoryInput);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      setLoading(false);
    }
  };

  return {
    loading,
    resourceType,
    categoryInput,
    setResourceType,
    setCategoryInput,
    handleSearch,
  };
};

export default useKawaiiViewModel;
