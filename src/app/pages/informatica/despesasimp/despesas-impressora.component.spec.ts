import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasImpressoraComponent } from './despesas-impressora.component';

describe('DespesasImpressoraComponent', () => {
  let component: DespesasImpressoraComponent;
  let fixture: ComponentFixture<DespesasImpressoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespesasImpressoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespesasImpressoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
