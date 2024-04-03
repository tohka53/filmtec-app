import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle11Component } from './sdetalle11.component';

describe('Sdetalle11Component', () => {
  let component: Sdetalle11Component;
  let fixture: ComponentFixture<Sdetalle11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
