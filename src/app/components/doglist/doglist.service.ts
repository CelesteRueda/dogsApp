import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DogService {

    constructor(private http: HttpClient) { }

    getDogsList(){
        return this.http.get(`https://us-central1-lucas-test-api.cloudfunctions.net/dogs`);
     }

}