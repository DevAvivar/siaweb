import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioClienteReaComponent } from './relatorio-cliente-rea.component';

describe('RelatorioClienteReaComponent', () => {
  let component: RelatorioClienteReaComponent;
  let fixture: ComponentFixture<RelatorioClienteReaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioClienteReaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioClienteReaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
