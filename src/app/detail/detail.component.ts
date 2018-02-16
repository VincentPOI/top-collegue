import { Component, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import {CollegueService} from '../shared/service/collegue.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pseudo:string
  collegue:Collegue

  constructor(private route: ActivatedRoute,private collegueService:CollegueService) {
    route.params.subscribe(params => { this.pseudo = params['pseudo']; });

  }

  ngOnInit() {
    this.collegueService.FindCollegueByNom(this.pseudo).then(c => this.collegue = c)
    }
  }
