import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesFilterComponent } from './notes-filter/notes-filter.component';
import { NoteService } from './coomon/services/note.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
