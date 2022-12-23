import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioProdutoMotComponent } from './relatorio-produto-mot.component';

describe('RelatorioProdutoMotComponent', () => {
  let component: RelatorioProdutoMotComponent;
  let fixture: ComponentFixture<RelatorioProdutoMotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioProdutoMotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioProdutoMotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
