import { Component, OnInit,Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { Avis } from '../shared/domain/avis';
import {CollegueService} from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup ,FormBuilder,Validators  } from '@angular/forms';

class AvisModel{commentaire:string}

@Component({
  selector: 'app-boutons',
  templateUrl: './boutons.component.html',
  styleUrls: ['./boutons.component.css']
})
export class BoutonsComponent implements OnInit {

  @Input() collegue:Collegue;
  @Input()  outline:boolean;
  online: Observable<boolean>;
  disable:boolean;
  closeResult:string;

  avisModel:AvisModel= new AvisModel()

  constructor(private collegueService:CollegueService,private modalService: NgbModal) {
    this.online = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').mapTo(true),
      Observable.fromEvent(window, 'offline').mapTo(false)
    )
  }

  ngOnInit() {
    this.online.subscribe( e =>  (e)
    ?this.disable = false
    :this.disable = true
  )
}


submit() {
  console.log("trolololo")
  let newAvis:Avis = new Avis(this.collegue,this.avisModel.commentaire)
  this.collegueService.saveAvis(newAvis).subscribe();
  // this.closeResult.close()
}



open(content) {
  this.modalService.open(content).result.then((result) => {
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


jaime() {
  this.collegueService.aimerUnCollegue(this.collegue).subscribe(c => this.collegue.score = c.score)
  return false
}
jedeteste() {
  this.collegueService.detesterUnCollegue(this.collegue).subscribe(c => this.collegue.score = c.score)
  return false
}

buttonPrimary():string{
  if(this.outline){
    return "btn btn-outline-primary"
  }else{
    return "btn btn-primary"
  }
}
buttonDanger():string{
  if(this.outline){
    return "btn btn-outline-danger"
  }else{
    return "btn btn-danger"
  }
}
buttonSuccess():string{
  if(this.outline){
    return "btn btn-outline-success"
  }else{
    return "btn btn-success"
  }
}

}
