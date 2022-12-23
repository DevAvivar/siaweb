import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioClientePosComponent } from './relatorio-cliente-pos.component';

describe('RelatorioClientePosComponent', () => {
  let component: RelatorioClientePosComponent;
  let fixture: ComponentFixture<RelatorioClientePosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioClientePosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioClientePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
