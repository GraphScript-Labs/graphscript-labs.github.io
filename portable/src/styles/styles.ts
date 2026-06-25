// AUTO GENERATED FILE - DO NOT EDIT

const classNames = {
  'audience-infolets': 'audience-infolets',
  'clickable': 'clickable',
  'dark': 'dark',
  'ecosystem-textlets': 'ecosystem-textlets',
  'error-code': 'error-code',
  'error-container': 'error-container',
  'error-content': 'error-content',
  'error-heading': 'error-heading',
  'error-image': 'error-image',
  'error-message': 'error-message',
  'error-meta': 'error-meta',
  'footer': 'footer',
  'footer-content': 'footer-content',
  'heading-large': 'heading-large',
  'heading-max': 'heading-max',
  'heading-medium': 'heading-medium',
  'heading-small': 'heading-small',
  'hero': 'hero',
  'hero-background': 'hero-background',
  'hero-brand': 'hero-brand',
  'hero-content': 'hero-content',
  'hero-image': 'hero-image',
  'hero-subtitle': 'hero-subtitle',
  'infolet': 'infolet',
  'infolet-content': 'infolet-content',
  'infolet-icon': 'infolet-icon',
  'infolet-icon-container': 'infolet-icon-container',
  'jump-linklets': 'jump-linklets',
  'limit-width': 'limit-width',
  'line-break': 'line-break',
  'linklet': 'linklet',
  'linklet-content': 'linklet-content',
  'linklet-hover': 'linklet-hover',
  'linklet-hover-icon': 'linklet-hover-icon',
  'linklet-hover-url': 'linklet-hover-url',
  'linklet-icon': 'linklet-icon',
  'linklet-icon-container': 'linklet-icon-container',
  'linklet-ref': 'linklet-ref',
  'linklet-ref-icon': 'linklet-ref-icon',
  'linklet-url': 'linklet-url',
  'menu': 'menu',
  'menu-bottom-left': 'menu-bottom-left',
  'menu-bottom-right': 'menu-bottom-right',
  'menu-brand': 'menu-brand',
  'menu-brand-container': 'menu-brand-container',
  'menu-brand-image': 'menu-brand-image',
  'menu-button': 'menu-button',
  'menu-container': 'menu-container',
  'menu-top-left': 'menu-top-left',
  'menu-top-right': 'menu-top-right',
  'node-bg': 'node-bg',
  'node-bg-node': 'node-bg-node',
  'parallax': 'parallax',
  'scrollpop': 'scrollpop',
  'section': 'section',
  'section-content': 'section-content',
  'socials-linklets': 'socials-linklets',
  'text': 'text',
  'textlet': 'textlet',
  'textlet-content': 'textlet-content',
  'textlet-icon': 'textlet-icon',
  'textlet-title': 'textlet-title',
  'theme-bubble': 'theme-bubble'
} as const;

export type ClassName = (keyof typeof classNames);
export type PossibleClassName = ClassName | false | null | undefined;

export function useClasses(...args: PossibleClassName[]): string {
  const validClass = (arg: PossibleClassName) => !!(arg && arg in classNames);
  const validClasses = args.filter(validClass) as ClassName[];
  return validClasses.map(arg => classNames[arg]).join(' ');
}

