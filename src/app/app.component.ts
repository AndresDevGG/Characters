import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Personajes Geta Club';

  constructor(private service: CharacterService){}
  
  ngOnInit(): void {
    if(localStorage.getItem("characters") === null){
      this.service.getDataFirst()
      .then(res => {
        localStorage.setItem("characters",JSON.stringify(res))
      })
      .catch()
    }    
  }
}
