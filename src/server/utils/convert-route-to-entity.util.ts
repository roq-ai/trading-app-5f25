const mapping: Record<string, string> = {
  organizations: 'organization',
  stocks: 'stock',
  strategies: 'strategy',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
