import './style.css'
//import './topics/01-basic.types.ts'
//import './topics/02-object-interface.ts'
import './topics/01-homework-types.ts'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  hello world
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
