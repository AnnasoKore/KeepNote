import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeepNoteComponent } from './keep-note/keep-note.component';
import { CustomFilterPipe } from './custom-filter.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditNoteComponent } from './edit-note/edit-note.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    KeepNoteComponent,
    CustomFilterPipe,
    PagenotfoundComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
