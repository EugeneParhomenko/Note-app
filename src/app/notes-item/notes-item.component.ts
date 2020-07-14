import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from '../coomon/models/note.model';
import { Subscription } from 'rxjs';
import { NoteService } from '../coomon/services/note.service';

@Component({
  selector: 'edm-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.scss']
})
export class NotesItemComponent implements OnInit, OnDestroy {

  id: string;
  note: Note;
  s1: Subscription;
  s2: Subscription;
  form: FormGroup;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService
  ) { }

  renderNote(id:string){
    this.s2 = this.noteService.getItem(id)
      .subscribe((note: Note) => {
        this.note = note;

        // init FORM
        this.form = new FormGroup({
          title: new FormControl(note.title, [Validators.required, Validators.minLength(5)]),
          desc: new FormControl(note.desc),
          id: new FormControl(note.id)
        })

    });
  }

  submitNote(){
    let {title, desc, id} = this.form.value;
    if (id) {
      // need update NOTE
      const note = {title, desc, id};
      this.s1 = this.noteService.update(note)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    } else {
      // need add new NOTE
      const note = {title, desc, id};
      this.s1 = this.noteService.add(note)
        .subscribe(() => {
          this.router.navigate(['/']);
        });
    }
  }
 

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if(this.id) {
      this.renderNote(this.id);
    } else {
      // init FORM
      this.form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(5)]),
        desc: new FormControl(''),
        id: new FormControl('')
      })
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
