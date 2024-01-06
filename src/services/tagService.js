const BASE_URL = 'https://api.quotable.io';

export const fetchTags = async () => {
  const response = await fetch(`${BASE_URL}/tags`);
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  const data = await response.json();
  return data;
};
