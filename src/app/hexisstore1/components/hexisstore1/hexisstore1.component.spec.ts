import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore1Component } from './hexisstore1.component';

describe('Hexisstore1Component', () => {
  let component: Hexisstore1Component;
  let fixture: ComponentFixture<Hexisstore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
