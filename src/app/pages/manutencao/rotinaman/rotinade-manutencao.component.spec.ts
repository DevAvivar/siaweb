import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotinadeManutencaoComponent } from './rotinade-manutencao.component';

describe('RotinadeManutencaoComponent', () => {
  let component: RotinadeManutencaoComponent;
  let fixture: ComponentFixture<RotinadeManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotinadeManutencaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotinadeManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
