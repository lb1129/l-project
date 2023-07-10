import dataJson from '@/assets/data.json'

interface Iuser {
  name: string
  age: number
  getName: () => string
}

export class Viho implements Iuser {
  name = dataJson.name
  age = 18
  getName() {
    return this.name
  }
}
