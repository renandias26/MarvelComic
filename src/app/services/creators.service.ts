import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  constructor(private http: ConfigService) { }

  getAllCreators(): Observable<any> {
    return this.http.get('/');
  }

  


}
