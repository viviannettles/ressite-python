import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessitePersonal } from './ressite-personal';

describe('RessitePersonal', () => {
  let component: RessitePersonal;
  let fixture: ComponentFixture<RessitePersonal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessitePersonal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessitePersonal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
