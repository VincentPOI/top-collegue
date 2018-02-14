export class Collegue {
  constructor(private _nom: string, private _imageUrl: string, private _score:number){
  }
  get nom():string {
      return this._nom;
  }
  set nom(theNom:string) {
      this._nom = theNom;
  }

  get imageUrl():string {
      return this._imageUrl;
  }
  set imageUrl(theimageUrl:string) {
      this._imageUrl = theimageUrl;
  }

  get score():number {
      return this._score;
  }
  set score(theScore:number) {
      this._score = theScore;
  }
}
