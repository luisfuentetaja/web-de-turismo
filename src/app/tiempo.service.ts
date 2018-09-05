import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class TiempoService {

  constructor(private http: Http) { }
  peticiontiempoGet() {
    let url = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/05168'
    let headers = new Headers()
    headers.append('Accept', 'application/json')
    headers.append('api_key', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWlzZnVlbnRldGFqYTg2QGhvdG1haWwuY29tIiwianRpIjoiNzE4MTQ4NTYtZmVhYi00NTQ0LWI1ODUtMGU3NWIwMDJiNWMxIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1MzUzODAyMDIsInVzZXJJZCI6IjcxODE0ODU2LWZlYWItNDU0NC1iNTg1LTBlNzViMDAyYjVjMSIsInJvbGUiOiIifQ.dghvK2LR6n5vwGmurE_M9YwxdEm3VqRsWSxBy1RQZwI')
    headers.append( 'Access-Control-Allow-Origin', 'http://localhost:4200')
    let opts = new RequestOptions()
    opts.headers= headers
    this.http.get(url, opts).subscribe((res)=>{
      console.log(res.json())
    
    })

  }
}
