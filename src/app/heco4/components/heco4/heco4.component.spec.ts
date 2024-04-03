import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco4Component } from './heco4.component';

describe('Heco4Component', () => {
  let component: Heco4Component;
  let fixture: ComponentFixture<Heco4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
