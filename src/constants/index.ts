const baseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL ||
  'http://0.0.0.0:8000/api') as string;

export { baseUrl };
