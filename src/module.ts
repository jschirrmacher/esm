import fetch from 'node-fetch';

export function compute() {
  return 42;
}

export async function octocat() {
  const result = await fetch('https://api.github.com/users/octocat');
  return ((await result.json()) as { id: number }).id;
}
