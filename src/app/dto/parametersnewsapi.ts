import { LanguageEnum } from '../enuns/language.enum';
import { SortByEnum } from '../enuns/sortby.enum';

export class ParameterNewsAPI {
    apiKey: string;
    q: string;
    from: Date;
    to: Date;
    language: LanguageEnum;
    sortBy: SortByEnum;
    pageSize: number;
    page: number;
}
