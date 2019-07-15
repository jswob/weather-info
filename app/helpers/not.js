import { helper } from '@ember/component/helper';

export function not([param]) {
  return !param;
}

export default helper(not);
