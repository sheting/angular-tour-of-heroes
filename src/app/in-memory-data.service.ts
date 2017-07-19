import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'My Father'},
      {id: 12, name: 'My Mother'},
      {id: 13, name: 'My Brother'},
      {id: 14, name: 'My Grandpa'},
      {id: 15, name: 'My Uncle'},
      {id: 16, name: 'My Aunt'},
      {id: 17, name: 'My Old Sister'},
    ];
    return {heroes};
  }
}
