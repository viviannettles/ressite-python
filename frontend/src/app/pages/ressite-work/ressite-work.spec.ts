import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessiteWork } from './ressite-work';

describe('RessiteWork', () => {
  let component: RessiteWork;
  let fixture: ComponentFixture<RessiteWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessiteWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessiteWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
