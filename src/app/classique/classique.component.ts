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
    this.collegueService.listerCollegues().subscribe(collegues => this.collegues = collegues)
    this.collegueService.collegueObs.subscribe(newCol => this.collegues.push(newCol))

  }

  setLimite(limite:HTMLInputElement){
    this.nbCol= Number.parseInt(limite.value)
    return false
  }

  search(str:HTMLInputElement){
    this.searched=str.value
    return false
  }
}
