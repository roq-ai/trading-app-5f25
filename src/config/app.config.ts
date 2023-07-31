interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Trader'],
  tenantName: 'Organization',
  applicationName: 'trading app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
