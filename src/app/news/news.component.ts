import { Component, OnInit } from '@angular/core';
import { ArticleBundleDTO } from '../dto/articlebundle.dto';
import { LanguageEnum } from '../enuns/language.enum';
import { ParameterNewsAPI } from '../dto/parametersnewsapi';
import { NewsService } from '../services/news.service';
import { MatDialog } from '@angular/material/dialog';
import { ArticleComponent } from '../article/article.component';
import { ArticleDTO } from '../dto/article.dto';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

    searchValue: string;

    articleBundle: ArticleBundleDTO;
    arr = [
        'tesla',
        'apple',
        'bitcoin'
    ];

    constructor(private newsSevice: NewsService, public dialog: MatDialog) {
        this.searchValue = this.getRandomElement();
        this.search();
    }

    search(): void {
        const parameter = new ParameterNewsAPI();
        parameter.q = this.searchValue;
        parameter.language = LanguageEnum.ENGLISH;
        parameter.pageSize = 9;
        parameter.page = 1;

        this.newsSevice.getArticles(parameter).subscribe(data => {
            this.articleBundle = data;
        });
    }

    getRandomElement(): string {
        return this.arr.length ? this.arr[Math.floor(Math.random() * this.arr.length)] : 'tesla';
    }

    openDialog(article: ArticleDTO): void {
        this.dialog.open(ArticleComponent, {
          data: {
            article,
          },
        });
    }
}
