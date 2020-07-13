import { Component, OnInit } from '@angular/core';
import { NoteService } from '../coomon/services/note.service';
import { Subscription } from 'rxjs';
import { Note } from '../coomon/models/note.model';

@Component({
  selector: 'edm-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  s1: Subscription;
  notesList: Note[] = [];

  constructor(
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.renderNotes();
  }

  renderNotes(){
    this.s1 = this.noteService.getList()
    .subscribe((notesList: Note[]) => {
      this.notesList = notesList;
    });
  }

  deleteNote(noteID:number) {
    this.noteService.delete(`notes/${noteID}`).subscribe(
      ()=>{
        console.log(`${noteID} deleted`);
        this.renderNotes();
      },
      (err) => console.log(err)
    );
  }

  ngOnDestroy() {
    if(this.s1) {
      this.s1.unsubscribe();
    }
  }

}
