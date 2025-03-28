import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountSectionComponent } from './count-section.component';

describe('CountSectionComponent', () => {
  let component: CountSectionComponent;
  let fixture: ComponentFixture<CountSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountSectionComponent]
    });
    fixture = TestBed.createComponent(CountSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
