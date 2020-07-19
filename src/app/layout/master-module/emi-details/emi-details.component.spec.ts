import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiDetailsComponent } from './emi-details.component';

describe('EmiDetailsComponent', () => {
  let component: EmiDetailsComponent;
  let fixture: ComponentFixture<EmiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
