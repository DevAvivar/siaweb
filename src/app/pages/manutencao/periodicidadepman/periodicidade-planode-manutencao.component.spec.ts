import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicidadePlanodeManutencaoComponent } from './periodicidade-planode-manutencao.component';

describe('PeriodicidadePlanodeManutencaoComponent', () => {
  let component: PeriodicidadePlanodeManutencaoComponent;
  let fixture: ComponentFixture<PeriodicidadePlanodeManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicidadePlanodeManutencaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicidadePlanodeManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
