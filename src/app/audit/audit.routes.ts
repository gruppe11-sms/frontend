import {RouterModule, Routes} from "@angular/router";
import {AuditComponent} from "./audit/audit.component";


export const auditRoutes: Routes = [
  {
    path: '',
    component: AuditComponent,
  }
];

export const routes = RouterModule.forChild(auditRoutes);
