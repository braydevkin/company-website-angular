import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFreqCurrencySelectComponent } from './plan-freq-currency-select.component';

describe('PlanFreqCurrencySelectComponent', () => {
  let component: PlanFreqCurrencySelectComponent;
  let fixture: ComponentFixture<PlanFreqCurrencySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanFreqCurrencySelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanFreqCurrencySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
