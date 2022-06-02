import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPart2Component } from './solution-part2.component';

describe('SolutionPart2Component', () => {
  let component: SolutionPart2Component;
  let fixture: ComponentFixture<SolutionPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionPart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
