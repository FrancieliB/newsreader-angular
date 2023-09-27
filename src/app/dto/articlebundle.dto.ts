import { ArticleDTO } from './article.dto';

export class ArticleBundleDTO {
    status: string;
    totalResults: number;
    articles: ArticleDTO[];
}
