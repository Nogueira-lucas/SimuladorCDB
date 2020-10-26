import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBarCalcComponent } from './slide-bar-calc.component';

describe('SlideBarCalcComponent', () => {
  let component: SlideBarCalcComponent;
  let fixture: ComponentFixture<SlideBarCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBarCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBarCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
