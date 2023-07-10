import { Viho } from './index'

test('name is Viho', () => {
  const viho = new Viho()
  expect(viho.name).toBe('Viho')
})
