import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor() {
    console.log('Hello DataProvider Provider');
  }

  getData(){
  	//return this.storage.get('todos');
  }

  save(data){
  	//this.storage.set('todos', data);
  }

}
