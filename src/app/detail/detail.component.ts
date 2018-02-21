import { Component, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {Avis} from '../shared/domain/avis'
import {CollegueService} from '../shared/service/collegue.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pseudo:string;
  collegue:Collegue;
  avis:Avis[];

  constructor(private route: ActivatedRoute,private collegueService:CollegueService) {
    route.params.subscribe(params => { this.pseudo = params['pseudo']; });

  }

  ngOnInit() {
    this.collegueService.FindCollegueByNom(this.pseudo).subscribe(c => this.collegue = c)
    this.collegueService.getAvisByCollegue(this.pseudo).subscribe(avis => this.avis = avis)
    this.collegueService.avisObs.subscribe(a => this.avis.push(a))
    }
  }
