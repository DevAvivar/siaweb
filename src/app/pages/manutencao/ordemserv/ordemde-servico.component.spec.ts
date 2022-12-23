import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemdeServicoComponent } from './ordemde-servico.component';

describe('OrdemdeServicoComponent', () => {
  let component: OrdemdeServicoComponent;
  let fixture: ComponentFixture<OrdemdeServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemdeServicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdemdeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
