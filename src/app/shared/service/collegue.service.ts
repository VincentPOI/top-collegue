import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { Vote } from '../domain/vote';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {AVIS} from '../domain/avisEnum'
import {Avis} from '../domain/avis'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/interval';

@Injectable()
export class CollegueService {

	private collegueSub:Subject<Collegue> = new Subject();

	private voteSub:Subject<Vote> =new Subject();

	private avisSub:Subject<Avis>=new Subject();

	get collegueObs():Observable<Collegue>{
		return this.collegueSub
	}
	get voteObs():Observable<Vote>{
		return this.voteSub
	}
	get avisObs():Observable<Avis>{
		return this.avisSub
	}


	constructor(private http:HttpClient) {

	}

	listerCollegues():Observable<Collegue[]> {
		return this.http.get<Collegue[]>('http://localhost:8080/collegues')
	}


	// sauvegarder2(newCollegue:Collegue):Observable<Collegue> {
	// 	const httpOptions = {
	// 		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	// 	};
	// 	const res = this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue,httpOptions);
	// 	res.subscribe(value => this.collegueSub.next(value))
	// 	return this.collegueObs
	// }

	sauvegarder(newCollegue:Collegue):Observable<Collegue> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		return this.http.post<Collegue>('http://localhost:8080/collegues',newCollegue,httpOptions)
		.map(value => {
			this.collegueSub.next(value)
			return value;
		}				)
	}


	aimerUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		let body = {"action" : "aimer"}
		let req:string = 'http://localhost:8080/collegues/'+unCollegue.nom
		this.voteSub.next(new Vote(unCollegue,AVIS.LIKE))
		return this.http.patch<Collegue>(req,body)
	}



	detesterUnCollegue(unCollegue:Collegue):Observable<Collegue> {
		let body = {"action" : "detester"}
		let req:string = 'http://localhost:8080/collegues/'+unCollegue.nom
		this.voteSub.next(new Vote(unCollegue,AVIS.DISLIKE))
		return this.http.patch<Collegue>(req,body)
	}



	FindCollegueByNom(unCollegue:string):Observable<Collegue> {
		let req:string = 'http://localhost:8080/collegues/'+unCollegue
		return this.http.get<Collegue>(req)
	}

	getHistoriqueVote():Observable<Vote[]>{
		return this.http.get<Vote[]>( 'http://localhost:8080/votes')
	}

	saveAvis(newAvis:Avis):Observable<Avis>{
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};
		return this.http.post<Avis>('http://localhost:8080/avis',newAvis,httpOptions)
		.map(value => {
			this.avisSub.next(value)
			return value;
		})
	}

	getAvisByCollegue(pseudo:string):Observable<Avis[]>{
		return this.http.get<Avis[]>('http://localhost:8080/avis/'+pseudo)
	}

}
