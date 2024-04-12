import {faCog} from '@fortawesome/free-solid-svg-icons';
import { IPages } from '../interfaces/pages';

export const SETTINGS: IPages[] = [
  {
    group: '',
    pages: [
      {
        icon: faCog,
        title: 'menu.settings',
        path: 'settings',
      }
    ]
  },
];
