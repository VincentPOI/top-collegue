import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Avis } from '../domain/avis';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class CollegueService {

	private collegueSub:Subject<Collegue> = new Subject();

	private avisSub:Subject<Avis> =new Subject();

	get collegueObs():Observable<Collegue>{
		return this.collegueSub
	}
	get avisObs():Observable<Avis>{
		return this.avisSub
	}


	constructor(private http:HttpClient) {

	}

	listerCollegues():Observable<Collegue[]> {
		return this.http.get<Collegue[]>('http://localhost:8080/collegues')
	}


	sauvegarder2(newCollegue:Collegue):Observable<Collegue> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		const res = this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue,httpOptions);
		res.subscribe(value => this.collegueSub.next(value))
		return this.collegueObs
		// this.collegueSub.next(newCollegue)
		// return this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue,httpOptions).toPromise()
	}

	sauvegarder(newCollegue:Collegue):Observable<Collegue> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		return this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue,httpOptions)
		.map(value => {
			this.collegueSub.next(value)
			return value;
		}				)


		// this.collegueSub.next(newCollegue)
		// return this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue,httpOptions).toPromise()
	}


	aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		let body = {"action" : "aimer"}
		let req:string = 'http://localhost:8080/collegues/'+unCollegue.nom
		this.avisSub.next(new Avis(true,unCollegue.nom))
		return this.http.patch<Collegue>(req,body)
	}



	detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		let body = {"action" : "detester"}
		let req:string = 'http://localhost:8080/collegues/'+unCollegue.nom
		this.avisSub.next(new Avis(false,unCollegue.nom))
		return this.http.patch<Collegue>(req,body)
	}



	FindCollegueByNom(unCollegue:string):Observable<Collegue> {
		let req:string = 'http://localhost:8080/collegues/'+unCollegue
		return this.http.get<Collegue>(req)
	}


}
