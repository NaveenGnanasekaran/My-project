import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelthStudentsComponent } from './twelth-students.component';

describe('TwelthStudentsComponent', () => {
  let component: TwelthStudentsComponent;
  let fixture: ComponentFixture<TwelthStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelthStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelthStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
