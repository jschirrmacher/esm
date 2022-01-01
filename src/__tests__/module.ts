import { compute, octocat } from '../module.js';
import expect from 'expect';

describe('module', () => {
  it('should compute', () => {
    expect(compute()).toBe(42);
  });

  it('should load', async () => {
    expect(await octocat()).toBe(583231);
  });
});
