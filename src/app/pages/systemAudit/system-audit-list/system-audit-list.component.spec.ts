import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAuditListComponent } from './system-audit-list.component';

describe('SystemAuditListComponent', () => {
  let component: SystemAuditListComponent;
  let fixture: ComponentFixture<SystemAuditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemAuditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAuditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
