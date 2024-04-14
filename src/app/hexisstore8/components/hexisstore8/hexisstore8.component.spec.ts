import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore8Component } from './hexisstore8.component';

describe('Hexisstore8Component', () => {
  let component: Hexisstore8Component;
  let fixture: ComponentFixture<Hexisstore8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
