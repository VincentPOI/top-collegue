import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import {CollegueService} from './shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup ,FormBuilder,Validators  } from '@angular/forms';


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

  online: Observable<boolean>;
  status:string
  statusClass:string
  disable:boolean
  closeResult:string;
  form:FormGroup;

  constructor(private collegueService:CollegueService, private ar:Router,private modalService: NgbModal,private fb: FormBuilder){
    this.online = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').mapTo(true),
      Observable.fromEvent(window, 'offline').mapTo(false)
    )

    this.form = fb.group({
      'suggestion':[null,Validators.required],
      'mauvais':false,
      'bien':false,
      'excellent':true
    })
  }

  ngOnInit() {
    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 3000).subscribe(() => this.successMessage = null);
    this._danger.subscribe((message) => this.dangerMessage = message);
    debounceTime.call(this._danger, 3000).subscribe(() => this.dangerMessage = null);
    this.online.subscribe( e => { (e)
      ?(this.status="online"
      ,this.statusClass="badge badge-pill badge-primary"
      ,this.disable = false)
      :(this.status="offline"
      ,this.statusClass="badge badge-pill badge-danger"
      ,this.disable = true)
    })
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    let c = new Collegue(pseudo.value,imageUrl.value,50)
    this.collegueService.sauvegarder(c)
    .subscribe(
      col => this._success.next(`Le collegue ${col.nom} a bien été sauvegardé`),
      () => this._danger.next("Le collegue existe déja"));
      pseudo.value =""
      imageUrl.value=""
      return false
    }
    afficherForm(){
      return ['/caroussel','/classique','/tableau'].some(a => a == this.ar.url)
    }



    open(formAvisApp) {
      this.modalService.open(formAvisApp).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }


    submitForm(value: any){
      console.log(value);
    }

  }
