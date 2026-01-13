/** @format */

export interface Park {
  id: string;
  fullName: string;
  states: string;
  description: string;
  url: string;
}

export interface ParksResponse {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  data: Park[];
}

export interface FetchParksParams {
  page?: number;
  pageSize?: number;
  stateCode?: string;
}
