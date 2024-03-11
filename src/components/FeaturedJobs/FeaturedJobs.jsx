import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  //This is not the best way to load show all data
  const [dataLength , setDataLength ] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
    // .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs : {jobs.length}</h2>
        <p className="text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
          jobs.slice(0 , dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={`text-center p-10 m-5 ${dataLength === jobs.length ? 'hidden' : ''}`}>
        <button
          onClick={() => setDataLength (jobs.length)}
          className="btn  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
