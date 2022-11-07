import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCameraComponent } from './my-camera.component';

describe('MyCameraComponent', () => {
  let component: MyCameraComponent;
  let fixture: ComponentFixture<MyCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
