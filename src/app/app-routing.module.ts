import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test-component/test.component';

const routes: Routes = [
    {
        path: '',
        component: TestComponent
    }, {
        path: ':currentPage',
        component: TestComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
