export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Such a character is already in the team');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let current = 0;
    const members = this.toArray();

    return {
      next() {
        if (current < members.length) {
          const value = members[current];
          current += 1;

          return {
            done: false,
            value,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}
