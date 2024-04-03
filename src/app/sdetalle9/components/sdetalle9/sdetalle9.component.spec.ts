import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle9Component } from './sdetalle9.component';

describe('Sdetalle9Component', () => {
  let component: Sdetalle9Component;
  let fixture: ComponentFixture<Sdetalle9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
