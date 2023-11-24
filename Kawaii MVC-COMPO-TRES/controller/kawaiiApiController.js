import KawaiiApiModel from '../model/KawaiiApiModel';

class KawaiiApiController {

  model = new KawaiiApiModel();

  async getResource(type, category) {
    let dados = await this.model.getResource(type, category);
    return dados;
  }
}

export default KawaiiApiController;