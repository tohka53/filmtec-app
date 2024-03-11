import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore4Component } from './hexisstore4.component';

describe('Hexisstore4Component', () => {
  let component: Hexisstore4Component;
  let fixture: ComponentFixture<Hexisstore4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
