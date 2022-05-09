import { Descendant } from '@kite/ui';

type CategoryPayload = {
  id: number;
  name: string;
};

export type Post = {
  id: string;
  title: string;
  text: Descendant[];
  categoryId: number;
  authorId: number;
  category: CategoryPayload;
};
