import KawaiiPort from '../../ports/KawaiiPort';

class KawaiiUseCase {
  constructor(kawaiiPort) {
    this.kawaiiPort = kawaiiPort;
  }

  async fetchKawaiiByCategory(type, category) {
    return this.kawaiiPort.fetchKawaiiByCategory(type, category);
  }
}

export default KawaiiUseCase;
