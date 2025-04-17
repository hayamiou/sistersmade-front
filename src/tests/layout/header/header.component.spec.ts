import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../../app/layout/header/header.component';
import { provideRouter } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../../app/app.routes';
import {
  getHeading,
  getRouterLinks,
  getRouterLinkActiveElements
} from '../../spec-helpers';

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

  it('should render the title "SistersMade"', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const titleElement = getHeading(compiled);
    expect(titleElement).not.toBeNull();
    expect(titleElement!.textContent).toContain('SistersMade');
  });

  it('should contain nav links for expected routes', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const routerLinks = getRouterLinks(compiled);
    expect(routerLinks).toEqual(['/', '/community', '/profile']);
  });

  it('should have correctly configured routerLinkActive classes', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const activeLinks = getRouterLinkActiveElements(compiled);

    expect(activeLinks.length).toBe(3);
    activeLinks.forEach(link => {
      expect(link.getAttribute('routerLinkActive')).toContain('router-link-active');
    });
  });
});