import { Injectable } from '@angular/core';
import { NotePadData } from "./data.model";
import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  notePadsChanged = new Subject<NotePadData[]>();
  private notePads: NotePadData[] = [
    new NotePadData('Angular', "A project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done todayA project needed to be done today"),
    new NotePadData('Rails', "A web application needed to be done as well"),
  ];



  constructor() { }
  getAllNotes(){
    return this.notePads
  }
  getNotes(id:number){
    return this.notePads[id]
  }
  getId(notePads: NotePadData){
    return this.notePads.indexOf(notePads)
  }
  addNote(note:NotePadData){
   let newLength = this.notePads.push(note);
   let index = newLength - 1;
   return index
  }

  deleteNote(index:number){
  this.notePads.splice(index, 1);
  }
  update(index: number, notePads: NotePadData){
  this.notePads[index] = notePads;
  this.notePadsChanged.next(this.notePads.slice());
}
}
