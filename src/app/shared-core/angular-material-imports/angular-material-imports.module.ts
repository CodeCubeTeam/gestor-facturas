import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatCardModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatGridListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule,
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatTableModule,
            MatCardModule,
            CdkTableModule
          ],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatGridListModule,
            MatSidenavModule,
            MatIconModule,
            MatToolbarModule,
            MatListModule,
            FlexLayoutModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatTableModule,
            MatCardModule,
            CdkTableModule
          ]
})
export class AngularMaterialImportsModule {}
