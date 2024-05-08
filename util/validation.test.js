import { it, expect, describe } from 'vitest';
import { validateNotEmpty } from './validation';

it('throw an error when input is empty ', () => {
  const inputTest = '';

  const resultFn = () => validateNotEmpty(inputTest);

  expect(resultFn).toThrow();
});
it('throw an error when input is empty ', () => {
  const inputTest = '';
  const testMessage = 'test';

  const resultFn = () => validateNotEmpty(inputTest, testMessage);

  expect(resultFn).toThrow(testMessage);
});
