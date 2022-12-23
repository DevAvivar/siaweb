import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSiaListComponent } from './user-sia-list.component';

describe('UserSiaListComponent', () => {
  let component: UserSiaListComponent;
  let fixture: ComponentFixture<UserSiaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSiaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
