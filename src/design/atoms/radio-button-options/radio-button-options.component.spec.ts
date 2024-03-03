import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonOptionsComponent } from './radio-button-options.component';

describe('RadioButtonOptionsComponent', () => {
  let component: RadioButtonOptionsComponent;
  let fixture: ComponentFixture<RadioButtonOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioButtonOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
