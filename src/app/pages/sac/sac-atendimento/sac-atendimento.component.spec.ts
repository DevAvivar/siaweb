import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacAtendimentoComponent } from './sac-atendimento.component';

describe('SacAtendimentoComponent', () => {
  let component: SacAtendimentoComponent;
  let fixture: ComponentFixture<SacAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacAtendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
