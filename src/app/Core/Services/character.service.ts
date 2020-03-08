import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Character } from '../Model/Character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacter() {
    return this.http.get<Character[]>(`${environment.urlAPI}/character/1,2,3,4,5,6,7,8,9,10,11,12`);
  }
}
