import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct01Component } from './ct01.component';

describe('Ct01Component', () => {
  let component: Ct01Component;
  let fixture: ComponentFixture<Ct01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
