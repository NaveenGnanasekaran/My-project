import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeStudentsComponent } from './college-students.component';

describe('CollegeStudentsComponent', () => {
  let component: CollegeStudentsComponent;
  let fixture: ComponentFixture<CollegeStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
