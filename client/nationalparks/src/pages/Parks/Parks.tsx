/** @format */

import { useCallback, useEffect } from "react";
import { fetchParks } from "../../store/slices/parks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Loader from "../../components/Loader";
import ParkCards from "./ParkCard";

import throttle from "lodash/throttle";
import ParkFilterBox from "./ParksFilterBox";

export default function Parks() {
  const dispatch = useAppDispatch();

  const PAGE_SIZE = 10;

  const { loading, list, status, totalPages, page, usStates, selectedState } =
    useAppSelector((state) => state.parksList);

  // Scroll handler with throttle
  const handleScroll = useCallback(
    throttle(() => {
      if (loading) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      // When user is 300px from bottom
      if (scrollTop + windowHeight >= fullHeight - 300) {
        if (page < totalPages) {
          dispatch(fetchParks({ page: page + 1, pageSize: PAGE_SIZE }));
        }
      }
    }, 500),
    [loading, page, totalPages, dispatch]
  );

  useEffect(() => {
    dispatch(
      fetchParks({ page: 1, pageSize: PAGE_SIZE, stateCode: selectedState })
    );
  }, [dispatch]);

  console.log(list);

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <ParkFilterBox states={usStates} />
      {loading && <Loader />}
      <div>{status == "fulfilled" && <ParkCards parks={list} />}</div>
    </>
  );
}
