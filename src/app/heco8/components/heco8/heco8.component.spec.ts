import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco8Component } from './heco8.component';

describe('Heco8Component', () => {
  let component: Heco8Component;
  let fixture: ComponentFixture<Heco8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
