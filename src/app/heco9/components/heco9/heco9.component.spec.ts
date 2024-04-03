import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco9Component } from './heco9.component';

describe('Heco9Component', () => {
  let component: Heco9Component;
  let fixture: ComponentFixture<Heco9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
