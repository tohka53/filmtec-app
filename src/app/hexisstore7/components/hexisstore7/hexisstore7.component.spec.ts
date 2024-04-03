import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore7Component } from './hexisstore7.component';

describe('Hexisstore7Component', () => {
  let component: Hexisstore7Component;
  let fixture: ComponentFixture<Hexisstore7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
