import { createAjv } from '@jsonforms/core';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';

import { JsonFormsAngularService, JsonForms } from '@jsonforms/angular';
import { angularMaterialRenderers } from '@jsonforms/angular-material';

@Component({
  selector: 'app-ng-jsonforms',
  template: `<jsonforms-outlet></jsonforms-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [JsonFormsAngularService]
})
export class AppComponent extends JsonForms implements OnChanges, OnInit {

  @Input() override ajv = createAjv({
    schemaId: 'id',
    allErrors: true,
    useDefaults: true
  });
  @Input() override renderers = angularMaterialRenderers;

  constructor(
    jsonformsService: JsonFormsAngularService,
    private cdr: ChangeDetectorRef
  ) {
    super(jsonformsService);
  }
  
  override ngOnInit(): void {
    super.ngOnInit();
  }
  
  override ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

}
