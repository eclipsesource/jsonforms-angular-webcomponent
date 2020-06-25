import { Actions } from '@jsonforms/core';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

import { JsonFormsAngularService } from '@jsonforms/angular';

@Component({
  selector: 'ng-jsonforms',
  template: `<jsonforms-outlet></jsonforms-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnChanges {
  @Input() uischema: string;
  @Input() schema: string;
  @Input() data: string;

  constructor(
    private jsonformsService: JsonFormsAngularService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const dataObject = this.data ? JSON.parse(this.data) : undefined;
    const schemaObject = this.schema ? JSON.parse(this.schema) : undefined;
    const uiSchemaObject = this.uischema
      ? JSON.parse(this.uischema)
      : undefined;
    this.jsonformsService.updateCore(
      Actions.init(dataObject, schemaObject, uiSchemaObject)
    );
    this.cdr.detectChanges();
  }
}
