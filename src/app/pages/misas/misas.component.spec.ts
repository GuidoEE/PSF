import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisasComponent } from './misas.component';

describe('MisasComponent', () => {
  let component: MisasComponent;
  let fixture: ComponentFixture<MisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
