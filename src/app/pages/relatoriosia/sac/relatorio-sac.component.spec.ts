import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioSacComponent } from './relatorio-sac.component';

describe('RelatorioSacComponent', () => {
  let component: RelatorioSacComponent;
  let fixture: ComponentFixture<RelatorioSacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioSacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioSacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
