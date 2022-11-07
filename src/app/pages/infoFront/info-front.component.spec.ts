import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFrontComponent } from './info-front.component';

describe('InfoFrontComponent', () => {
  let component: InfoFrontComponent;
  let fixture: ComponentFixture<InfoFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
