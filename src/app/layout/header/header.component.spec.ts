import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterLink, RouterLinkActive],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title "SisterSmade"', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const titleElement = compiled.querySelector('h1');
    expect(titleElement?.textContent).toContain('SisterSmade');
  });

  it('should contain nav links for expected routes', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const links = compiled.querySelectorAll('a[routerLink]');
    const routerLinks = Array.from(links).map(link => link.getAttribute('routerLink'));

    expect(routerLinks).toEqual(['/', '/community', '/profile']);
  });

  it('should have correctly configured routerLinkActive classes', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const activeLinks = compiled.querySelectorAll('a[routerLinkActive]');

    expect(activeLinks).toBeTruthy();
    expect(activeLinks.length).toBe(3);
    activeLinks.forEach(link => {
      expect(link.getAttribute('routerLinkActive')).toContain('border-b-2 border-white');
    });
  });
});