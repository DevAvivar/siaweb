import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportContaImpressoraComponent } from './import-conta-impressora.component';

describe('ImportContaImpressoraComponent', () => {
  let component: ImportContaImpressoraComponent;
  let fixture: ComponentFixture<ImportContaImpressoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportContaImpressoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportContaImpressoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
