import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDisbusmentComponent } from './loan-disbusment.component';

describe('LoanDisbusmentComponent', () => {
  let component: LoanDisbusmentComponent;
  let fixture: ComponentFixture<LoanDisbusmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDisbusmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDisbusmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
