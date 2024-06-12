import {repository} from '@loopback/repository';
import {get} from '@loopback/rest';
import {TablaCentralRepository} from '../repositories';

export class TablaCentralController {
  constructor(
    @repository(TablaCentralRepository)
    public tablaCentralRepository: TablaCentralRepository,
  ) {}

  @get('/estudiantes-info')
  async getEstudiantesInfo(): Promise<any[]> {
    return this.tablaCentralRepository.executeQuery();
  }
}
