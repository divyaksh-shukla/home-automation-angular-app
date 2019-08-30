import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerUsageComponent } from './power-usage.component';

describe('PowerUsageComponent', () => {
  let component: PowerUsageComponent;
  let fixture: ComponentFixture<PowerUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
