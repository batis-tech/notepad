import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { DataService } from "../services/data.service";
import { NotePadData } from "../services/data.model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notes: NotePadData [] = [];
  search:any;
  id: any[]= [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.notes = this.dataService.getNotes();
    console.log(this.notes);
  }

  onDelete(id: any){
    this.dataService.deleteNote(this.id);
  }



}
