import type { ErrorObject } from 'ajv';
import type { AnyUISchemaElement, JsonSchema } from '../models';

export type Translator = {
  (id: string, defaultMessage: string, values?: any): string;
  (id: string, defaultMessage: undefined, values?: any): string | undefined;
  (id: string, defaultMessage?: string, values?: any): string | undefined;
};

export type ErrorTranslator = (
  error: ErrorObject,
  translate: Translator,
  uischema?: AnyUISchemaElement
) => string;

export interface JsonFormsI18nState {
  locale?: string;
  translate?: Translator;
  translateError?: ErrorTranslator;
}

export type i18nJsonSchema = JsonSchema & { i18n?: string };
