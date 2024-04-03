import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle10Component } from './sdetalle10.component';

describe('Sdetalle10Component', () => {
  let component: Sdetalle10Component;
  let fixture: ComponentFixture<Sdetalle10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
