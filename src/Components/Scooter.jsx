import { useEffect, useState } from "react";

function Scooter({data, trinti, redaguoti}) {

  const [total_ride, setRide] = useState("");
  const [last_use, setDate] = useState(data.last_use_time);
  const [newDate, setNewDate] = useState(last_use);
  const [busy, setBusy] = useState();
  const [checked, setChecked] = useState(false);


  useEffect(() => {

    checkHandler();
    dateFormat(last_use);
  }, [last_use]);
  
  const checkHandler = () => {
    data.is_busy === 0 ? setBusy(false) : setBusy(true);
  };
  //useEffect ( () => {
  //if (busy === 1) {
  //setChecked(true)}
  //else {
  //setChecked(false)}
  //}, [busy]);


  const dateFormat = (d) => {
    d = new Date(d)
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = d.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    setDate (`${year}-${month}-${day}`)
  }

 // const busyState = () => {
 //   if (busy === 1) {
 //   setBusy('0');
 //   setChecked(false)}
 //   else {
 //   setBusy('1');
 //   setChecked(true)}  
//  }


  const control = (e, data) => {
    switch (data) {
      case "ride":
        setRide(e.target.value);
        break;
      case "date":
        setNewDate(e.target.value);
        break;
      case "check":
        setBusy(e.target.checked)
    }
  };

    const edit = () => {
        redaguoti(data.id, {   
          total_ride_kilometres: data.total_ride_kilometres + parseInt(total_ride),
          last_use_time: newDate,
          is_busy: busy
        });
        setNewDate('');
        setRide('');
        setDate(newDate);
        setBusy();
      };


    return (
        <tbody>
    <tr>
      <th scope="row"></th>
      <td></td> 
    </tr>
    <tr>  
      <th scope="row">{data.registration_code}</th>
      <td>{data.total_ride_kilometres}<input className="redagavimaskm" type="text" value={total_ride} onChange={(e)=> control(e, "ride")}/>
     </td>
      <td>{last_use}</td>
    <td><input className="redagavimasd" type="date" value={newDate} onChange={(e)=> control(e, "date")}/></td>
      <td><input type="checkbox" checked={busy} onChange={(e) => control(e, "check")} /></td>
      <td><button type="button" className="btn btn-dark redagavimas-button" onClick={()=>edit(data.id)}>Keisti</button>
      <button type="button" className="btn btn-dark" onClick={()=>trinti(data.id)}>Trinti</button></td>
    </tr>
    </tbody>
    )
}

export default Scooter;