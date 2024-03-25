import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle16Component } from './detalle16.component';

describe('Detalle16Component', () => {
  let component: Detalle16Component;
  let fixture: ComponentFixture<Detalle16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
