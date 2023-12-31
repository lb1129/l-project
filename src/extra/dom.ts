import styleCss from '@/styles/css/global.module.css'
import styleLess from '@/styles/less/text.module.less'

export const patch = () => {
  const div = document.createElement('div')
  div.className = styleCss.bold
  div.classList.add('text')
  div.classList.add(styleLess.text)
  div.textContent = 'div content'
  div.onclick = async () => {
    div.textContent = 'div content clicked'
    const module = await import('@/lazy/index')
    module.default(div)
  }
  document.body.appendChild(div)
}
