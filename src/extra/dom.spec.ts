import { patch } from './dom'

describe('dom', () => {
  let span : HTMLDivElement | null
  beforeEach(() => {
    patch()
  })
  test('render should success', () => {
    span = document.querySelector<HTMLDivElement>('.text')
    expect(span).toBeTruthy()
    if(span) {
      expect(span.textContent).toBe('div content');
    }
  });
  test('click event should success', () => {
    if(span) {
      span.click()
      expect(span.textContent).toBe('div content clicked');
    }
  });
})
