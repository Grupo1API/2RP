import React from 'react';
import Main from '../main';
import Loading from '../components/Loading'
import {useAuth} from '../hooks';

export default function Routes() {
  const { logado, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return !logado ? <Main /> : <Main />;
}