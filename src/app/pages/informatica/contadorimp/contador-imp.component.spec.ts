import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorImpComponent } from './contador-imp.component';

describe('ContadorImpComponent', () => {
  let component: ContadorImpComponent;
  let fixture: ComponentFixture<ContadorImpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorImpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
