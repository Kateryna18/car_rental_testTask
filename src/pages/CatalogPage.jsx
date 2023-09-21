import React, { useEffect, useState } from 'react';
import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import Catalog from "../components/AdvertsList/AdvertsList";
import Filter from "../components/Filter/Filter";
import { fetchAdverts } from 'redux/operations';

export default function CatalogPage() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts(page))
  }, [dispatch, page])

  return (
    <>
      <Filter />
      <Catalog />
      <button type='button' className={css.button} onClick={() => setPage(page + 1)}>Load more</button>
    </>
  );
}
