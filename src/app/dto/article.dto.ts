import { SourceDTO } from './source.dto';

export class ArticleDTO {
    source: SourceDTO;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}
