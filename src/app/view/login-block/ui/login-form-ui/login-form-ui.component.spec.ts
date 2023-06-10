import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormUiComponent } from './login-form-ui.component';

describe('LoginFormUiComponent', () => {
  let component: LoginFormUiComponent;
  let fixture: ComponentFixture<LoginFormUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormUiComponent]
    });
    fixture = TestBed.createComponent(LoginFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
