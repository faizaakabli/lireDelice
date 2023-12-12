import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LivreService {
  private apiUrl ='http://localhost:3000';

  constructor(private http: HttpClient) { }

  getLivreById(id: string): Observable<any>  {
    return this.http.get<any>(`${this.apiUrl}/livre/${id}`);
  }
}