import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle7Component } from './sdetalle7.component';

describe('Sdetalle7Component', () => {
  let component: Sdetalle7Component;
  let fixture: ComponentFixture<Sdetalle7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
