import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    ToolbarComponent,
    ContainerComponent,
    DialogComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxDropzoneModule
  ],
  exports:[
    ToolbarComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ContainerComponent,
    DialogComponent,
    NgxDropzoneModule,
    FormComponent
  ]
})
export class ComponentsModule { }
