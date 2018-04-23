import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGridsterComponent } from './app-gridster.component';

describe('AppGridsterComponent', () => {
  let component: AppGridsterComponent;
  let fixture: ComponentFixture<AppGridsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGridsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGridsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
