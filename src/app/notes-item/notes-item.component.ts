import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'edm-notes-item',
  templateUrl: './notes-item.component.html',
  styleUrls: ['./notes-item.component.scss']
})
export class NotesItemComponent implements OnInit {

  id:string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  addNote(form: NgForm){
    console.log(form);
  }
  changeNote(form: NgForm){
    console.log(form);
  }

}
