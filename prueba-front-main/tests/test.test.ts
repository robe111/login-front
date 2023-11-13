import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '../src/app/components/login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title and the "username"', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain(
      'Prueba técnica'
    );
    expect(component.title).toEqual('Login');
  });

  it('login parameters should work', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    expect(component.validateEmail('robertopclase@gmail.com')).toBe(true);
    expect(component.validateEmail('1234abc')).toBe(false);
    expect(component.validatePass('Contraseña')).toBe(true);
    expect(component.validatePass('Con')).toBe(false);
  });
});
