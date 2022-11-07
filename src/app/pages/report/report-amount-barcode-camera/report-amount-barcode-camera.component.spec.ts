import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAmountBarcodeCameraComponent } from './report-amount-barcode-camera.component';

describe('ReportAmountBarcodeCameraComponent', () => {
  let component: ReportAmountBarcodeCameraComponent;
  let fixture: ComponentFixture<ReportAmountBarcodeCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAmountBarcodeCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAmountBarcodeCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
