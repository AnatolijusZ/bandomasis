import { useState } from "react";
import Sorting from "./Sorting";
import Stats from "./Stats";

function NewScooter({addScooter, bendrasKMkiekis, scootersCount, sort}) {
  const [registration_code, setRegistrationCode] = useState("");
  const [last_use_time, setLastUseTime] = useState("");
  const [total_ride_kilometres, setTotalRideKilometres] = useState("");
  const [is_busy, setIsBusy] = useState("0");

  const control = (e, data) => {
    switch (data) {
      case "regcode":
        setRegistrationCode(e.target.value);
        break;
      case "time":
        setLastUseTime(e.target.value);
        break;
      case "ride":
        setTotalRideKilometres(e.target.value);
        break;
    }
  };

  const insert = () => {
    addScooter({
         registration_code: registration_code,
         last_use_time: last_use_time,
         total_ride_kilometres: total_ride_kilometres,
         is_busy: is_busy
     });
     setRegistrationCode('');
     setLastUseTime('');
     setTotalRideKilometres('');
 }

  return (<div className="top">
    <form className="registracija">
      <div className="form-group">
        <label for="formGroupExampleInput">Iveskit registracijos kodą</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          onChange={(e) => control(e, "regcode")}
          value={registration_code}
        />
      </div>
      <div className="form-group">
        <label for="formGroupExampleInput2">Rida (km)</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          onChange={(e) => control(e, "ride")}
          value={total_ride_kilometres}
        />
      </div>
      <div className="form-group">
        <label for="formGroupExampleInput3">Iveskit datą</label>
        <input
          type="date"
          className="form-control"
          id="formGroupExampleInput3"
          onChange={(e) => control(e, "time")}
          value={last_use_time}
        />
      </div>
      <button type="button" className="btn btn-dark" onClick={insert}>
        Pridėti
      </button>
    </form>
    <Stats bendrasKMkiekis={bendrasKMkiekis} scootersCount={scootersCount}></Stats>
    <Sorting sort={sort}></Sorting>
</div>
  );
}

export default NewScooter;
