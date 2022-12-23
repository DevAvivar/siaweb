import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanodeManutencaoComponent } from './planode-manutencao.component';

describe('PlanodeManutencaoComponent', () => {
  let component: PlanodeManutencaoComponent;
  let fixture: ComponentFixture<PlanodeManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanodeManutencaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanodeManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
