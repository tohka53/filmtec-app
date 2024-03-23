import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HX20G12BComponent } from './hx20-g12-b.component';

describe('HX20G12BComponent', () => {
  let component: HX20G12BComponent;
  let fixture: ComponentFixture<HX20G12BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HX20G12BComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HX20G12BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
