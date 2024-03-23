import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle3Component } from './detalle3.component';

describe('Detalle3Component', () => {
  let component: Detalle3Component;
  let fixture: ComponentFixture<Detalle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
