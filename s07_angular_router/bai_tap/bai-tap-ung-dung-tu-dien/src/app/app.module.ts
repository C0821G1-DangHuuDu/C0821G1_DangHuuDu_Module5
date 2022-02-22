import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DictinaryPageComponent } from './dictinary-page/dictinary-page.component';
import {RouterModule} from '@angular/router';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {DictionaryModule} from './dictionary.module';

@NgModule({
  declarations: [
    AppComponent,
    DictinaryPageComponent,
    DictionaryDetailComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        DictionaryModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
