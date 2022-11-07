import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditRegisterComponent } from './system-audit-register.component';

describe('SystemAuditRegisterComponent', () => {
  let component: SystemAuditRegisterComponent;
  let fixture: ComponentFixture<SystemAuditRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAuditRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
