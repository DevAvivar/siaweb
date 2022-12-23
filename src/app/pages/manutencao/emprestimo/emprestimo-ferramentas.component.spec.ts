import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoFerramentasComponent } from './emprestimo-ferramentas.component';

describe('EmprestimoFerramentasComponent', () => {
  let component: EmprestimoFerramentasComponent;
  let fixture: ComponentFixture<EmprestimoFerramentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmprestimoFerramentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmprestimoFerramentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
