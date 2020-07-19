import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireDetailsComponent } from './enquire-details.component';

describe('EnquireDetailsComponent', () => {
  let component: EnquireDetailsComponent;
  let fixture: ComponentFixture<EnquireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
