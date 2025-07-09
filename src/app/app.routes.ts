import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import SettingComponent from './setting/setting.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebSettingComponent } from './web-setting/web-setting.component';
import { MobileSettingComponent } from './mobile-setting/mobile-setting.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent, title: "Home page" },


    { path: "about", loadComponent: () => import('./about/about.component').then(c => c.AboutComponent), title: "About page" },
    { path: "products", loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent), title: "Products page" },

    { path: "details/:id", component: DetailsComponent },
    {
        path: "setting", component: SettingComponent, title: "Setting page", children: [
            { path: "web", component: WebSettingComponent },
            { path: "mobile", component: MobileSettingComponent }
        ]
    },


    { path: "**", component: NotFoundComponent, title: "NotFound page" }

];
