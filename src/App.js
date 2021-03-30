import logo from './logo.svg';
import './App.css';
import WelcomeAdmin from './Components/Welcome_Admin/WelcomeAdmin'
import ActiveVehicles from './Components/Active_Vehicles/ActiveVehicles'
import VehicleMap from './Components/Vehicle_Map/VehicleMap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeAdmin />
        <ActiveVehicles />
        <VehicleMap />
      </header>
    </div>
  );
}

export default App;
