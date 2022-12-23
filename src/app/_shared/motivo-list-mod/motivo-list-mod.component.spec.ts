import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivoListModComponent } from './motivo-list-mod.component';

describe('MotivoListModComponent', () => {
  let component: MotivoListModComponent;
  let fixture: ComponentFixture<MotivoListModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivoListModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivoListModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
