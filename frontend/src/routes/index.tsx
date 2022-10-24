import React from 'react';
import Loading from '../components/Loading'
import {useAuth} from '../hooks';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

export default function Routes() {
  const { logado, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return !logado ? <AppRoutes /> : <AppRoutes />;
}