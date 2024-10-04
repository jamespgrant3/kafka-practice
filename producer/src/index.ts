const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}, from the producer! `;
}

console.log(hello());
