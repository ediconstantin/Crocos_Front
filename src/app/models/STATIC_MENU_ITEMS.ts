import { MenuItem } from 'primeng/components/common/menuitem';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'WHAT IS THIS'
  },
  {
    label: 'A',
    items: [
      { label: 'A', routerLink: ['../', 'ch-zones'], routerLinkActiveOptions: { exact: true } },
      { label: 'B' }]
  },
  {
    label: 'B'
  },
  {
    label: 'C'
  },
];
