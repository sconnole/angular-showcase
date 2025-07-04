import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = 'https://ulti-verse.com/api/v2/teams/players/anders-juengst';

  constructor(private http: HttpClient) {}

  getPlayer(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
