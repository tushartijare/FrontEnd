import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousLoanDetailsComponent } from './previous-loan-details.component';

describe('PreviousLoanDetailsComponent', () => {
  let component: PreviousLoanDetailsComponent;
  let fixture: ComponentFixture<PreviousLoanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousLoanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
