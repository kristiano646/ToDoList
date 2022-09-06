import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from './listar.interface';

const OBJETO_API: string = 'http://localhost:8080/to-do-list';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ListarService {

    constructor(private http: HttpClient) { }


    getObjeto(): Observable<Objeto[]> {
        return this.http.get<Objeto[]>(OBJETO_API)
            ;
    }


    createObjeto(obj: Objeto): Observable<Objeto> {
        return this.http.post<Objeto>(OBJETO_API, obj);
   } 

 
}