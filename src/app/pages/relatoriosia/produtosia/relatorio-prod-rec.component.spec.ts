import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioProdRecComponent } from './relatorio-prod-rec.component';

describe('RelatorioProdRecComponent', () => {
  let component: RelatorioProdRecComponent;
  let fixture: ComponentFixture<RelatorioProdRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioProdRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioProdRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
