/**
 * Returns the first element matching the exact innerText.
 */
export function getByText(container: HTMLElement, text: string): HTMLElement | null {
  return Array.from(container.querySelectorAll('*')).find(el => (el as HTMLElement).textContent?.trim() === text) as HTMLElement | null;
}

/**
 * Returns an element using the data-testid attribute.
 */
export function getByTestId(container: HTMLElement, testId: string): HTMLElement | null {
  return container.querySelector(`[data-testid="${testId}"]`);
}

/**
 * Returns all values of [routerLink] attributes within the container.
 */
export function getRouterLinks(container: HTMLElement): string[] {
  return Array.from(container.querySelectorAll('[routerLink]')).map(el => el.getAttribute('routerLink') || '');
}

/**
 * Returns all elements using the [routerLinkActive] directive.
 */
export function getRouterLinkActiveElements(container: HTMLElement): Element[] {
  return Array.from(container.querySelectorAll('[routerLinkActive]'));
}

/**
 * Checks if a given class is present on an element.
 */
export function hasClass(element: Element, className: string): boolean {
  return element.classList.contains(className);
}

/**
 * Returns the first heading of a given level (h1 by default).
 */
const DEFAULT_HEADING_LEVEL = 1;

export function getHeading(container: HTMLElement, level = DEFAULT_HEADING_LEVEL): HTMLHeadingElement | null {
  return container.querySelector(`h${level}`) as HTMLHeadingElement | null;
}

/**
 * Returns the value of an input field by selector.
 */
export function getInputValue(container: HTMLElement, selector: string): string | null {
  const input = container.querySelector(selector) as HTMLInputElement | null;
  return input?.value || null;
}

/**
 * Simulates a click on a button matching its text content.
 */
export function clickButtonByText(container: HTMLElement, text: string): void {
  const button = getByText(container, text);
  if (button) (button as HTMLButtonElement).click();
}
