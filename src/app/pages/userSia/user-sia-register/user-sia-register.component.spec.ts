import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSiaRegisterComponent } from './user-sia-register.component';

describe('UserSiaRegisterComponent', () => {
  let component: UserSiaRegisterComponent;
  let fixture: ComponentFixture<UserSiaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSiaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSiaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
