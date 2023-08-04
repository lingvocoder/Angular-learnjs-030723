import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';
import {QuestionCanActivateChildGuard} from '../../shared/question-guard/question-can-activate-child.guard';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        canActivateChild: [QuestionCanActivateChildGuard],
        children: [
            {
                path: '',
                redirectTo: 'description',
                pathMatch: 'full',
            },
            {
                path: 'description',
                component: DescriptionComponent,
            },
            {
                path: 'type',
                component: TypeComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
