/** @format */

export interface ParkFilterBoxProps {
  states: stateItem[];
  onSearch: (query: string) => void;
}

type stateItem = {
  id: number;
  code: string;
  state: string;
};
