import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilComponent } from './cibil.component';

describe('CibilComponent', () => {
  let component: CibilComponent;
  let fixture: ComponentFixture<CibilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CibilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
