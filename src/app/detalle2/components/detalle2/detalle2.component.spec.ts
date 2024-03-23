import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle2Component } from './detalle2.component';

describe('Detalle2Component', () => {
  let component: Detalle2Component;
  let fixture: ComponentFixture<Detalle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
