import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfeedbacksComponent } from './listfeedbacks.component';

describe('ListfeedbacksComponent', () => {
  let component: ListfeedbacksComponent;
  let fixture: ComponentFixture<ListfeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListfeedbacksComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
