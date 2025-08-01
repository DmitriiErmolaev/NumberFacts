import type { Rule } from "antd/es/form";
import { ALLOWED_TYPES, RANDOM } from "../constants";
import type { NumberType, RandomFormFields, RegularFormFields } from "../types";

type ValidationData = {
  regexp: RegExp;
  errorMessage: string;
}

const validationsByType:Record<NumberType, ValidationData> = {
  math: {
    regexp: /^[\d]+$/,
    errorMessage: 'Number must be integer'
  },
  date: {
    regexp: /^[\d]{1,2}\/[\d]{1,2}$/,
    errorMessage: 'Number must be in format month/day (eg. 2/29, 1/09, 04/1)'
  },
  trivia: {
    regexp: /^[\d]+$/,
    errorMessage: 'Number must be integer'
  } ,
  year: {
    regexp: /^[\d]+$/,
    errorMessage: 'Number must be integer'
  },
}

export const checkType = (type: string | null) => {
  if(!type) return false;
  return ALLOWED_TYPES.includes(type as NumberType);
}

export const checkNumber = (number: string | null, type: NumberType) => {
  if(!type) return false;
  if(!number) return false;
  return validationsByType[type].regexp.test(number);
}

type Rules = {
  regular: Record<keyof RegularFormFields, Rule[]>,
  random: Record<keyof RandomFormFields, Rule[]>,
}

export const rules: Rules = {
  regular: {
    type: [
      {
        required: true,
        message: 'Field must be filled in',
        validateTrigger: ['onBlur']
      },
      {
        validator: (_, value: NumberType) => {
          return checkType(value) ? Promise.resolve() : Promise.reject(new Error('Incorrect type'))
        },
        validateTrigger: ['onBlur']
      }
    ],
    number: [
      {
        required: true,
        message: 'Field must be filled in',
        validateTrigger: ['onBlur']
      },
      (formInstance) => ({
        validator(_, value: string) {
          const type = formInstance.getFieldValue('type') as RegularFormFields['type'];
          if(!type) {
            return Promise.reject(new Error('Fill in "Type" field'));
          }
          const isValid = checkNumber(value, type)
          if(!isValid) {
            return Promise.reject(new Error(validationsByType[type].errorMessage))
          }
          return Promise.resolve()
        },
        validateTrigger: ['onBlur']
      })
    ],
  },
  random: {
    type: [
      {
        required:true,
        message: 'Field must be filled in'
      },
      {
        validator: (_, value: NumberType) => {
          return checkType(value) ? Promise.resolve() : Promise.reject(new Error('Incorrect type'))
        }
      }
    ],
  }
}

export const checkParams = (number: string | null, type: string | null): boolean => {
  if(!type || !number || !checkType(type)) return false;
  const typedType = type as NumberType;
  const numberIsValid = number === RANDOM || checkNumber(number, typedType);
  if(!numberIsValid) return false;
  return true;
}