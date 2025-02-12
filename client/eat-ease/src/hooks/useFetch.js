import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  console.log("BACKEND URL:", process.env.REACT_APP_API_URL);
  const URL = `${
    process.env.REACT_APP_API_URL || "https://eat-ease-backend.onrender.com"
  }${url}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([false]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(URL);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [URL]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(URL);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};
