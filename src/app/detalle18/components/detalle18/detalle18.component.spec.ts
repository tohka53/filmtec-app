import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle18Component } from './detalle18.component';

describe('Detalle18Component', () => {
  let component: Detalle18Component;
  let fixture: ComponentFixture<Detalle18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle18Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
