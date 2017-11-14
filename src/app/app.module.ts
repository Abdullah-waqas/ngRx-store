import { State } from './state-management/state/main-state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { mainReducer } from "./state-management/reducers/main-reducer";
import { StoreModule, ActionReducer } from "@ngrx/store";
import { AppComponent } from './app.component';
import { storeLogger } from 'ngrx-store-logger';

export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({mainReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
