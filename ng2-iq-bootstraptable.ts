import { NgModule, ModuleWithProviders } from "@angular/core";
import { TableComponent } from './src/app/components/table/table.component';
import { FooterComponent } from './src/app/components/footer/footer.component';


// for manual imports
export * from './src/app/components/table/table.component';
export * from './src/app/components/footer/footer.component';

@NgModule({
  declarations: [
    TableComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    TableComponent
  ]
})
export class BootstrapTableModule {

  /* optional: in case you need users to override your providers */
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: BootstrapTableModule,
      providers: configuredProviders
    };
  }
}
