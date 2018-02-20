import { Component, OnInit,Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import {CollegueService} from '../shared/service/collegue.service';

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css']
})
export class BoutonsComponent implements OnInit {

  @Input() collegue:Collegue;
  @Input()  outline:boolean

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
  }

  jaime() {
    this.collegueService.aimerUnCollegue(this.collegue).subscribe(c => this.collegue.score = c.score)
    return false
  }
  jedeteste() {
    this.collegueService.detesterUnCollegue(this.collegue).subscribe(c => this.collegue.score = c.score)
    return false
  }

  buttonPrimary():string{
    if(this.outline){
      return "btn btn-outline-primary"
    }else{
      return "btn btn-primary"
    }
  }
  buttonDanger():string{
    if(this.outline){
      return "btn btn-outline-danger"
    }else{
      return "btn btn-danger"
    }
  }

}
