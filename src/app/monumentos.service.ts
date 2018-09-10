import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class MonumentosService {
    baseUrl: string;
    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000/monumentos';
    }
    getAllCategorias() {
        let url = `${this.baseUrl}`;
        return this.http.get(url).toPromise()
    }
    getOne(id){
        let url = `${this.baseUrl}/${id}`;
        return this.http.get(url).toPromise()
    }
}