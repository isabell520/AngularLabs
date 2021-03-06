import { RouterModule } from '@angular/router';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AjaxPeopleListComponent } from './ajax/ajax-people-list.component';
import { PeopleListComponent } from './composition/people-list.component';
import { ObservableComponent } from './observable/observable.component';

const solutionsRoutes = [
  {path:"solutions/builtInDirectives", component: BuiltInDirectivesComponent},
  {path:"solutions/ajax", component: AjaxPeopleListComponent},
  {path:"solutions/forms", component: FormsDemoComponent},
  {path:"solutions/composition", component: PeopleListComponent},
  {path:"solutions/observable", component: ObservableComponent},
];
export const solutionsRouter = RouterModule.forChild(solutionsRoutes);