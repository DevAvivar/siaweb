import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelImpressoraComponent } from './aluguel-impressora.component';

describe('AluguelImpressoraComponent', () => {
  let component: AluguelImpressoraComponent;
  let fixture: ComponentFixture<AluguelImpressoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluguelImpressoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluguelImpressoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
