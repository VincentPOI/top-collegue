import { Component, OnInit,Input } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent implements OnInit {

collegues:Collegue[]

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegues=new Array()
    this.collegueService.listerCollegues().then(collegues => collegues.forEach( c => this.collegues.push(c)))
  }

}
