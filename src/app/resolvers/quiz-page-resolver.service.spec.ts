import { TestBed, inject } from '@angular/core/testing';

import { QuizPageResolverService } from './quiz-page-resolver.service';

describe('QuizPageResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizPageResolverService]
    });
  });

  it('should be created', inject([QuizPageResolverService], (service: QuizPageResolverService) => {
    expect(service).toBeTruthy();
  }));
});
