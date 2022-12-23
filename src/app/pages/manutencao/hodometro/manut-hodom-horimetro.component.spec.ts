import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutHodomHorimetroComponent } from './manut-hodom-horimetro.component';

describe('ManutHodomHorimetroComponent', () => {
  let component: ManutHodomHorimetroComponent;
  let fixture: ComponentFixture<ManutHodomHorimetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutHodomHorimetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutHodomHorimetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
