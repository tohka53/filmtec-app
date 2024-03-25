import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle12Component } from './detalle12.component';

describe('Detalle12Component', () => {
  let component: Detalle12Component;
  let fixture: ComponentFixture<Detalle12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
