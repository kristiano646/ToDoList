import { ElementRef, ViewChild, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Objeto } from './listar.interface';
import { NGXLogger } from "ngx-logger";

const OBJETO_API: string = 'http://localhost:8080/to-do-list';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



export class ListarService {
    private logger: NGXLogger;

    constructor(private http: HttpClient) { }

    @ViewChild('search') srch: ElementRef;

    getTitle(obj: Objeto): Observable<Objeto> {
        return this.http.post<Objeto>(OBJETO_API, this.srch);
    }
    getObjeto(): Observable<Objeto[]> {
        return this.http.get<Objeto[]>(OBJETO_API,);
    }

    createObjeto(obj: Objeto): Observable<Objeto> {
        return this.http.put<Objeto>(OBJETO_API, obj);
    }
    deleteObjeto(obj: Objeto): Observable<Objeto> {
        return this.http.post<Objeto>(OBJETO_API, obj);
    }
    updateObjeto(obj: Objeto): Observable<Objeto> {
        return this.http.post<Objeto>(OBJETO_API, obj);
    }
    //para el estado
    
    createObjetoEstado(obj: Objeto): Observable<Objeto> {
        return this.http.put<Objeto>(OBJETO_API, obj);
    
    }
    

    logWithContext(): void {
        this.logger.error('Logging from ListarService');
      }
}