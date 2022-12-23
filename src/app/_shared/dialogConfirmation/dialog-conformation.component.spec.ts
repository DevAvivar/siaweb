import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConformationComponent } from './dialog-conformation.component';

describe('DialogConformationComponent', () => {
  let component: DialogConformationComponent;
  let fixture: ComponentFixture<DialogConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
