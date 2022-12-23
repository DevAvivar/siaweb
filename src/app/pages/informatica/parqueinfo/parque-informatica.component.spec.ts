import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueInformaticaComponent } from './parque-informatica.component';

describe('ParqueInformaticaComponent', () => {
  let component: ParqueInformaticaComponent;
  let fixture: ComponentFixture<ParqueInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueInformaticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParqueInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
