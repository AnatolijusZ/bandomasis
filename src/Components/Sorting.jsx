function Sorting({sort}) {

    return (<div className="rusiavimas">
        <button type="button" className="btn btn-primary btn-lg mygtukas" onClick={()=>sort("total_ride_kilometres")}>Rušioti pagal nuvaziuota atstumą {sort}</button>
<button type="button" className="btn btn-secondary btn-lg mygtukas" onClick={()=>sort("last_use_time")}>Pagal laika</button>
</div>
    )
}

export default Sorting;