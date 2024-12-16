'use client';

import { createContext, ReactNode, useContext } from 'react';

type MenuTabsType = Array<{
  title: string;
  icon: ReactNode;
  link: string;
}>;

type Props = {
  children: ReactNode;
  value: MenuTabsType
};

const MenuTabsContext = createContext<MenuTabsType | undefined>(undefined);

export function MenuTabsProvider({ children, value }: Props) {
  return (
    <MenuTabsContext.Provider value={value}>
      {children}
    </MenuTabsContext.Provider>
  );
}

export function useMenuTabs() {
  const context = useContext(MenuTabsContext);
  if (!context) {
    throw new Error('useMenuTabs deve ser usado dentro de um MenuTabsProvider');
  }
  return context;
}
