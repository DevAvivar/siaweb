import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoEmprestimoComponent } from './contrato-emprestimo.component';

describe('ContratoEmprestimoComponent', () => {
  let component: ContratoEmprestimoComponent;
  let fixture: ComponentFixture<ContratoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
