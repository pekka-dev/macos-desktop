import clsx from "clsx";
import { createDivAndAppend } from "helpers";
import React, { createContext, useContext, useRef, useState } from "react";

//TODO change AppContext values type
const AppContext = createContext<any>(undefined);

const APPLICATION_CONTAINER = "application-container";

const AppProvider: React.FC<ChildrenProp> = ({ children }) => {
  const applicationContainerRef = useRef<HTMLDivElement>(null);

  const getApplicationContainer = (): HTMLDivElement => {
    if (applicationContainerRef.current) return applicationContainerRef.current;
    document
      .querySelectorAll(`.${APPLICATION_CONTAINER}`)
      .forEach((e) => e.remove());
    return createDivAndAppend(APPLICATION_CONTAINER);
  };

  return (
    <AppContext.Provider value={{ getApplicationContainer }}>
      {children}
      <div
        ref={applicationContainerRef}
        className={clsx(APPLICATION_CONTAINER)}
      />
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useApp = () => useContext(AppContext);
