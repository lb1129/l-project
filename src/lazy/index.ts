export default (node: HTMLElement) => {
  const div = document.createElement('div')
  div.textContent = 'lazy node'
  document.body.insertBefore(div, node)
}