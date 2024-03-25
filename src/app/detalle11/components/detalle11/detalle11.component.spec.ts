import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle11Component } from './detalle11.component';

describe('Detalle11Component', () => {
  let component: Detalle11Component;
  let fixture: ComponentFixture<Detalle11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
