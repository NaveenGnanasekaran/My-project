import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcounsellingComponent } from './listcounselling.component';

describe('ListcounsellingComponent', () => {
  let component: ListcounsellingComponent;
  let fixture: ComponentFixture<ListcounsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcounsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
