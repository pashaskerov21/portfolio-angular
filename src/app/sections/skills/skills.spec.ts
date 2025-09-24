import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills } from './skills';
import { provideZonelessChangeDetection } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills,HttpClientTestingModule],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
