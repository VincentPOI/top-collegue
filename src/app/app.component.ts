import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collegues:Collegue[]
  cachee:boolean
  ngOnInit() {
    this.cachee = true
    this.collegues= new Array()
    this.collegues.push(new Collegue("jambon","https://images-na.ssl-images-amazon.com/images/I/411RzrsBmBL._SY300_.jpg",20))
    this.collegues.push(new Collegue("Ait-Ahmed","https://images-na.ssl-images-amazon.com/images/I/411RzrsBmBL._SY300_.jpg",19))
    this.collegues.push(new Collegue("poisson","https://images-na.ssl-images-amazon.com/images/I/411RzrsBmBL._SY300_.jpg",18))
    this.collegues.push(new Collegue("timon","https://images-na.ssl-images-amazon.com/images/I/411RzrsBmBL._SY300_.jpg",17))
    this.collegues.push(new Collegue("pumba","https://images-na.ssl-images-amazon.com/images/I/411RzrsBmBL._SY300_.jpg",16))
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement,alert: HTMLDivElement) {
    this.collegues.push(new Collegue(pseudo.value,imageUrl.value,0))
    pseudo.value =""
    imageUrl.value=""
    this.cachee = false
    return false
  }
}
