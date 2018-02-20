import { Component, OnInit } from '@angular/core';
import {CollegueService} from '../shared/service/collegue.service';
import{Vote} from '../shared/domain/vote'
import {Collegue} from '../shared/domain/collegue'
import {Observable} from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  votes:Vote[]
  judgement:string
  emote:string

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    const repeat = interval(5000);
    this.votes=new Array()
    repeat.subscribe(r => {this.votes=[];this.collegueService.getHistoriqueVote().subscribe( votes =>
      votes.forEach( v => {
        this.votes.push(v);
        (v.avis.toLocaleString()=="LIKE")?(this.judgement="aimé",this.emote="\\o/"):(this.judgement="détesté",this.emote=":-(");}))})
      }

      // supprimer(){
      //   this.votes.
      // }
    }
