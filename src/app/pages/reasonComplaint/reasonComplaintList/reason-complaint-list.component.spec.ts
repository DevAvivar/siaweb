import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonComplaintListComponent } from './reason-complaint-list.component';

describe('ReasonComplaintListComponent', () => {
  let component: ReasonComplaintListComponent;
  let fixture: ComponentFixture<ReasonComplaintListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonComplaintListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonComplaintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
