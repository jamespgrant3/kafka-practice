const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}, from the consumer! `;
}

console.log(hello());
