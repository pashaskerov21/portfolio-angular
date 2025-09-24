import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preloader } from './preloader';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Preloader', () => {
  let component: Preloader;
  let fixture: ComponentFixture<Preloader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preloader],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preloader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
