import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List12thComponent } from './list12th.component';

describe('List12thComponent', () => {
  let component: List12thComponent;
  let fixture: ComponentFixture<List12thComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List12thComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List12thComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
