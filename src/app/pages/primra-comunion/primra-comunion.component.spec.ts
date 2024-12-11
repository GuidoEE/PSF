import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimraComunionComponent } from './primra-comunion.component';

describe('PrimraComunionComponent', () => {
  let component: PrimraComunionComponent;
  let fixture: ComponentFixture<PrimraComunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimraComunionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimraComunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
