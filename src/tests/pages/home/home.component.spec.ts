import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '../../../app/pages/home/home.component';
import { ActivatedRoute } from '@angular/router';
import { getHeading } from '../../spec-helpers';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent], // standalone component
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {},
              queryParams: {}
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main title "SistersMade"', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const titleElement = getHeading(compiled);
    expect(titleElement).not.toBeNull();
    expect(titleElement!.textContent).toContain('SistersMade');
  });

  it('should contain a CTA link with the text "Rejoins-nous !"', () => {
    const compiled: HTMLElement = fixture.nativeElement;
    const link = compiled.querySelector('.hero-cta a');
    expect(link).not.toBeNull();
    expect(link!.textContent).toContain('Rejoins-nous !');
    expect(link!.tagName).toBe('A');
  });
});
