import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMecanicoComponent } from './cadastro-mecanico.component';

describe('CadastroMecanicoComponent', () => {
  let component: CadastroMecanicoComponent;
  let fixture: ComponentFixture<CadastroMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroMecanicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
