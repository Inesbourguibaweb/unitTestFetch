import { it, describe, vi, expect } from 'vitest'; // Import expect from vitest

import { sendDataRequest } from './http';

const fetchFn = vi.fn(async (url, options) => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ response: 'success' }), // Mock response data
  });
});
describe('sendDataRequest function test', async (test) => {
  it('should send data and return response data', async () => {
    // Removed expect from function parameters
    // Mocking fetch using vi.stubGlobal
    vi.stubGlobal('fetch', fetchFn);

    const data = { key: 'value' };
    const responseData = await sendDataRequest(data);

    expect(responseData).toEqual({ response: 'success' }); // Using expect here directly
  });

  it('should throw HttpError when response is not okay', async () => {
    // Removed expect from function parameters
    // Mocking fetch using vi.stubGlobal
    vi.stubGlobal('fetch', async (url, options) => {
      return Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.resolve({ error: 'Not Found' }), // Mock error response data
      });
    });

    const data = { key: 'value' };

    try {
      await sendDataRequest(data);
      // If the function doesn't throw an error, fail the it
      expect(true).toBe(false);
    } catch (error) {
      //   expect(error.name).toBe('HttpError');
      expect(error.statusCode).toBe(404);
      expect(error.message).toBe('Sending the request failed.');
      //   expect(error.data).toEqual({ error: 'Not Found' });
    }
  });
});
