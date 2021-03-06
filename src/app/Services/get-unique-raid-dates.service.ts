import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUniqueRaidDatesService {
  private baseUrl = "http://localhost:8080/api/getUniqueRaidDates"

  constructor(private http: HttpClient) { }

  getUniqueRaidDates(): Observable<String[]>{
    return this.http.get<String[]>(`${this.baseUrl}`);
  }
}
