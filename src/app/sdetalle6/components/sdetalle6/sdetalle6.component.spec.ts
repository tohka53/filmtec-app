import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle6Component } from './sdetalle6.component';

describe('Sdetalle6Component', () => {
  let component: Sdetalle6Component;
  let fixture: ComponentFixture<Sdetalle6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
