import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessiteHome } from './ressite-home';

describe('RessiteHome', () => {
  let component: RessiteHome;
  let fixture: ComponentFixture<RessiteHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessiteHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessiteHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
