import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { ComponentsModule } from './components/components.module';
import { StoreModule } from "@ngrx/store"
import { CharacterReducer } from './pages/character.reduces';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ComponentsModule,
    StoreModule.forRoot({character: CharacterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
