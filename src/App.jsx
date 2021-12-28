import Buttons from './components/Buttons';
import Text from './components/Text'
import Mode from './components/Mode'

function App() {
  return (
    <div className="h-screen dark:bg-gradient-to-b dark:from-gray-100 dark:to-blue-100 bg-gradient-to-b from-gray-800 to-gray-900">
      <Text />
      <Buttons />
      <Mode />
    </div>
  );
}

export default App;
