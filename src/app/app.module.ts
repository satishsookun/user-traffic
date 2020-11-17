import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from "./core/sidebar/sidebar.module";
import {HeaderModule} from "./core/header/header.module";
import {NgxEchartsModule} from "ngx-echarts";
import * as echarts from 'echarts';
import {GraphComponent} from "./features/graph/container/graph.component";
import {MouseEventDirective} from "./shared/directive/mouse-event.directive";
import {VisitorsCountService} from "./shared/services/visitors-count.service";

@NgModule({
    declarations: [
        AppComponent,
        GraphComponent,
        MouseEventDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SidebarModule,
        HeaderModule,
        NgxEchartsModule.forRoot({
            echarts,
        }),
    ],
    providers: [
        VisitorsCountService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
