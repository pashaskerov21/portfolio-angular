import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About,HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
