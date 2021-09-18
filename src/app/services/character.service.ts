import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getDataFirst(): Promise<Character[]>{
    let promise
    promise = new Promise<Character[]>((resolve,reject) => {
      this.http.get<Character[]>('./assets/data.json')
      .toPromise()
      .then((res: Character[]) => {
        resolve(res)
      }, error => {
        reject(error)
      })
    })

    return promise;
    
  }
  get(): Character[]{
    return JSON.parse(localStorage.getItem("characters")!)
  }
  getPos(index: number): Character{
    let lst = JSON.parse(localStorage.getItem("characters")!)
    return lst[index]
  }
  add(data: Character){
    let lst: Character[]  = JSON.parse(localStorage.getItem("characters")!)
    lst.push(data)
    localStorage.setItem("characters",JSON.stringify(lst))
  }
  update(index: number, data: Character){
    let lst: Character[]  = JSON.parse(localStorage.getItem("characters")!)
    lst[index] = data
    localStorage.setItem("characters",JSON.stringify(lst))
  }
  delete(index: number){
    let lst: Character[]  = JSON.parse(localStorage.getItem("characters")!)
    lst.splice(index,1)
    localStorage.setItem("characters",JSON.stringify(lst))
  }
}

