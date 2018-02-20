import { Component, OnInit } from '@angular/core';
import {CollegueService} from '../shared/service/collegue.service';
import { Avis } from '../shared/domain/avis';


@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {

  personne:string = ""
  avis:string = "aucun avis"
  classe:string = "alert alert-secondary"

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {

    this.collegueService.avisObs.subscribe(lastAvis =>{ this.personne = lastAvis.personne;
      (lastAvis.action)
          ? (this.classe="alert alert-info",this.avis="J'aime")
          : (this.classe="alert alert-danger",this.avis="Je n'aime pas")
      })
    }

  }
