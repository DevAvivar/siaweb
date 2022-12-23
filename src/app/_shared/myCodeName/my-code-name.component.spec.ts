import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCodeNameComponent } from './my-code-name.component';

describe('MyCodeNameComponent', () => {
  let component: MyCodeNameComponent;
  let fixture: ComponentFixture<MyCodeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCodeNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCodeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
