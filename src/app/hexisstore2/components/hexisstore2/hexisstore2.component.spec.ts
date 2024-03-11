import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexisstore2Component } from './hexisstore2.component';

describe('Hexisstore2Component', () => {
  let component: Hexisstore2Component;
  let fixture: ComponentFixture<Hexisstore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hexisstore2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hexisstore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
