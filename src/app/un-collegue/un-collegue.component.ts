import { Component, OnInit,Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import {CollegueService} from '../shared/service/collegue.service';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {

  @Input() collegue:Collegue;

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
  }

  jaime() {
  this.collegueService.aimerUnCollegue(this.collegue).then(c => this.collegue.score = c.score)
    return false
  }
  jedeteste() {
    this.collegueService.detesterUnCollegue(this.collegue).then(c => this.collegue.score = c.score)
    return false
  }

}
