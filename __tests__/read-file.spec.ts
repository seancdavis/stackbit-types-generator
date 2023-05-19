import { sayHello } from '@/read-file'

console.log('TEST')

describe('sayHello', () => {
  it('should say hello', async () => {
    const response = await sayHello()
    expect(response).toBe(true)
  })
})
