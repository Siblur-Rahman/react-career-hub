import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredjobApplication } from "../../utility/LocalStorage";

const Appliedjobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displyJobs, setDisplyJobs] =useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplyJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter( job => job.remote_or_onsite ==='Remote');
            setDisplyJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter( job => job.remote_or_onsite ==='Onsite');
            setDisplyJobs(onsiteJobs)
        }
    }

    useEffect(() =>{
        const storedJodIds =getStoredjobApplication();
        if(jobs.length > 0){
           
            const jobsApplied = [];
            for(const id of storedJodIds){
                const job = jobs.find(job => job.id ===id);
                if(job.id){
                    jobsApplied.push(job)
                }
            }

            // oR
            //  const jobsApplied = jobs.filter(job => storedJodIds.includes(job.id))



            setAppliedJobs(jobsApplied);
            setDisplyJobs(jobsApplied);
             
            // console.log(jobs, storedJodIds, jobsApplied)

        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {appliedJobs.length} </h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() =>handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() =>handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() =>handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    // applyJobs.map(job => <li key={job.id}>
                    displyJobs.map(job => <li key={job.id}>
                        <span>{job.job_title}, {job.company_name}: {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Appliedjobs;