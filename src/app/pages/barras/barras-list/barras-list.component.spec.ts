import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasListComponent } from './barras-list.component';

describe('BarrasListComponent', () => {
  let component: BarrasListComponent;
  let fixture: ComponentFixture<BarrasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
