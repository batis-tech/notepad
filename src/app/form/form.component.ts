import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { NotePadData } from "../services/data.model";
import { DataService } from "../services/data.service";
import { Router ,ActivatedRoute ,Params } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  notes: any []=[];
  NoteId: number;
  note:NotePadData;
  new:boolean;

  notepad = new FormGroup ({
       title: new FormControl('',Validators.required),
       desc: new FormControl('',Validators.required),
  })
  // to find out are you creating a new note or just editing an old one


  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      if (params.id) {
      this.note= this.dataService.getNotes(params.id);
        this.NoteId = params.id;
        this.new = false;
      }else{
        this.new = true;
      }
    })
}

  onSubmit(){
  if (this.new) {
    console.log(this.notepad.value);
    this.dataService.addNote(this.notepad.value)
    this.router.navigate(['/home']);
  }else{
   this.dataService.update(this.NoteId,this.notepad.value)
  }

}
}
