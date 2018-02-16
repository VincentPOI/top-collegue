import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {CollegueService} from './shared/service/collegue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private _success = new Subject<string>();
  successMessage: string;
  private _danger = new Subject<string>();
  dangerMessage: string;

  constructor(private collegueService:CollegueService){
  }
  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 3000).subscribe(() => this.successMessage = null);
    this._danger.subscribe((message) => this.dangerMessage = message);
    debounceTime.call(this._danger, 3000).subscribe(() => this.dangerMessage = null);
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    let c = new Collegue(pseudo.value,imageUrl.value,50)
    this.collegueService.sauvegarder(c)
      .then(col => this._success.next(`Le collegue ${col.nom} a bien été sauvegardé (rechargez pour afficher)`))
      .catch(()=> this._danger.next("Le collegue existe déja"));
    pseudo.value =""
    imageUrl.value=""
    return false
  }
}
