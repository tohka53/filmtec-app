import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle15Component } from './detalle15.component';

describe('Detalle15Component', () => {
  let component: Detalle15Component;
  let fixture: ComponentFixture<Detalle15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
