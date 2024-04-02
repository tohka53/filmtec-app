import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle5Component } from './sdetalle5.component';

describe('Sdetalle5Component', () => {
  let component: Sdetalle5Component;
  let fixture: ComponentFixture<Sdetalle5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
