import React, { useState } from "react";

const PageContext = React.createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState('');
  const [activeTab, setActiveTab] = useState(localStorage.getItem('page') ?? 'Waterjet Technology');

  return (
    <PageContext.Provider value={{ page, setPage, activeTab, setActiveTab }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
