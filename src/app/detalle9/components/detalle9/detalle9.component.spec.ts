import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle9Component } from './detalle9.component';

describe('Detalle9Component', () => {
  let component: Detalle9Component;
  let fixture: ComponentFixture<Detalle9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
