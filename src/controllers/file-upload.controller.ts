import {inject} from '@loopback/core';
import {Response, RestBindings, param, post, requestBody} from '@loopback/rest';
import {Request} from 'express';
import {ExcelService} from '../services/excel.service';

const multer = require('multer');

export class FileUploadController {
  constructor(
    @inject('services.ExcelService') private excelService: ExcelService,
  ) {}

  @post('/upload/{modelName}', {
    responses: {
      '200': {
        description: 'File uploaded successfully',
      },
    },
  })
  async upload(
    @requestBody({
      description: 'Excel file to upload',
      required: true,
      content: {
        'multipart/form-data': {
          'x-parser': 'stream',
          schema: {type: 'object', properties: {file: {type: 'string', format: 'binary'}}},
        },
      },
    })
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
    @param.path.string('modelName') modelName: string,
  ): Promise<void> {
    const storage = multer.memoryStorage();
    const upload = multer({storage});

    return new Promise((resolve, reject) => {
      upload.single('file')(request, response, async (err: any) => {
        if (err) reject(err);
        else {
          const file = (request as any).file;
          if (file) {
            await this.excelService.importFromExcel(file.buffer, modelName);
            resolve();
          } else {
            reject(new Error('No file uploaded'));
          }
        }
      });
    });
  }
}
