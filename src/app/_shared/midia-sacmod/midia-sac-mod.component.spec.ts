import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiaSacModComponent } from './midia-sac-mod.component';

describe('MidiaSacModComponent', () => {
  let component: MidiaSacModComponent;
  let fixture: ComponentFixture<MidiaSacModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidiaSacModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidiaSacModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
