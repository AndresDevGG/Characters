import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';

const routes: Routes = [{
  path: "",
  component: CharacterComponent
},
{
  path: 'list',
  loadChildren: () => import("./../list/list.module").then(m => m.ListModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
