import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore5Component } from './hexisstore5.component';

describe('Hexisstore5Component', () => {
  let component: Hexisstore5Component;
  let fixture: ComponentFixture<Hexisstore5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
