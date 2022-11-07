import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCameraShiftSelectComponent } from './dialog-camera-shift-select.component';

describe('DialogCameraShiftSelectComponent', () => {
  let component: DialogCameraShiftSelectComponent;
  let fixture: ComponentFixture<DialogCameraShiftSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCameraShiftSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCameraShiftSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
