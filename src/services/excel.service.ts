import { } from '@loopback/core';
import {repository} from '@loopback/repository';
import * as XLSX from 'xlsx';
import {ApoyoRepository, ApoyoSocioeconomicoRepository, EstudianteRepository} from '../repositories'; // Importa los repositorios que necesites

export class ExcelService {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository: EstudianteRepository,
    @repository(ApoyoRepository)
    public apoyoRepository: ApoyoRepository,
    @repository(ApoyoSocioeconomicoRepository)
    public apoyosocioeconomicoRepository: ApoyoSocioeconomicoRepository,
  ) {}

  async importFromExcel(buffer: Buffer, modelName: string): Promise<void> {
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    switch (modelName) {
      case 'estudiante':
        await this.importEstudiantes(sheet);
        break;
      case 'apoyo':
        await this.importApoyos(sheet);
        break;
      case 'apoyosocioeconomico':
        await this.importApoyosocioeconomico(sheet);
        break;
      // Agrega más casos según las otras clases
      default:
        throw new Error('Modelo no soportado');
    }
  }

  private async importEstudiantes(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.estudianteRepository.create(row);
    }
  }

  private async importApoyos(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.apoyoRepository.create(row);
    }
  }

  private async importApoyosocioeconomico(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.apoyosocioeconomicoRepository.create(row);
    }
  }

  // Agrega métodos privados para las demás clases según sea necesario
}
