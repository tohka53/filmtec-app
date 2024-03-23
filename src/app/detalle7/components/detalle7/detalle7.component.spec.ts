import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle7Component } from './detalle7.component';

describe('Detalle7Component', () => {
  let component: Detalle7Component;
  let fixture: ComponentFixture<Detalle7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
