// AUTO GENERATED FILE - DO NOT EDIT

const classNames = {
  'audience-infolets': 'audience-infolets',
  'ecosystem-textlets': 'ecosystem-textlets',
  'footer': 'footer',
  'footer-content': 'footer-content',
  'hero': 'hero',
  'hero-background': 'hero-background',
  'hero-content': 'hero-content',
  'hero-brand': 'hero-brand',
  'hero-subtitle': 'hero-subtitle',
  'hero-image': 'hero-image',
  'jump-linklets': 'jump-linklets',
  'socials-linklets': 'socials-linklets',
  'infolet': 'infolet',
  'infolet-icon-container': 'infolet-icon-container',
  'infolet-icon': 'infolet-icon',
  'infolet-content': 'infolet-content',
  'linklet': 'linklet',
  'linklet-icon-container': 'linklet-icon-container',
  'linklet-icon': 'linklet-icon',
  'linklet-content': 'linklet-content',
  'linklet-ref': 'linklet-ref',
  'linklet-ref-icon': 'linklet-ref-icon',
  'linklet-url': 'linklet-url',
  'linklet-hover': 'linklet-hover',
  'linklet-hover-icon': 'linklet-hover-icon',
  'linklet-hover-url': 'linklet-hover-url',
  'scrollpop': 'scrollpop',
  'section': 'section',
  'section-content': 'section-content',
  'textlet': 'textlet',
  'textlet-title': 'textlet-title',
  'textlet-icon': 'textlet-icon',
  'textlet-content': 'textlet-content',
  'clickable': 'clickable',
  'limit-width': 'limit-width',
  'node-bg': 'node-bg',
  'node-bg-node': 'node-bg-node',
  'text': 'text',
  'heading-max': 'heading-max',
  'heading-large': 'heading-large',
  'heading-medium': 'heading-medium',
  'heading-small': 'heading-small',
  'line-break': 'line-break'
} as const;

export type ClassName = (keyof typeof classNames);
export type PossibleClassName = ClassName | false | null | undefined;

export function useClasses(...args: PossibleClassName[]): string {
  const validClass = (arg: PossibleClassName) => !!(arg && arg in classNames);
  const validClasses = args.filter(validClass) as ClassName[];
  return validClasses.map(arg => classNames[arg]).join(' ');
}

