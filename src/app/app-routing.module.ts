import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: 'todo',
        loadChildren: './todo/todo.module#TodoModule'
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                useHash: false,
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
