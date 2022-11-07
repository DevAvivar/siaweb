import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReadFailureComponent } from './dialog-read-failure.component';

describe('DialogReadFailureComponent', () => {
  let component: DialogReadFailureComponent;
  let fixture: ComponentFixture<DialogReadFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReadFailureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReadFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
