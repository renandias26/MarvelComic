import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IPages {
  group: string;
  pages: IGroupPage[];
  onlyUserMaster?: boolean;
  feature?: string;
  userRoles?: string[];
}

export interface IGroupPage {
  title: string;
  icon: IconProp;
  path: string;
  role?: string;
}
