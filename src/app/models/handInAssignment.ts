import {Evaluation} from './evaluation';

export class UploadedFile {
  id: number;
}

export class HandInAssignment {
  handInIds: UploadedFile[];
  evaluations: Evaluation[];
  fileNames: string[];
  id: number;
}
