import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerCreationComponent } from './ledger-creation.component';

describe('LedgerCreationComponent', () => {
  let component: LedgerCreationComponent;
  let fixture: ComponentFixture<LedgerCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
