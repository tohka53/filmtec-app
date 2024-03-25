import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle13Component } from './detalle13.component';

describe('Detalle13Component', () => {
  let component: Detalle13Component;
  let fixture: ComponentFixture<Detalle13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
