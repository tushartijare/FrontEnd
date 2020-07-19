import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaurantorDeatilsComponent } from './gaurantor-deatils.component';

describe('GaurantorDeatilsComponent', () => {
  let component: GaurantorDeatilsComponent;
  let fixture: ComponentFixture<GaurantorDeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaurantorDeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaurantorDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
