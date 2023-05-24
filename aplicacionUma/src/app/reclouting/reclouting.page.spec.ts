import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecloutingPage } from './reclouting.page';

describe('RecloutingPage', () => {
  let component: RecloutingPage;
  let fixture: ComponentFixture<RecloutingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecloutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
