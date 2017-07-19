import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
  private heroesUrl = 'api/heroes';//URL to web api

  constructor(private http:Http){}

  getHeroesSlowly():Promise<Hero[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()),500)
    });
  }
  // getHeroes():Promise<Hero[]>{
  //   return Promise.resolve(HEROES);
  // }

  getHeroes():Promise<Hero[]>{
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  getHero(id: number):Promise<Hero>{
    return this.getHeroes()
              .then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any): Promise<any>{
    console.log('An error occurred',error);
    return Promise.reject(error.message || error);
  }
}
