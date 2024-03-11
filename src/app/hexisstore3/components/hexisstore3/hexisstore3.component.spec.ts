import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore3Component } from './hexisstore3.component';

describe('Hexisstore3Component', () => {
  let component: Hexisstore3Component;
  let fixture: ComponentFixture<Hexisstore3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
