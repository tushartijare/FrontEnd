import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoucmentDetailsComponent } from './doucment-details.component';

describe('DoucmentDetailsComponent', () => {
  let component: DoucmentDetailsComponent;
  let fixture: ComponentFixture<DoucmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoucmentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoucmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
