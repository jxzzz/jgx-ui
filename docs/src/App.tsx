import './App.css';
import { Button, Input, Card, Divider } from '../../packages';
function App() {
  return (
    <>
      <Button id="xx" className="mr-4">
        default
      </Button>
      <Button
        className="mr-4"
        disabled
        onClick={() => {
          console.log(123);
        }}
      >
        primary
      </Button>
      <Button>default</Button>
      <Divider></Divider>
      <Button disabled className="mr-4">
        default
      </Button>
      <Button
        disabled
        className="mr-4"
        onClick={() => {
          console.log(123);
        }}
      >
        primary
      </Button>
      <Button disabled>default</Button>
    </>
  );
}

export default App;
