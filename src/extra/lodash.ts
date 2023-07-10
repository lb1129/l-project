import { cloneDeep } from 'lodash-es'

export const clone = cloneDeep({
  a: {
    b: {
      c: {
        d: {
          e: 1
        }
      }
    }
  }
})