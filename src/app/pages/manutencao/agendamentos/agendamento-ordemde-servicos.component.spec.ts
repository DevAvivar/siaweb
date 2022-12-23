import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoOrdemdeServicosComponent } from './agendamento-ordemde-servicos.component';

describe('AgendamentoOrdemdeServicosComponent', () => {
  let component: AgendamentoOrdemdeServicosComponent;
  let fixture: ComponentFixture<AgendamentoOrdemdeServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoOrdemdeServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoOrdemdeServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
