import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco6Component } from './heco6.component';

describe('Heco6Component', () => {
  let component: Heco6Component;
  let fixture: ComponentFixture<Heco6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
