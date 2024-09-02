import { describe, it } from 'vitest'
import { THAI_REGEX, successTests } from './mocks/testData.js'

import { romanize } from './index.js'

describe('romanize-thai', () => {
  it('should romanize thai text', ({ expect }) => {
    for (const [input, output] of successTests) {
      const result = romanize(input)
      expect(result).not.toMatch(THAI_REGEX)
      expect(result).toBe(output)
    }
  })

  it('should not romanize non-thai text', ({ expect }) => {
    expect(romanize('hello')).toBe('hello')
    expect(romanize('123')).toBe('123')
    expect(romanize('!@#$%^&*()')).toBe('!@#$%^&*()')
    //* Shouldn't romanize different languages (e.g. Japanese, Chinese, Korean)
    expect(romanize('こんにちは')).toBe('こんにちは')
    expect(romanize('你好')).toBe('你好')
    expect(romanize('안녕하세요')).toBe('안녕하세요')
  })
})
