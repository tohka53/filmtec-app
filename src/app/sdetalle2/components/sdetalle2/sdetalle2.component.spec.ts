import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle2Component } from './sdetalle2.component';

describe('Sdetalle2Component', () => {
  let component: Sdetalle2Component;
  let fixture: ComponentFixture<Sdetalle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
