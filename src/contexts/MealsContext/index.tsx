import { createContext, useState } from 'react';

type MealsContextType = {
  onDietStatus: boolean | null;
  totalMeals: number;
  totalOnDiet: number;
  totalOffDiet: number;
  totalPercent: number;
  bestSequence: number;
};

const initialMealsContext: MealsContextType = {
  onDietStatus: true,
  totalMeals: 0,
  totalOnDiet: 0,
  totalOffDiet: 0,
  totalPercent: 0,
  bestSequence: 0,
};

export const MealsContext = createContext<MealsContextType>(initialMealsContext);

interface Props {
  children: React.ReactNode;
}

export const MealsProvider: React.FC<Props> = ({ children }) => {
  const [onDietStatus, setOnDietStatus] = useState<boolean | null>(true);
  const [totalMeals, setTotalMeals] = useState<number>(0);
  const [totalOnDiet, setTotalOnDiet] = useState<number>(0);
  const [totalOffDiet, setTotalOffDiet] = useState<number>(0);
  const [totalPercent, setTotalPercent] = useState<number>(0);
  const [bestSequence, setBestSequence] = useState<number>(0);

  return (
    <MealsContext.Provider
      value={{
        onDietStatus,
        totalMeals,
        totalOnDiet,
        totalOffDiet,
        totalPercent,
        bestSequence,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};