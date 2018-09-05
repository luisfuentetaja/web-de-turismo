import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'

@Injectable({
    providedIn: 'root'
})
export class HistoriaService {
    baseUrl: string;
    constructor(private http: Http) {
        this.baseUrl = 'http://localhost:3000/historia';
    }
    getAllProductos() {
        let url = `${this.baseUrl}`;
        return this.http.get(url).toPromise()
    }
}