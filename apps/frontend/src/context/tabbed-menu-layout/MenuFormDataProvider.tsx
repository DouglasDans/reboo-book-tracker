'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type MenuFormDataType<T> = [
  T,
  (data: Partial<T>) => void
];

type Props<T> = {
  children: ReactNode;
  initialState: T;
};

function createMenuFormDataContext<TypeObject>() {
  const Context = createContext<MenuFormDataType<TypeObject> | undefined>(undefined);

  function Provider({ children, initialState }: Props<TypeObject>) {
    const [state, setMenuFormState] = useState<TypeObject>(initialState);

    function setState(data: Partial<TypeObject>) {
      setMenuFormState((prevState) => ({
        ...prevState,
        ...data,
      }));
    }

    return (
      <Context.Provider value={[state, setState]}>
        {children}
      </Context.Provider>
    );
  }

  function useMenuFormData<TypeObject>(): MenuFormDataType<TypeObject> {
    const context = useContext(Context) as MenuFormDataType<TypeObject> | undefined
    if (!context) {
      throw new Error('useMenuFormData deve ser usado dentro de um Provider.');
    }
    return context;
  }

  return { Provider, useMenuFormData };
}

export const MenuFormData = createMenuFormDataContext();
