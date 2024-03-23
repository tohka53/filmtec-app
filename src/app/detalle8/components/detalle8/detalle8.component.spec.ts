import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle8Component } from './detalle8.component';

describe('Detalle8Component', () => {
  let component: Detalle8Component;
  let fixture: ComponentFixture<Detalle8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
