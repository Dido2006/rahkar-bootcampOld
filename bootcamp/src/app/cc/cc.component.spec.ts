import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcComponent } from './cc.component';

describe('CcComponent', () => {
  let component: CcComponent;
  let fixture: ComponentFixture<CcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
