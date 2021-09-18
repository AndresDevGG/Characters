import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { Character } from 'src/app/interfaces/character';
import { CharacterService } from '../../services/character.service';
import { CombosService } from '../../services/combos.service';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  characterForm: FormGroup = new FormGroup({});
  roles : string[] = []
  personalities : string[] = []
  files: File[] = []

  @Input() index: number = -1
  @Input() type: "create" | "edit" = "create"
  @Input() data: Character | any
  path: any;
  constructor(
    private combo: CombosService,
    private service: CharacterService,
    private general: GeneralService
  ) { 
  }

  ngOnInit(): void {
    this.roles = this.combo.getRoles()
    this.personalities = this.combo.getPersonality()

    this.initForm()

    if(this.type === "edit"){
      this.path = this.data.Avatar
      this.characterForm.patchValue(this.data)
    }
  }
  get form(){ return this.characterForm.controls }
  ngAfterViewInit(){
  }
  onSelect(event: any) {
    if(this.files.length === 0){
      this.files.push(...event.addedFiles);
      console.log(this.files[0])
      if(this.files[0] !== undefined){
        this.getBase64(this.files[0])
        .then(res => {
          this.characterForm.controls.Avatar.setValue(res);
        })
      }else{
        this.general.alert("El tamaño del archivo es muy grande o no es una imagen","error")
      }
    }
  }
  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  saveCharacter(){
    if(this.type === 'create'){
      this.service.add(this.characterForm.value)
      this.initForm()
      
      this.general.alert("Registro guardado con éxito")
    }else if(this.type === 'edit'){
      this.service.update(this.index,this.characterForm.value)
      this.initForm()
      this.general.alert("Registro actualizado con éxito")
      this.close(true)
    }
   
  }
  close(data?: any){

    if(data != null)
      this.general.setDismissResponse(data)

    let element = document.getElementsByClassName("d-block")[0] as HTMLElement
    element.click();

  }
  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  initForm(){
    // this.characterForm = new FormGroup({});
    this.characterForm = new FormGroup({
      Name: new FormControl("",Validators.required),
      Role: new FormControl("", Validators.required),
      RoleDescription: new FormControl("", Validators.required),
      Age: new FormControl(0, Validators.required),
      Personality: new FormControl("", Validators.required),
      Habilities: new FormControl("", Validators.required),
      CreatedAt: new FormControl(new Date, Validators.required),
      NameCreator: new FormControl("", Validators.required),
      Avatar: new FormControl("", Validators.required)
    })
    this.files = []
  }
  delete(){
    console.log(this.index)
    this.service.delete(this.index)
    this.close(true)
  }
}
