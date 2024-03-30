import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalle19Component } from './detalle19.component';

describe('Detalle19Component', () => {
  let component: Detalle19Component;
  let fixture: ComponentFixture<Detalle19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detalle19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detalle19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
