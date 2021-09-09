import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajeroComponent } from './cajero/cajero.component';

const routes: Routes = [
    {
        path: 'cajero',
        component: CajeroComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./cajero/display/display-routing.module').then(m => m.DisplayRoutingModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
