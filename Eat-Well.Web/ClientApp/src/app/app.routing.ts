import { Routes, RouterModule } from "@angular/router";

import { SiteLayoutComponent } from "./_layout/site-layout/site-layout.component";
import { AdminLayoutComponent } from "./_layout/admin-layout/admin-layout.component";

import { LoginComponent } from "./shared/login/login.component";
import { RegisterComponent } from "./shared/register/register.component";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";

import { DashboardComponent } from "./admin/dashboard/dashboard.component";
import { UserAdminComponent } from "./admin/user-admin/user-admin.component";
import { ProductAdminComponent } from "./admin/product-admin/product-admin.component";
import { OrderUserComponent } from "./order-user/order-user.component";
import { OrderAdminComponent } from "./admin/order-admin/order-admin.component";

const appRoutes: Routes = [
  //Site routes goes here
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "about", component: AboutComponent },

      { path: "category/:id", component: CategoryDetailComponent },
      { path: "product/:id", component: ProductDetailComponent },
      { path: "cart", component: CartComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "user/:id/order-history", component: OrderUserComponent },
    ],
  },

  // App routes goes here here
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "user", component: UserAdminComponent },
      { path: "product", component: ProductAdminComponent },
      { path: "order", component: OrderAdminComponent },
    ],
  },

  //no layout routes

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

export const routing = RouterModule.forRoot(appRoutes);