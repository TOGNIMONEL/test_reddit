import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreoccupationsComponent } from './preoccupations.component';

describe('PreoccupationsComponent', () => {
  let component: PreoccupationsComponent;
  let fixture: ComponentFixture<PreoccupationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreoccupationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreoccupationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
