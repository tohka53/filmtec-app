import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle21Component } from './detalle21.component';

describe('Detalle21Component', () => {
  let component: Detalle21Component;
  let fixture: ComponentFixture<Detalle21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
