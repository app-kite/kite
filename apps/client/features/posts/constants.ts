import {PostStatus} from './types';

export const STATUSES_MAP = {
  [PostStatus.IN_REVIEW]: {
    title: 'In review',
  },
  [PostStatus.PLANNED]: {
    title: 'Planned',
  },
  [PostStatus.IN_PROGRESS]: {
    title: 'In progress',
  },
  [PostStatus.COMPLETED]: {
    title: 'Completed',
  },
  [PostStatus.CANCELLED]: {
    title: 'Cancelled',
  },
};

export const STATUSES_LIST = Object.keys(STATUSES_MAP).map(status => ({
  value: status,
  label: STATUSES_MAP[status as PostStatus].title,
}));
