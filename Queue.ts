type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(item: T): void {
    this.length++;
    const node = { value: item } as Node<T>;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
