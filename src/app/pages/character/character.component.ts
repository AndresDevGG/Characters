import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from '../../services/character.service';
import { CombosService } from '../../services/combos.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, AfterViewInit {

  characterForm: any;
  roles = this.combo.getRoles()
  personalities = this.combo.getPersonality()
  constructor(
    private combo: CombosService
  ) { }

  ngOnInit(): void {
    this.characterForm = new FormGroup({
      Name: new FormControl("",Validators.required),
      Role: new FormControl("", Validators.required),
      RoleDescription: new FormControl("", Validators.required),
      Age: new FormControl(0, Validators.required),
      Personality: new FormControl("", Validators.required),
      Habilities: new FormControl("", Validators.required),
      CreatedAt: new FormControl(new Date, Validators.required),
      NameCreator: new FormControl("", Validators.required),
      Avatar: new FormControl("")
    })
  }
  get form(){ return this.characterForm.coontrols }
  ngAfterViewInit(){
  }
  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  saveCharacter(){
    let data: Character[]  = JSON.parse(localStorage.getItem("characters")!)
    data.push(this.characterForm.value)
    localStorage.setItem("characters",JSON.stringify(data))
  }
}
