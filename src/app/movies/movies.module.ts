import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { AbilitiesWrapComponent } from './components/abilities/abilities-wrap/abilities-wrap.component';
import { StaffComponent } from './components/staff/staff.component';

@NgModule({
    imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDialogModule, MatButtonModule, FormsModule],
    declarations: [CatalogComponent, CardComponent, ModalComponent, HeaderComponent, FooterComponent, AbilitiesComponent, AbilitiesWrapComponent, StaffComponent],
})
export class MoviesModule {}
