import KawaiiUseCase from '../../core/usecases/KawaiiUseCase';
import KawaiiAdapter from '../outbound/KawaiiAdapter';

class KawaiiController {
  constructor() {
    this.kawaiiUseCase = new KawaiiUseCase(new KawaiiAdapter());
  }

  async handleSearch(type, category) {
    try {
      const data = await this.kawaiiUseCase.fetchKawaiiByCategory(type, category);
      console.log(data);
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  }
}

export default KawaiiController;
