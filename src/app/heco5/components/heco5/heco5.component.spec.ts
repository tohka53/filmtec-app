import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco5Component } from './heco5.component';

describe('Heco5Component', () => {
  let component: Heco5Component;
  let fixture: ComponentFixture<Heco5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
