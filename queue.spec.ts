import Queue from './Queue';
import { expect, test } from '@jest/globals';
test('queue', function () {
  const queue = new Queue<number>();

  queue.enqueue(5);
  queue.enqueue(7);
  queue.enqueue(9);

  expect(queue.dequeue()).toEqual(5);
  expect(queue.length).toEqual(2);

  queue.enqueue(11);
  expect(queue.dequeue()).toEqual(7);
  expect(queue.dequeue()).toEqual(9);
  expect(queue.peek()).toEqual(11);
  expect(queue.dequeue()).toEqual(11);
  expect(queue.dequeue()).toEqual(undefined);
  expect(queue.length).toEqual(0);

  // just wanted to make sure that I could not blow up myself when i remove
  // everything
  console.log('queue before:', queue);
  queue.enqueue(69);
  console.log('queue after:', queue);

  expect(queue.peek()).toEqual(69);
  expect(queue.length).toEqual(1);
});
