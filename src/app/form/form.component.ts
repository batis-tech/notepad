import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { NotePadData } from "../services/data.model";
import { DataService } from "../services/data.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  notes: any []=[];
  notepad = new FormGroup ({
       title: new FormControl(''),
       desc: new FormControl(''),
  })
  constructor(private dataService:DataService ,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.notepad.value);
    this.dataService.addNote(this.notepad.value)
this.router.navigate(['home']);
  }

}
