import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CombosService {

  constructor() { }

  getRoles(){
    let list = [
      "Titán",
      "Karateka",
      "Espía",
      "Soldado",
      "Zombie",
      "Ninja",
      "Mitologico"
    ]
    return list;
  }
  getPersonality(){
    let list = [
      "Frío",
      "Amigable",
      "Eufórico",
      "Serio",
      "Alegre",
      "Caballeroso",
      "Malévolo"
    ]
    return list;
  }
}
