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
    this.collegue.score += 10
  this.collegueService.aimerUnCollegue(this.collegue)
    return false
  }
  jedeteste() {
    this.collegue.score -= 5
    this.collegueService.detesterUnCollegue(this.collegue)
    return false
  }

}
