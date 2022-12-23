import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMotivoRecComponent } from './relatorio-motivo-rec.component';

describe('RelatorioMotivoRecComponent', () => {
  let component: RelatorioMotivoRecComponent;
  let fixture: ComponentFixture<RelatorioMotivoRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMotivoRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioMotivoRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
