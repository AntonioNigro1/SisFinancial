export interface CustomAxiosError {
  status: number;
  message: string;
  code: string;
  details: Details;
}

export interface Details {
  error: string;
}
