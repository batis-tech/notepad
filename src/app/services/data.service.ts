import { Injectable } from '@angular/core';
import { NotePadData } from "./data.model";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  notePadsChanged = new Subject<NotePadData[]>();
  private notePads: NotePadData[] = [
    new NotePadData('Angular', "A project needed to be done today"),
    new NotePadData('Rails', "A web application needed to be done as well"),
  ];



  constructor() { }

  getNotes(){
    return this.notePads.slice()
  }
  addNote(note:NotePadData){
   this.notePads.push(note);
  }
  deleteNote(id:any){
    this.notePads.splice(id, 1);
    this.notePadsChanged.next(this.notePads.slice());
  }
}
