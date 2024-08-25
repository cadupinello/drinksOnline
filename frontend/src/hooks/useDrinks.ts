import { useQuery } from "@tanstack/react-query";

const fetchDrinks = async () => {
  const response = await fetch('http://localhost:3001/drinks');
  if (!response.ok) {
    throw new Error(`Erro ao buscar os drinks`);
  }
  return response.json();
}

export const useDrinks = () => {
  return useQuery({
    queryKey: ['drinks'],
    queryFn: fetchDrinks,
  })
}