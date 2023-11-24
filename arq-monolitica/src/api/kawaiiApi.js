// api/kawaiiApi.js
import axios from 'axios';

const BASE_URL = 'https://api.waifu.pics';

class KawaiiApi {
  async getResource(type, category) {
    try {
      if (type === 'kawaii') {
        const kawaii = await this.fetchKawaiiByCategory(category);
        return kawaii;
      } else if (type === 'hentai') {
        const hentai = await this.fetchHentaiByCategory(category);
        return hentai;
      } else {
        throw new Error('Tipo de recurso inválido.');
      }
    } catch (error) {
      throw error;
    }
  }

  async fetchKawaiiByCategory(category) {
    try {
      const response = await axios.get(`${BASE_URL}/sfw/${category}`);
      if (!response.data) {
        throw new Error('Falha ao buscar os dados');
      }
      return this.buildMapKawaiis(response.data);
    } catch (error) {
      throw error;
    }
  }

  async fetchHentaiByCategory(category) {
    try {
      const response = await axios.get(`${BASE_URL}/nsfw/${category}`);
      if (!response.data) {
        throw new Error('Falha ao buscar os dados');
      }
      return this.buildMapHentais(response.data);
    } catch (error) {
      throw error;
    }
  }

  buildMapKawaiis(json) {
    const kawaii = {
      url: json.url,
    };

    return kawaii;
  }

  buildMapHentais(json) {
    const hentai = {
      url: json.url,
    };

    return hentai;
  }
}

export default KawaiiApi;
