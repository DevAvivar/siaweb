import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoEquipamentoComponent } from './emprestimo-equipamento.component';

describe('EmprestimoEquipamentoComponent', () => {
  let component: EmprestimoEquipamentoComponent;
  let fixture: ComponentFixture<EmprestimoEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoEquipamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
