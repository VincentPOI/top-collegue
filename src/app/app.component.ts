import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import {CollegueService} from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collegues:Collegue[]
  cachee:boolean
  constructor(private collegueService:CollegueService){
  }
  ngOnInit() {
    this.cachee = true
    this.collegues= new Array()
    this.collegueService.listerCollegues().then(collegue => collegue.forEach(c => this.collegues.push(c)))
}

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    let c = new Collegue(pseudo.value,imageUrl.value,50)
    this.collegueService.sauvegarder(c).then(col => this.collegues.push(col))
    pseudo.value =""
    imageUrl.value=""
    this.cachee = false
    return false
  }
}
