import { Component, OnInit,Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  collegues:Collegue[]
  bP:string
  bD:string

    constructor(private collegueService:CollegueService) { }

    ngOnInit() {
      this.bP="btn btn-primary"
      this.bD="btn btn-danger"
      this.collegues=new Array()
      this.collegueService.listerCollegues().then(collegues => collegues.forEach( c => this.collegues.push(c)))
    }

}
