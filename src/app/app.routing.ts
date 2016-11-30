import { TodoAppComponent } from './todo-app/todo-app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 
export const AppRoutes: any = [
    { path: "", component: TodoAppComponent },
    { path: "about", component: AboutComponent },
    { path: "home", component: HomeComponent }
];
 
export const AppComponents: any = [
    HomeComponent,
    AboutComponent,
    TodoAppComponent
];