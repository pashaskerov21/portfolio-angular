import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIcons } from './social-icons';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SocialIcons', () => {
  let component: SocialIcons;
  let fixture: ComponentFixture<SocialIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialIcons, HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
