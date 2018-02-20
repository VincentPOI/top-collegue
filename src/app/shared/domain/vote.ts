import {Collegue} from './collegue'
import {AVIS} from './avisEnum'


export class Vote {
  constructor(public col:Collegue, public avis:AVIS){
  }
}
