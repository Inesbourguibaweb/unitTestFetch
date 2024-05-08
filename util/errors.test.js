import { it, expect, describe } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HttpError', () => {
  it('it should has statusCode, message and data', () => {
    const testCode = 1;
    const testMessage = 'test';
    const testData = { key: 'test ' };

    const error = new HttpError(testCode, testMessage, testData);
    expect(error.statusCode).toBe(testCode);
  });
});
describe('ValidationError', () => {
  it('it should has statusCode, message and data', () => {
    const testMessage = 'test';

    const error = new ValidationError(testMessage);
    expect(error.message).toBe(testMessage);
  });
});
