import { Descendant } from '@kite/ui';

type CategoryPayload = {
  id: number;
  name: string;
};

export type Post = {
  id: number;
  title: string;
  text: Descendant[];
  categoryId: number;
  authorId: number;
  category: CategoryPayload;
  createdAt: string;
  updatedAt: string;
  votes: Array<{
    vote: {
      author: {
        id: number;
        image: string;
        name: string;
      };
    };
  }>;
};
