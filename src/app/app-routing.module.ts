import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './dungeon/pages/catalog/catalog.component';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot([{ path: '', component: CatalogComponent }])],
})
export class AppRoutingModule {}
