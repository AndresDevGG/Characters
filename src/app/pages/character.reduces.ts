import { Action } from "@ngrx/store";
import { Character } from '../interfaces/character';
import { ADD, DELETE } from './../interfaces/Character.action'
import { actions, UPDATE } from '../interfaces/Character.action';
const items: any[] = JSON.parse(localStorage.getItem("characters")!)
export function CharacterReducer(state: number = items.length, action: Action ): number{
    switch (action.type) {
        case ADD:
            return state + 1;
        case DELETE:
            return state - 1
        default:
            return state
    }
}