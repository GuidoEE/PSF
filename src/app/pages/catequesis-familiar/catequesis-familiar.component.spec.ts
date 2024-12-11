import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatequesisFamiliarComponent } from './catequesis-familiar.component';

describe('CatequesisFamiliarComponent', () => {
  let component: CatequesisFamiliarComponent;
  let fixture: ComponentFixture<CatequesisFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatequesisFamiliarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatequesisFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
