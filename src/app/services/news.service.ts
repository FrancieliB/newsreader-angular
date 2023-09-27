import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleBundleDTO } from '../dto/articlebundle.dto';
import { LanguageEnum } from '../enuns/language.enum';
import { ParameterNewsAPI } from '../dto/parametersnewsapi';

@Injectable({
    providedIn: 'root',
})
export class NewsService {

    private readonly URL = `http://localhost:8080/article/`;
    private readonly API_KEY = `11193c34694940ef87b585c09cf2152f`;

    constructor(private http: HttpClient) { }

    getArticles(parameters: ParameterNewsAPI): Observable<any> {
        parameters.apiKey = this.API_KEY;
        return this.http.post<ArticleBundleDTO>(this.URL, parameters).pipe(map(response => {
            return response as ArticleBundleDTO;
        }));
    }
}
