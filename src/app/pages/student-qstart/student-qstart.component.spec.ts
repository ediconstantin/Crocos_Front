import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQstartComponent } from './student-qstart.component';

describe('StudentQstartComponent', () => {
  let component: StudentQstartComponent;
  let fixture: ComponentFixture<StudentQstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentQstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
