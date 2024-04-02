import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexishomeComponent } from './hexishome.component';

describe('HexishomeComponent', () => {
  let component: HexishomeComponent;
  let fixture: ComponentFixture<HexishomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexishomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HexishomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
