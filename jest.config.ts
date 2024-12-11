import nextJest from 'next/jest.js'
import type {Config} from 'jest'

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(svg)$': '<rootDir>/__mocks__/svgrMock.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

export default createJestConfig(config)
