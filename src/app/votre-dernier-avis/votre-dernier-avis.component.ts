import { Component, OnInit } from '@angular/core';
import {CollegueService} from '../shared/service/collegue.service';



@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  personne:string = ""
  judgement:string = "aucun avis"
  classe:string = "alert alert-secondary"

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {

    this.collegueService.voteObs.subscribe(lastVote =>{ this.personne = lastVote.col.nom;
      (lastVote.avis==0)
          ? (this.classe="alert alert-info",this.judgement="J'aime")
          : (this.classe="alert alert-danger",this.judgement="Je n'aime pas")
      })
    }

  }
