import { NgModule, ModuleWithProviders } from "@angular/core";
import { TableComponent } from './app/components/table/table.component';
import { FooterComponent } from './app/components/footer/footer.component';


// for manual imports
export * from './app/components/table/table.component';
export * from './app/components/footer/footer.component';

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
