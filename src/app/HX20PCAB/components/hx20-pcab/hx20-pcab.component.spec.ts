import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HX20PCABComponent } from './hx20-pcab.component';

describe('HX20PCABComponent', () => {
  let component: HX20PCABComponent;
  let fixture: ComponentFixture<HX20PCABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HX20PCABComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HX20PCABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
