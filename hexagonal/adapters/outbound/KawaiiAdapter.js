import KawaiiPort from '../../ports/KawaiiPort';

class KawaiiAdapter extends KawaiiPort {
  constructor() {
    super();
  }

  async fetchKawaiiByCategory(type, category) {
    try {
      const response = await fetch(`https://api.waifu.pics/${type === 'kawaii' ? 'sfw' : 'nsfw'}/${category}`);
      const jsonData = await response.json();

      if (!jsonData.url) {
        throw new Error('Falha ao buscar os dados');
      }

      return jsonData;
    } catch (error) {
      throw error;
    }
  }
}

export default KawaiiAdapter;
