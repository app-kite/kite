import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';
import { Button, ButtonVariant, Text } from '@kite/ui';
import MenuIcon from '@kite/ui/assets/icons/menu.svg';

export const Header = () => {
  const { data: session } = useSession();

  return (
    <Root>
      <Feedback>
        <Text>Feedback</Text>
      </Feedback>
      <Logo>
        <LogoLink></LogoLink>
        <Text>Week</Text>
      </Logo>
      <User>
        {session?.user && (
          <>
            {session.user.image && (
              <UserAvatar src={session.user.image}></UserAvatar>
            )}
            <UserName>
              <Text>{session.user.name}</Text>
            </UserName>
            <MenuIcon />
          </>
        )}
        {!session?.user && (
          <>
            <Button variant={ButtonVariant.DEFAULT} onClick={() => signIn()}>
              Sign In
            </Button>
          </>
        )}
      </User>
    </Root>
  );
};

const Root = styled.header`
  width: 100%;
  box-sizing: border-box;
  height: 68px;
  padding: 10px 45px 10px 40px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  position: fixed;
`;

const Feedback = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0;
  justify-content: center;
`;

const LogoLink = styled.a`
  margin-right: 14px;
  width: 48px;
  height: 48px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0;
  justify-content: flex-end;
`;

const UserAvatar = styled.img`
  margin-right: 10px;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  padding: 0 10px;
`;
