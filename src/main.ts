import "core-js"
import '@/styles/css/global.css'
import '@/styles/less/text.less'
import styleLess from '@/styles/less/text.module.less'
import logoSvg from '@/assets/image/logo.svg'
import userPng from '@/assets/image/user.png'
import { chartInit } from '@/chart/index'
import { Viho } from '@/extra'
import { clone } from '@/extra/lodash'
import { patch } from '@/extra/dom'

const viho = new Viho()
const span = document.createElement('span')
span.textContent = viho.getName()
document.body.appendChild(span)
patch()
const img1 = document.createElement('img')
img1.src = logoSvg
document.body.appendChild(img1)
const svg = document.createElement('svg')
document.body.appendChild(svg)
const img2 = document.createElement('img')
img2.src = userPng
document.body.appendChild(img2)
const div1 = document.createElement('div')
div1.classList.add(styleLess.bg)
document.body.appendChild(div1)
const div2 = document.createElement('div')
div2.textContent = `
${process.env.NODE_ENV}
${process.env.PUBLIC_URL}
${process.env.L_SYSTEM_NAME}
${process.env.PORT}
${process.env.BUILD_PATH}
`
document.body.appendChild(div2)
const div3 = document.createElement('div')
div3.textContent = JSON.stringify(clone)
document.body.appendChild(div3)

chartInit()
