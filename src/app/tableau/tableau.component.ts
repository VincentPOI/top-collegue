import { Component, OnInit,Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  collegues:Collegue[]

    constructor(private collegueService:CollegueService) { }

    ngOnInit() {
      this.collegues=new Array()
      this.collegueService.listerCollegues().then(collegues => collegues.forEach( c => this.collegues.push(c)))
    }

}
