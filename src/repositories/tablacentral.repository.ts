import {inject} from '@loopback/core';
import {MysqlDataSource} from '../datasources';

export class TablaCentralRepository {
  constructor(@inject('datasources.mysql') protected datasource: MysqlDataSource) {}

  async executeQuery(): Promise<any[]> {
    const query = `SELECT
      e.Nombre AS nombrecompleto,
      e.Genero AS sexo,
      e.Edad,
      mN.Nombre AS municipioprocedencia,
      e.Tipo_Identificacion,
      e.Numero_De_Identificacion,
      e.Codigo_Estudiante,
      e.Correo AS Correo_Electronico_Estudiante,
      e.Celular AS Numero_Contacto_Estudiante,
      e.PBM,
      p.Nombre AS Programa_Actual,
      e.Promedio_Notas,
      p.Duracion_Semestres AS Duracion_programa,
      CASE
        WHEN e.Retiros_Bajo_Rendimiento = 1 THEN 'SI'
        ELSE 'NO'
      END AS retirosbajorendimiento,
      e.Semestre_Bajo_Rendimiento AS periodoretiro,
      CASE
        WHEN e.Sanciones_Disciplinarias = 1 THEN 'SI'
        ELSE 'NO'
      END AS sancionesdisciplinarias,
      e.Semestre_Sancion AS semestresancion,
      p.Codigo_SNIES,
      a.Nombre AS beneficiosies,
      aps.Semestre AS semestre,
      e.Ultimo_Semestre_Cursado,
      mV.Nombre as municipioResidencia,
      CASE
        WHEN e.Aspirante_Especial = 1 THEN 'SI'
        ELSE 'NO'
      END AS aspiranteespecial,
      e.Estado,
      CASE
        WHEN e.hijos = 1 THEN 'SI'
        ELSE 'NO'
      END AS personasacargo,
      e.Estrato,
      c.Nombre AS contactonombre,
      c.Parentesco AS contactoparentesco,
      c.Celular AS contactonumero,
      c.Procedencia AS contactoprocedencia,
      c.Correo AS contactocorreo
    FROM
      estudiante e
    LEFT JOIN
      municipio mN ON e.Id_Municipio_Nacimiento= mN.id
    LEFT JOIN
      municipio mV on e.Id_Municipio_Vivienda = mV.id
    LEFT JOIN
      programa p ON e.Id_Programa_Academico = p.id
    LEFT JOIN
      procesoconvocatoria pc on e.Codigo_Estudiante = pc.Codigo_Estudiante
    LEFT JOIN
      convocatoria con on pc.Id_convocatoria = con.id
    LEFT JOIN
      apoyosocioeconomico aps on con.Id_Apoyo_Socio_Economico= aps.id
    LEFT JOIN
      apoyo a on aps.Id_Apoyo= a.id
    LEFT JOIN
      contacto c ON e.Id_Contacto = c.id
    ORDER BY
      e.Nombre`;

    return this.datasource.execute(query, []);
  }
}
