'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type MenuFormDataType<T> = {
  state: T;
  setState: (data: T) => void;
};

type Props<T> = {
  children: ReactNode;
  initialState: T;
};

function createMenuFormDataContext<TypeObject>() {

  const Context = createContext<MenuFormDataType<TypeObject> | undefined>(undefined);

  function Provider({ children, initialState }: Props<TypeObject>) {
    const [state, setState] = useState<TypeObject>(initialState);

    return (
      <Context.Provider value={{ state, setState }}>
        {children}
      </Context.Provider>
    );
  }

  function useMenuFormData(): MenuFormDataType<TypeObject> {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useMenuFormData deve ser usado dentro de um Provider.');
    }
    return context;
  }

  return { Provider, useMenuFormData };
}

export const MenuFormData = createMenuFormDataContext();
