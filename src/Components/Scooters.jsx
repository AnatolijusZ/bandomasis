import { useEffect, useState } from "react";
import axios from "axios";
import Scooter from "./Scooter";
import NewScooter from "./NewScooter";


function Scooters() {
  const [scooters, setScooters] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [bendrasKMkiekis, setBendrasKMkiekis] = useState(0);
  const [scootersCount, setScootersCount] = useState (0);

  useEffect(() => {
    axios.get("http://localhost:3003/scooters").then((response) => {
      setScooters(response.data);
    });
  }, [lastUpdate]);

  useEffect(() => {
    axios.get("http://localhost:3003/scooters/stats").then((response) => {
      setScootersCount(response.data[0].scootersCount);
 
    });
  }, [lastUpdate]);

  useEffect(() => {
    axios.get("http://localhost:3003/scooters/statskm").then((response) => {
      setBendrasKMkiekis(response.data[0].bendrasKMkiekis);
 
    });
  }, [lastUpdate]);

  const addScooter = (scooter) => {
    axios.post("http://localhost:3003/scooters", scooter).then(() => {
      setLastUpdate(Date.now());
  
    });
  };

  const editScooter = (id, scooter) => {
    axios.put("http://localhost:3003/scooters/" + id, scooter).then(() => {
      setLastUpdate(Date.now());
    });
  };

  const deleteScooter = (id) => {
    axios.delete("http://localhost:3003/scooters/" + id).then(() => {
      setLastUpdate(Date.now());
    });
  };


  const sort = by => {
    const scootersCopy = scooters.slice();
    if ('total_ride_kilometres' === by) {
      scootersCopy.sort((a, b) => a.total_ride_kilometres - b.total_ride_kilometres);
    }
    if ('last_use_time' === by) {
      scootersCopy.sort((a, b) => a.last_use_time - b.last_use_time);
    }
    setScooters(scootersCopy);
  }
  
  
  return (
    <><NewScooter sort={sort} addScooter={addScooter} bendrasKMkiekis={bendrasKMkiekis} scootersCount={scootersCount} />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Registracijos kodas</th>
            <th scope="col">Rida (km)</th>
            <th scope="col">Paskutinė naudojimo data</th>
            <th scope="col">Pakeisti data</th>
            <th scope="col">Užimtas</th>
            <th scope="col">Redagavimas</th>
          </tr>
        </thead>
        {scooters.map(paspirtukas => <Scooter key={paspirtukas.id} data={paspirtukas} trinti={deleteScooter} redaguoti={editScooter}/>)}
      </table>
    </>
  );
}
export default Scooters;
