interface Doc {
  message: string;
  name: string | null;
  createdAt: any;
  id?: string;
}

interface User {
  displayName: string;
  email: string;
}

export type { Doc, User };
