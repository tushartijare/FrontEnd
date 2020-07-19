import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerBankDetailsComponent } from './dealer-bank-details.component';

describe('DealerBankDetailsComponent', () => {
  let component: DealerBankDetailsComponent;
  let fixture: ComponentFixture<DealerBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
