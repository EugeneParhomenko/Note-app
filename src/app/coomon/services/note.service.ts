import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Note } from '../models/note.model';
import { Observable } from 'rxjs';

@Injectable()
export class NoteService {

    private serverUrl = 'http://localhost:3200/';

    constructor(public http: HttpClient) {
    }

    
    getList(){
        return this.http.get(this.serverUrl + 'notes');
    }

    add(note: Note):Observable<any> {
        return this.http.post(this.serverUrl + `notes`, note)
    }

    update(note: Note):Observable<any> {
        return this.http.put(this.serverUrl + `notes/${note.id}`, note)
    }

    getItem(noteID:string){
        return this.http.get(this.serverUrl + `notes/${noteID}`);
    }

    delete(url: string = ''): Observable<any> {
        return this.http.delete(this.serverUrl + url);
    }

}