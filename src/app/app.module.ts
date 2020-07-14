import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesFilterComponent } from './notes-list/notes-filter/notes-filter.component';
import { NoteService } from './coomon/services/note.service';
import { NotesItemComponent } from './notes-item/notes-item.component';


const appRoutes: Routes =[
  { path: 'note', component: NotesItemComponent},
  { path: 'note/:id', component: NotesItemComponent},
  { path: '', component: NotesListComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesFilterComponent,
    NotesItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
