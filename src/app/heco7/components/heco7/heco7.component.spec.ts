import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco7Component } from './heco7.component';

describe('Heco7Component', () => {
  let component: Heco7Component;
  let fixture: ComponentFixture<Heco7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
