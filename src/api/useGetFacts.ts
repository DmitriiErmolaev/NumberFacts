import { useEffect, useState } from "react";
import { getNumbers } from ".";
import { checkParams } from "../validation";

const useGetFacts = (number: string | null, type: string | null) => {
  const [facts, setFacts] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        setError('')
        const validInputs = checkParams(number, type);
        if(!validInputs) {
          setError('Incorrect Data');
          return
        }
        const endpoint = `/${number}/${type}`;
        const result = await getNumbers(endpoint);
        setFacts(result.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchFacts()
  }, [number, type])

  return [facts, error];
};

export default useGetFacts;