import { createContext, useState, useEffect } from "react";
import { GetExercises } from "../api/exercises/exercises";
import axios from "axios";

export const ExerciseContext = createContext({});

export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const data = await GetExercises();
      setExercises(data);
    };
    fetchExercises();
  }, []);

  const globalState = {
    exercises,
    setExercises,
  };

  return (
    <ExerciseContext.Provider value={globalState}>
      {children}
    </ExerciseContext.Provider>
  );
};
