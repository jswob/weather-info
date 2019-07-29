import { helper } from '@ember/component/helper';

export function isOk([value]) {
  if(value)
    return true;
  return false;
}

export default helper(isOk);