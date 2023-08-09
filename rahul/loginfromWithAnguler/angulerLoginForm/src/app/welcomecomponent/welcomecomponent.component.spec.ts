import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecomponentComponent } from './welcomecomponent.component';

describe('WelcomecomponentComponent', () => {
  let component: WelcomecomponentComponent;
  let fixture: ComponentFixture<WelcomecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomecomponentComponent]
    });
    fixture = TestBed.createComponent(WelcomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
