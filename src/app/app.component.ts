import { Actions, JsonSchema, UISchemaElement } from '@jsonforms/core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { JsonFormsAngularService } from '@jsonforms/angular';

@Component({
  selector: 'app-root',
  template: `<jsonforms-outlet></jsonforms-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private jsonformsService: JsonFormsAngularService, private cdr: ChangeDetectorRef) {
  }

  setJsonFormsInput(
    schema: JsonSchema,
    uiSchema?: UISchemaElement,
    data: any = {}
  ) {
    this.jsonformsService.updateCore(Actions.init(data, schema, uiSchema));
    this.cdr.detectChanges();
  }
}
