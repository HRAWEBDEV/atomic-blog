import { useModeContext } from './ModeProvider';

const ModeController = () => {
 const { isDark, setIsDark } = useModeContext();
 return (
  <button
   onClick={() => setIsDark((isFakeDark) => !isFakeDark)}
   className='btn-fake-dark-mode'
  >
   {isDark ? '☀️' : '🌙'}
  </button>
 );
};

export default ModeController;
