type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head: Node<T>;
  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;
    const value = this.head.value;
    this.head = this.head.prev;
    return value;
  }
  push(item: T): void {
    this.length++;
    const node = { value: item } as Node<T>;

    if (!this.head) {
      this.head = node;
      return;
    }
    const prev = this.head;
    this.head = node;
    this.head.prev = prev;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
