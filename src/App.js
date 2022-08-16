// import logo from './logo.svg';
import { TransformControls, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import navbar from './components/navbar';

function App() {
  return (
    <div style={{height:"100vh", width: "100vw"}} id='canvas-container'>
      {navbar()}
      <Canvas flat linear>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        {/* <OrthographicCamera > */}
        <TransformControls mode="translate">
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        </TransformControls>
        {/* </OrthographicCamera> */}
      </Canvas>
    </div>
  );
}

export default App;
