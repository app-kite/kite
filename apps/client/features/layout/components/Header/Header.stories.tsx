import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';
import styled from 'styled-components';
import { SessionProvider } from 'next-auth/react';

export default {
  title: 'Features/Layout/Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const session = {
  expires: '2022-02-02',
  user: {
    id: '1',
    image: 'https://i.pravatar.cc/100',
    name: 'Eiven Petrov',
    email: 'test@mail.ru',
  },
};

export const SignedIn = () => {
  return (
    <SessionProvider session={session}>
      <Header />
    </SessionProvider>
  );
};

export const SignedOut = () => {
  return (
    <SessionProvider session={null}>
      <Header />
    </SessionProvider>
  );
};

