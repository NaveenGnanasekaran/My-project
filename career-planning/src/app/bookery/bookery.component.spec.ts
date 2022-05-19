import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookeryComponent } from './bookery.component';

describe('BookeryComponent', () => {
  let component: BookeryComponent;
  let fixture: ComponentFixture<BookeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
