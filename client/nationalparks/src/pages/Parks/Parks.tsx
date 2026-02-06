/** @format */

import { useCallback, useEffect, useState } from "react";
import { fetchParks } from "../../store/slices/parks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Loader from "../../components/Loader";
import ParkCards from "./ParkCard";

import ParkFilterBox from "./ParksFilterBox";
import { setPage } from "../../store/slices/parksSlice";

export default function Parks() {
  const PAGE_SIZE = 10;

  const dispatch = useAppDispatch();

  const { loading, list, status, totalPages, usStates, selectedState, page } =
    useAppSelector((state) => state.parksList);

  useEffect(() => {
    dispatch(
      fetchParks({
        page,
        pageSize: PAGE_SIZE,
        stateCode: selectedState,
      })
    );
  }, [dispatch]);

  return (
    <>
      <ParkFilterBox states={usStates} />
      {loading && <Loader />}
      <div>{status == "fulfilled" && <ParkCards parks={list} />}</div>
    </>
  );
}
