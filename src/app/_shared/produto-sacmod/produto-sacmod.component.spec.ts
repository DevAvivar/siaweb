import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSacmodComponent } from './produto-sacmod.component';

describe('ProdutoSacmodComponent', () => {
  let component: ProdutoSacmodComponent;
  let fixture: ComponentFixture<ProdutoSacmodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoSacmodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoSacmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
