import type { ALLOWED_TYPES, FORMS, RANDOM } from "../constants";

export type NumberType = typeof ALLOWED_TYPES[number];
export type FormName = typeof FORMS[number];
export type Random = typeof RANDOM;

export type RegularFormFields = {
  type: NumberType | null;
  number: string;
}

export type RandomFormFields = {
  type: NumberType | null;
}