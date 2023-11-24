export interface Kawaii {
  url: string;
}

export interface Hentai {
  url: string;
}

const BASE_URL = 'https://api.waifu.pics';

class KawaiiApiModel {

  async getResource(type: string, category: string): Promise<Kawaii[] | Hentai[]> {
    try {
      if (type === 'kawaii') {
        const kawaii: Promise<Kawaii[]> = await this.fetchKawaiiByCategory(category);
        return kawaii;
      } else if (type === 'hentai') {
        const hentai: Promise<Hentai[]> = await this.fetchHentaiByCategory(category);
        return hentai;
      } else {
        throw new Error('Tipo de recurso inválido.');
      }
    } catch (error) {
      throw error;
    }
  }

  async fetchKawaiiByCategory(category: string): Promise<Kawaii[]> {
    try {
      const response = await fetch(`${BASE_URL}/sfw/${category}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar os dados');
      }
      const data = await response.json();
      return this.buildMapKawaiis(data);
    } catch (error) {
      throw error;
    }
  }

  async fetchHentaiByCategory(category: string): Promise<Hentai[]> {
    try {
      const response = await fetch(`${BASE_URL}/nsfw/${category}`);
      if (!response.ok) {
        throw new Error('Falha ao buscar os dados');
      }
      const data = await response.json();
      return this.buildMapHentais(data);
    } catch (error) {
      throw error;
    }
  }

  buildMapKawaiis(json): Kawaii {
    const kawaii: Kawaii = {
      url: json["url"]
    };

    return kawaii;
  }

  buildMapHentais(json): Hentai {
    const hentai: Hentai = {
      url: json["url"]
    };

    return hentai;
  }
}

export default KawaiiApiModel;
