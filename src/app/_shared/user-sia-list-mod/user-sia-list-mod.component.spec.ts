import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSiaListModComponent } from './user-sia-list-mod.component';

describe('UserSiaListModComponent', () => {
  let component: UserSiaListModComponent;
  let fixture: ComponentFixture<UserSiaListModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSiaListModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSiaListModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
