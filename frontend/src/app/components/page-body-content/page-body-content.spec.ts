import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBodyContent } from './page-body-content';

describe('PageBodyContent', () => {
  let component: PageBodyContent;
  let fixture: ComponentFixture<PageBodyContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBodyContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBodyContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
