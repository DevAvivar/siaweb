import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdListModComponent } from './prod-list-mod.component';

describe('ProdListModComponent', () => {
  let component: ProdListModComponent;
  let fixture: ComponentFixture<ProdListModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdListModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdListModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
