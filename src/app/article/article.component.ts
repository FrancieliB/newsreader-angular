import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleDTO } from '../dto/article.dto';

export interface DialogData {
    article: ArticleDTO;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {

    article: ArticleDTO;

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
        this.article = data.article;
    }
}
