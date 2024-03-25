import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle14Component } from './detalle14.component';

describe('Detalle14Component', () => {
  let component: Detalle14Component;
  let fixture: ComponentFixture<Detalle14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
