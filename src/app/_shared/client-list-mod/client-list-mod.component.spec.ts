import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListModComponent } from './client-list-mod.component';

describe('ClientListModComponent', () => {
  let component: ClientListModComponent;
  let fixture: ComponentFixture<ClientListModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientListModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientListModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
