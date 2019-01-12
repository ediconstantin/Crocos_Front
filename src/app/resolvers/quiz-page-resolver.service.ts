import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { QuizPageModel } from '../models/QUIZ';
import { Observable, EMPTY, forkJoin, of } from 'rxjs';
// Serviciul de quiz
import { QUIZ_FORM_STATE } from '../models/QUIZ_FORM_STATE';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizPageResolverService implements Resolve<{ page: QuizPageModel}> {

  // resolve(route: ActivatedRouteSnapshot): Observable<{ page: QuizPageModel }> {
  //   // Aici se va adauga preloader in alicatie
  //   const quizId = +route.paramMap.get('quizId');
  //   const pageModel = new QuizPageModel();

  //   let resolver$;

  //   switch (route.data.mode) {
  //     case QUIZ_FORM_STATE.NEW:
  //       break;
  //     case QUIZ_FORM_STATE.EDIT:
  //     case QUIZ_FORM_STATE.VIEW:
  //     resolver$ = forkJoin(
  //       // Aici trebuie serviciul de quiz
  //     )
  //   }
  // }
  constructor() { }

  resolve() {
    return null;
  }
}
