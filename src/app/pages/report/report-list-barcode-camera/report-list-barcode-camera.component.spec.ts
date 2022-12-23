import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListBarcodeCameraComponent } from './report-list-barcode-camera.component';

describe('ReportListBarcodeCameraComponent', () => {
  let component: ReportListBarcodeCameraComponent;
  let fixture: ComponentFixture<ReportListBarcodeCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportListBarcodeCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListBarcodeCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
