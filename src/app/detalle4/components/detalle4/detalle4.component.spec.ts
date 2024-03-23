import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle4Component } from './detalle4.component';

describe('Detalle4Component', () => {
  let component: Detalle4Component;
  let fixture: ComponentFixture<Detalle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
