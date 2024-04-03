import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco10Component } from './heco10.component';

describe('Heco10Component', () => {
  let component: Heco10Component;
  let fixture: ComponentFixture<Heco10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
