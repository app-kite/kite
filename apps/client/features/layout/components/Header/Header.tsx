import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';

export const Header = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Root>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </Root>
    );
  }

  return (
    <Root>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </Root>
  );
};

const Root = styled.header``;
