import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraRegisterComponent } from './camera-register.component';

describe('CameraRegisterComponent', () => {
  let component: CameraRegisterComponent;
  let fixture: ComponentFixture<CameraRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
