import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore6Component } from './hexisstore6.component';

describe('Hexisstore6Component', () => {
  let component: Hexisstore6Component;
  let fixture: ComponentFixture<Hexisstore6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
