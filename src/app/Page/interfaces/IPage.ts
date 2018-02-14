import {Document} from 'mongoose';

export interface IPage extends Document {
  readonly title: object;
  readonly path: string;
  readonly remarks: string;
  readonly content: object;
  readonly isActive: boolean;
}