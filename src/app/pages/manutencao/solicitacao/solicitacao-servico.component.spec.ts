import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoServicoComponent } from './solicitacao-servico.component';

describe('SolicitacaoServicoComponent', () => {
  let component: SolicitacaoServicoComponent;
  let fixture: ComponentFixture<SolicitacaoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
