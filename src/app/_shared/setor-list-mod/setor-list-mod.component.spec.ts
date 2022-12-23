import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorListModComponent } from './setor-list-mod.component';

describe('SetorListModComponent', () => {
  let component: SetorListModComponent;
  let fixture: ComponentFixture<SetorListModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetorListModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetorListModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
