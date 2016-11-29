import { NgModule, ModuleWithProviders } from "@angular/core";
import { TableComponent } from './app/components/table/table.component';
import { TableFooterComponent } from './app/components/footer/tablefooter.component';


// for manual imports
export * from './app/components/table/table.component';
export * from './app/components/footer/tablefooter.component';

@NgModule({
  declarations: [
    TableComponent,
    TableFooterComponent
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
