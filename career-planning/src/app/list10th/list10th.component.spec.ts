import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List10thComponent } from './list10th.component';

describe('List10thComponent', () => {
  let component: List10thComponent;
  let fixture: ComponentFixture<List10thComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List10thComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List10thComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
