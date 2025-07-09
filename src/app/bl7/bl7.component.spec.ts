import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bl7Component } from './bl7.component';

describe('Bl7Component', () => {
  let component: Bl7Component;
  let fixture: ComponentFixture<Bl7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bl7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bl7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
