import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404 } from './page404';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Page404', () => {
  let component: Page404;
  let fixture: ComponentFixture<Page404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page404],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
