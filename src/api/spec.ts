export async function fetchSpecById(id) {
  const response = await fetch(`/spec/vega-lite/${id}.vl.json`);
  return await response.json();
}
