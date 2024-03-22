import useSWR from "swr";
import "./App.css";

export default function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const { data, error, isLoading } = useSWR([url, headers]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load.</p>;
  return <p>Status : {data.description}</p>;
}
