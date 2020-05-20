import { JsonFormsState, jsonformsReducer } from '@jsonforms/core';
import { Reducer, combineReducers } from 'redux';

import { angularMaterialRenderers } from '@jsonforms/angular-material';

export const rootReducer: Reducer<JsonFormsState> = combineReducers({
  jsonforms: jsonformsReducer()
});

export const initialState = {
  jsonforms: {
    renderers: angularMaterialRenderers
  }
};
