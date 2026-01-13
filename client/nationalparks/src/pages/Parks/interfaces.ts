/** @format */

export interface ParkFilterBoxProps {
  states: stateItem[];
  onSearch: (query: string, state: string) => void;
}

type stateItem = {
  id: number;
  code: string;
  state: string;
};
