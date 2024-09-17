import { useQuery } from "@tanstack/react-query";

interface fetchDrinksParams {
  category?: string;
  page?: number;
  limit?: number;
}

const fetchDrinks = async (params: fetchDrinksParams = {}) => {
  const { category, page = 1, limit = 10 } = params;
  const url = new URL('http://localhost:3333/drinks');
  if (category) {
    url.searchParams.set('category', category);
  }  
  if (page) {
    url.searchParams.set('page', String(page));
  }
  if (limit) {
    url.searchParams.set('limit', String(limit));
  }
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Erro ao buscar os drinks`);
  }
  
  console.log(response)
  const data = await response.json();
  return data.data;
}

export const useDrinks = (params: fetchDrinksParams = {}) => {
  return useQuery({
    queryKey: ['drinks', params],
    queryFn: () => fetchDrinks(params),
    enabled: !!params.category,
  })
}