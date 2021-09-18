import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public index = 0;
  title: string = ''
  data: any;
  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    this.title ="Editar personaje"
    this.data =this.service.getPos(this.index)
  }

}
