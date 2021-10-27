import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainscreenComponent } from './mainscreen.component';

describe('MainscreenComponent', () => {
  let component: MainscreenComponent;
  let fixture: ComponentFixture<MainscreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
