import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ExerciseContext = createContext({});

export const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("/src/api/exercises/exercises.json").then((res) => {
      setExercises(res.data);
    });
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
