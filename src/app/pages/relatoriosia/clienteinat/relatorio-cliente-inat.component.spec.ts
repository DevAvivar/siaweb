import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioClienteInatComponent } from './relatorio-cliente-inat.component';

describe('RelatorioClienteInatComponent', () => {
  let component: RelatorioClienteInatComponent;
  let fixture: ComponentFixture<RelatorioClienteInatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioClienteInatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioClienteInatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
