import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HX20G04SComponent } from './hx20-g04-s.component';

describe('HX20G04SComponent', () => {
  let component: HX20G04SComponent;
  let fixture: ComponentFixture<HX20G04SComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HX20G04SComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HX20G04SComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
