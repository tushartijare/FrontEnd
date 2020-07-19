import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmidetailsComponent } from './emidetails.component';

describe('EmidetailsComponent', () => {
  let component: EmidetailsComponent;
  let fixture: ComponentFixture<EmidetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmidetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmidetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
