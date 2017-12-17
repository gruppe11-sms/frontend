import {RouterModule, Routes} from '@angular/router';
import {AuditComponent} from './audit/audit.component';
import {AuditResolve} from './audit.resolver';
import {AuditFilterResolver} from './audit-filter.resolver';


export const auditRoutes: Routes = [
  {
    path: '',
    component: AuditComponent,
    data: {
      animation: 'audit',
    },
    resolve: {
      entries: AuditResolve,
      filters: AuditFilterResolver,
    },
  },
];

export const routes = RouterModule.forChild(auditRoutes);
