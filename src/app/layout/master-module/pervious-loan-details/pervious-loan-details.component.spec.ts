import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerviousLoanDetailsComponent } from './pervious-loan-details.component';

describe('PerviousLoanDetailsComponent', () => {
  let component: PerviousLoanDetailsComponent;
  let fixture: ComponentFixture<PerviousLoanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerviousLoanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerviousLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
