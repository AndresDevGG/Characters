import { Action } from "@ngrx/store";
import { Character } from './character';

export const ADD = 'Agregar Personaje'
export const UPDATE = 'Actualizar Personaje'
export const DELETE = 'Eliminar Personaje'

export class AddAction implements Action{
    readonly type = ADD;
    constructor(public data: Character){}

}
export class UpdateAction implements Action{
    readonly type = UPDATE;
    constructor(public index: number, public data: Character){}

}
export class DeleteAction implements Action{
    readonly type = DELETE;
    constructor(public index: number){}

}

export type actions = AddAction | UpdateAction | DeleteAction;