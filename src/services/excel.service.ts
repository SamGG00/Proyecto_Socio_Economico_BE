import { } from '@loopback/core';
import {repository} from '@loopback/repository';
import * as XLSX from 'xlsx';
import {ApoyoRepository, ApoyoSocioeconomicoRepository, ContactoRepository, ConvocatoriaRepository, EstudianteRepository, FacultadRepository, MunicipioRepository, OrganizacionRepository, ProcesoConvocatoriaRepository, ProgramaRepository} from '../repositories'; // Importa los repositorios que necesites

export class ExcelService {
  constructor(
    @repository(EstudianteRepository)
    public estudianteRepository: EstudianteRepository,
    @repository(ContactoRepository)
    public contactoRepository: ContactoRepository,
    @repository(ConvocatoriaRepository)
    public convocatoriaRepository: ConvocatoriaRepository,
    @repository(FacultadRepository)
    public facultadRepository: FacultadRepository,
    @repository(MunicipioRepository)
    public municipioRepository: MunicipioRepository,
    @repository(OrganizacionRepository)
    public organizacionRepository: OrganizacionRepository,
    @repository(ProcesoConvocatoriaRepository)
    public procesoConvocatoriaRepository: ProcesoConvocatoriaRepository,
    @repository(ProgramaRepository)
    public programaRepository: ProgramaRepository,
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
      case 'contacto':
        await this.importContacto(sheet);
        break;
      case 'convocatoria':
        await this.importConvocatoria(sheet);
        break;
      case 'facultad':
        await this.importFacultad(sheet);
        break;
      case 'municipio':
        await this.importMunicipio(sheet);
        break;
      case 'organizacion':
        await this.importOrganizacion(sheet);
        break;
      case 'procesoconvocatoria':
        await this.importProcesoConvocatoria(sheet);
        break;
      case 'programa':
        await this.importPrograma(sheet);
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
  private async importContacto(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.contactoRepository.create(row);
    }
  }
  private async importConvocatoria(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.convocatoriaRepository.create(row);
    }
  }
  private async importFacultad(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.facultadRepository.create(row);
    }
  }
  private async importMunicipio(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.municipioRepository.create(row);
    }
  }
  private async importOrganizacion(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.organizacionRepository.create(row);
    }
  }
  private async importProcesoConvocatoria(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.procesoConvocatoriaRepository.create(row);
    }
  }
  private async importPrograma(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      await this.programaRepository.create(row);
    }
  }

  // Agrega métodos privados para las demás clases según sea necesario
}
