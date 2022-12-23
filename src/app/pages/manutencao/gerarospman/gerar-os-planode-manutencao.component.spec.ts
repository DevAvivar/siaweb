import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarOsPlanodeManutencaoComponent } from './gerar-os-planode-manutencao.component';

describe('GerarOsPlanodeManutencaoComponent', () => {
  let component: GerarOsPlanodeManutencaoComponent;
  let fixture: ComponentFixture<GerarOsPlanodeManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarOsPlanodeManutencaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerarOsPlanodeManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
