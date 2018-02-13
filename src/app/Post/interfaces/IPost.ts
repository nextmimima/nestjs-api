import {Document} from 'mongoose';

export interface IPost extends Document {
  readonly title: object;
  readonly snippets: object;
  readonly type: string;
  readonly mainImage: string;
  readonly thumbnail: string;
  readonly content: object;
  readonly isActive: boolean;
}
