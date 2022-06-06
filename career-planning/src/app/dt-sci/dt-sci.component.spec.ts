import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtSciComponent } from './dt-sci.component';

describe('DtSciComponent', () => {
  let component: DtSciComponent;
  let fixture: ComponentFixture<DtSciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtSciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
