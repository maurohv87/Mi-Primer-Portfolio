import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArribaComponent } from './button-arriba.component';

describe('ButtonArribaComponent', () => {
  let component: ButtonArribaComponent;
  let fixture: ComponentFixture<ButtonArribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonArribaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
