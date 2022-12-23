import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoporImpComponent } from './precopor-imp.component';

describe('PrecoporImpComponent', () => {
  let component: PrecoporImpComponent;
  let fixture: ComponentFixture<PrecoporImpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecoporImpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecoporImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
