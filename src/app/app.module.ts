import { State } from './state-management/state/main-state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { mainReducer } from "./state-management/reducers/main-reducer";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.provideStore({mainReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
