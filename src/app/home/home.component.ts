import { Component, OnInit,ViewChild} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { DataService } from "../services/data.service";
import { NotePadData } from "../services/data.model";
import { Router ,ActivatedRoute ,Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  notes: NotePadData [] = [];
  search:any;
  index: any;



  constructor(private dataService:DataService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.notes = this.dataService.getAllNotes();
    console.log(this.notes);
    // workout if there's a text overflow and if not,hide the truncat
  }

  onDelete(){
    this.dataService.deleteNote(this.index);
      this.router.navigate(['/home']);
  }

  onUpdate(index: any){
      this.router.navigate(this.index);
  }


  // onDelete(){
  //   this.dataService.deleteNote();
  // }



}
