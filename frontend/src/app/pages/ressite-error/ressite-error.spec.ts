import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessiteError } from './ressite-error';

describe('RessiteError', () => {
  let component: RessiteError;
  let fixture: ComponentFixture<RessiteError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessiteError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessiteError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
