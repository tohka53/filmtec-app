import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexisComponent } from './hexis.component';

describe('HexisComponent', () => {
  let component: HexisComponent;
  let fixture: ComponentFixture<HexisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HexisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
