import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle8Component } from './sdetalle8.component';

describe('Sdetalle8Component', () => {
  let component: Sdetalle8Component;
  let fixture: ComponentFixture<Sdetalle8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
