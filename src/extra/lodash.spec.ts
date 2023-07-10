import { clone } from './lodash'

test('e is 1', () => {
  expect(clone.a.b.c.d.e).toBe(1)
})
