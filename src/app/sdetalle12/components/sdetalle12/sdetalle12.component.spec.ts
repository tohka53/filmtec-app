import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle12Component } from './sdetalle12.component';

describe('Sdetalle12Component', () => {
  let component: Sdetalle12Component;
  let fixture: ComponentFixture<Sdetalle12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
