import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle3Component } from './sdetalle3.component';

describe('Sdetalle3Component', () => {
  let component: Sdetalle3Component;
  let fixture: ComponentFixture<Sdetalle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
