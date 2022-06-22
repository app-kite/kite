import { useSession } from 'next-auth/react';

export const useRole = () => {
  const { data: session } = useSession();

  return {
    isAdmin: session?.user?.isAdmin,
    isModerator: session?.user?.isModerator || session?.user?.isAdmin,
  };
};
