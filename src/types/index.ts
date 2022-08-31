interface Doc {
  message: string;
  name: string;
  createdAt: object;
}

interface User {
  displayName: string;
  email: string;
}

export type { Doc, User };
