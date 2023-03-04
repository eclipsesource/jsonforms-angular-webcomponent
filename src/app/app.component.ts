import { createAjv, JsonFormsRendererRegistryEntry } from '@jsonforms/core';
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
import Ajv from 'ajv';

const stringType = typeof "";

@Component({
  selector: 'app-ng-jsonforms',
  template: `<jsonforms-outlet></jsonforms-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [JsonFormsAngularService]
})
export class AppComponent extends JsonForms implements OnChanges, OnInit {

  @Input() override ajv: Ajv = createAjv({
    schemaId: 'id',
    allErrors: true
  });
  @Input() override renderers: JsonFormsRendererRegistryEntry[] = angularMaterialRenderers;

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
    Object.entries(changes).forEach(([prop, entry]) => {
      if (entry.currentValue !== entry.previousValue) {
        let currentValue = entry.currentValue;
        if (typeof(entry.currentValue) === stringType) {
          try {
            currentValue = JSON.parse(entry.currentValue);
            if (prop !== 'ajv') {
              (this as any)[prop] = currentValue;
            }
          }
          catch {
            // ignore if the string cannot be deserialzed
          }
        }
        if (prop === 'ajv') {
          (this as any)[prop] = createAjv(currentValue);
        }
      }
    });
    super.ngOnChanges(changes);
  }

}
