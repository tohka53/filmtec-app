import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suntekstore1Component } from './suntekstore1.component';

describe('Suntekstore1Component', () => {
  let component: Suntekstore1Component;
  let fixture: ComponentFixture<Suntekstore1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Suntekstore1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Suntekstore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
