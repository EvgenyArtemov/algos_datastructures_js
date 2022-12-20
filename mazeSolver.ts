type Point = {
  x: number;
  y: number;
};

const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const walk = (
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean => {
  // Base cases:

  // 1. off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  // 2. on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // 3. end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }
  // 4. already seen
  if (seen[curr.x][curr.y]) {
    return false;
  }

  // Recurse:

  // pre
  seen[curr.x][curr.y] = true;
  path.push(curr);
  // recurse itself
  for (let i = 0; i < directions.length; i++) {
    const [x, y] = directions[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }
  // post
  path.pop();

  return false;
};

export const mazeSolver = (
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] => {
  const path: Point[] = [];
  const seen: boolean[][] = [];
  const length = maze[0].length;
  for (let i = 0; i < length; i++) {
    seen.push(new Array(length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
};
