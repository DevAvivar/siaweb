import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitUserSessionComponent } from './unit-user-session.component';

describe('UnitUserSessionComponent', () => {
  let component: UnitUserSessionComponent;
  let fixture: ComponentFixture<UnitUserSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitUserSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitUserSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
