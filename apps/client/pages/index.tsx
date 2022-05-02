import type {NextPage} from 'next'
import styled from 'styled-components';
import {Header} from '../features/layout/components/Header';
import {useState} from 'react';
import wretch from 'wretch';

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  const handleSubmit = (ev: any) => {
    ev.preventDefault();

    wretch('/api/orgs')
      .post({name, slug});
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
        </fieldset>
        <fieldset>
          <input type="text" value={slug} onChange={ev => setSlug(ev.target.value)} />
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  )
}

const Main = styled.main`
  color: red;
`;

export default Home
