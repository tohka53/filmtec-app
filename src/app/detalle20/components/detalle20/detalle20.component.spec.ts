import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle20Component } from './detalle20.component';

describe('Detalle20Component', () => {
  let component: Detalle20Component;
  let fixture: ComponentFixture<Detalle20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
