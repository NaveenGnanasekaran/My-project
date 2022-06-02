import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthStudentsComponent } from './tenth-students.component';

describe('TenthStudentsComponent', () => {
  let component: TenthStudentsComponent;
  let fixture: ComponentFixture<TenthStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenthStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenthStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
