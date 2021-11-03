import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from "../../services/data.service";
import { NotePadData } from "../../services/data.model";
import { Router ,ActivatedRoute ,Params } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

@Input() note: NotePadData;
@Input() index: any;
  constructor(private dataService:DataService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onDelete(){
    this.dataService.deleteNote(this.index);
      this.router.navigate(['/home']);
  }
  onUpdate(index: number){
    this.router.navigate([this.index]);
  }

}
