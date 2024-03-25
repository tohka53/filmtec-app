import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle17Component } from './detalle17.component';

describe('Detalle17Component', () => {
  let component: Detalle17Component;
  let fixture: ComponentFixture<Detalle17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
