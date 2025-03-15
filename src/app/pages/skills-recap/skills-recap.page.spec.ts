import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsRecapPage } from './skills-recap.page';

describe('SkillsRecapPage', () => {
  let component: SkillsRecapPage;
  let fixture: ComponentFixture<SkillsRecapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsRecapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
