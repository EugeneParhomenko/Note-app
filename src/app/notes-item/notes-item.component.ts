import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Note } from '../coomon/models/note.model';
import { Subscription } from 'rxjs';
import { NoteService } from '../coomon/services/note.service';

@Component({
  selector: 'edm-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.scss']
})
export class NotesItemComponent implements OnInit, OnDestroy {

  noteId: string;
  note: Note;
  s1: Subscription;
  s2: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService
  ) { }

  renderNote(noteId:string){
    this.s2 = this.noteService.getItem(noteId)
      .subscribe((noteItem: Note) => {
        this.note = noteItem;
    });
  }

  submitNote(form: NgForm){
    let {noteTitle, noteDesc, noteId} = form.value;
    if (noteId) {
      // need update NOTE
      const note = new Note(noteTitle, noteDesc, noteId);
      this.s1 = this.noteService.update(note)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      // need add new NOTE
      const note = new Note(noteTitle, noteDesc);
      this.s1 = this.noteService.add(note)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    }
  }
  
  // addNote(form: NgForm){
  //   console.log(form);
  // }

  // changeNote(form: NgForm){
  //   let {noteTitle, noteDesc} = form.value;
  //   const note = new Note(noteTitle, noteDesc, this.note.id);

  //   this.s1 = this.noteService.update(note)
  //     .subscribe(() => {
  //       this.router.navigate(['/']);
  //     });
  // }

  ngOnInit(): void {
    this.noteId = this.route.snapshot.params['id'];

    if(this.noteId) {
      this.renderNote(this.noteId);
    } else {
      this.note = {
        title: '',
        desc: ''
      };
    }
  }

  ngOnDestroy() {
    if(this.s1){
      this.s1.unsubscribe();
    }
    if(this.s2){
      this.s2.unsubscribe();
    }
  }

}
