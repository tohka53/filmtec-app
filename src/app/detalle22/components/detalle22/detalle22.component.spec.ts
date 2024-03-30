import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle22Component } from './detalle22.component';

describe('Detalle22Component', () => {
  let component: Detalle22Component;
  let fixture: ComponentFixture<Detalle22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
