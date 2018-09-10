import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class PersonajesService {
    baseUrl: string;
    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000/personajes';
    }
    getAllCategorias() {
        let url = `${this.baseUrl}`;
        return this.http.get(url).toPromise()
    }
    getOne(id){
        let url = `${this.baseUrl}/${id}`;
        return this.http.get(url).toPromise()
    }
    getOneCategoria(categoria){
        let url = `${this.baseUrl}/categoria/${categoria}`;
        return this.http.get(url).toPromise()
    }
}