import {Injectable} from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class LanguageStore{
    private _language: BehaviorSubject<string> = new BehaviorSubject(null);
    constructor(){
        let previosLanguage = localStorage.getItem('CDS-Language');
        if(previosLanguage){
            this._language.next(previosLanguage)
        }
    }
    get(){
        return new Observable<string>(fn=>this._language.subscribe(fn))
    }
    set(l: string){
        moment.locale(l);
        localStorage.setItem('CDS-Language',l);
        this._language.next(l)
    }
}



