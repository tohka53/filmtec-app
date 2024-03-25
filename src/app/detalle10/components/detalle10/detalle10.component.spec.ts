import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle10Component } from './detalle10.component';

describe('Detalle10Component', () => {
  let component: Detalle10Component;
  let fixture: ComponentFixture<Detalle10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
