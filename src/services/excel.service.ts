import { /* your other imports */ } from '@loopback/core';
import { repository } from '@loopback/repository';
import * as XLSX from 'xlsx';
import { 
  ApoyoRepository, 
  ApoyoSocioeconomicoRepository, 
  ContactoRepository, 
  ConvocatoriaRepository, 
  EstudianteRepository, 
  FacultadRepository, 
  MunicipioRepository, 
  OrganizacionRepository, 
  ProcesoConvocatoriaRepository, 
  ProgramaRepository 
} from '../repositories'; // Importa los repositorios que necesites

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
    console.log('ModelName recibido:', modelName);

    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    switch (modelName.toLowerCase()) {
      case 'estudiante':
      case 'estudiantemodel': // Añadido para soportar 'EstudianteModel'
        await this.importEstudiantes(sheet);
        break;
      case 'apoyo':
      case 'apoyomodel': // Añadido para soportar 'ApoyoModel
        await this.importApoyos(sheet);
        break;
      case 'apoyosocioeconomico':
      case 'apoyosocioeconomicomodel': // Añadido para soportar 'ApoyoSocioeconomicoModel'
        await this.importApoyosocioeconomico(sheet);
        break;
      case 'contacto':
      case 'contactomodel': // Añadido para soportar 'ContactoModel'
        await this.importContacto(sheet);
        break;
      case 'convocatoria':
      case 'convocatoriamodel': // Añadido para soportar 'ConvocatoriaModel'
        await this.importConvocatoria(sheet);
        break;
      case 'facultad':
      case 'facultadmodel': // Añadido para soportar 'FacultadModel'
        await this.importFacultad(sheet);
        break;
      case 'municipio':
      case 'municipiomodel': // Añadido para soportar 'MunicipioModel'
        await this.importMunicipio(sheet);
        break;
      case 'organizacion':
      case 'organizacionmodel': // Añadido para soportar 'OrganizacionModel'
        await this.importOrganizacion(sheet);
        break;
      case 'procesoconvocatoria':
      case 'procesoconvocatoriamodel': // Añadido para soportar 'ProcesoConvocatoriaModel'
        await this.importProcesoConvocatoria(sheet);
        break;
      case 'programa':
      case 'programamodel': // Añadido para soportar 'ProgramaModel'
        await this.importPrograma(sheet);
        break;
      default:
        throw new Error('Modelo no soportado');
    }
  }

  private async importEstudiantes(sheet: any[]): Promise<void> {
    for (const row of sheet) {
      // Verifica y ajusta los datos aquí si es necesario
      const { Codigo_Estudiante, ...estudianteData } = row;
      await this.estudianteRepository.create({ Codigo_Estudiante, ...estudianteData });
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
      const { id, ...municipioData } = row; // Excluye el campo id
      await this.municipioRepository.create(municipioData);
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
}
