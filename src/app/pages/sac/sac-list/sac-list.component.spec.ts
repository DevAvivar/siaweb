import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacListComponent } from './sac-list.component';

describe('SacListComponent', () => {
  let component: SacListComponent;
  let fixture: ComponentFixture<SacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
