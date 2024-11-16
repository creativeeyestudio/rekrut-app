import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffrePage } from './offre.page';

describe('OffrePage', () => {
  let component: OffrePage;
  let fixture: ComponentFixture<OffrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
