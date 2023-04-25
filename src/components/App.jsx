import { lazy } from 'react';
import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
const Tweets = lazy(() => import('pages/Tweets/Tweets'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const HomePage = lazy(() => import('pages/Home/Home'));

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat', 'Roboto']
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
