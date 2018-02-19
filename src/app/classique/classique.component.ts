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
  nbCol:number = 4
  searched:string = ""

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegues=new Array()
    this.collegueService.listerCollegues().then(collegues => collegues.forEach( c => this.collegues.push(c)))
  }

  setLimite(limite:HTMLInputElement){
    this.nbCol= Number.parseInt(limite.value)
    console.log(this.nbCol)
    return false
  }

  search(str:HTMLInputElement){
    this.searched=str.value
    return false
  }
}
