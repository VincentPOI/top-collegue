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
  nbCol:number = 8
  searched:string = ""

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegues=new Array()
    this.collegueService.listerCollegues().then(collegues => this.collegues = collegues)

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
