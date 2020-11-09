import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {HeaderComponent} from "./container/header.component";
import {SearchComponent} from "../search/search.component";
import {CalendarComponent} from "./ui/calendar/calendar.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    exports: [
        HeaderComponent,
    ],
    declarations: [
        HeaderComponent,
        SearchComponent,
        CalendarComponent,
    ],
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: []
})
export class HeaderModule { }
