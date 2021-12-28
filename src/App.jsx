import Buttons from './components/Buttons';
import Text from './components/Text'
import Mode from './components/Mode'

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-100 to-blue-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <Text />
      <Buttons />
      <Mode />
    </div>
  );
}

export default App;
