import { helper } from '@ember/component/helper';

export function validationMessage([clientValidation, serverValidation]) {
  if(clientValidation.length)
    return clientValidation;
  if(Array.isArray(serverValidation))
    return [serverValidation[0].message];
  return [];
}

export default helper(validationMessage);