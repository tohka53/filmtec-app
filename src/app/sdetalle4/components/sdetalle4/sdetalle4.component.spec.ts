import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle4Component } from './sdetalle4.component';

describe('Sdetalle4Component', () => {
  let component: Sdetalle4Component;
  let fixture: ComponentFixture<Sdetalle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
