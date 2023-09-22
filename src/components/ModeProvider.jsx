import PropsType from 'prop-types';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const modeContext = createContext(false);

const useModeContext = () => {
 const value = useContext(modeContext);
 if (!value) throw new Error('context is outside of provider');
 return value;
};

const ModeProvider = ({ children }) => {
 const [isDark, setIsDark] = useState(false);
 useEffect(
  function () {
   document.documentElement.classList.toggle('fake-dark-mode');
  },
  [isDark]
 );

 const contextValue = useMemo(
  () => ({
   isDark,
   setIsDark,
  }),
  [isDark, setIsDark]
 );

 return <modeContext value={contextValue}>{children}</modeContext>;
};

ModeProvider.propsTypes = {
 children: PropsType.node,
};

export default ModeProvider;
export { useModeContext };
