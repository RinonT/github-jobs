import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { Context } from '../GlobalContext';

export default function JobDetailsComponents() {
    const { state, dispatch } = useContext(Context);
    const { jobId } = useParams();
    const { jobs } = state;

    const jobDetails = jobs.length > 0 && jobs.find(job => job.id === jobId);
    console.log(jobDetails);
    return (
    <section className = "jobDetails_section">
            <article className="jobDetails_article" >
            <Link className="jobDetails_link" to='/'>
            Back to search
                 </Link>
                <h2 className="jobDetails_heading">How to apply</h2>
                <p className="jobDetails_paragraph">
                    {jobDetails.how_to_apply}
                </p>
            </article>
        <article className="jobDetails_article">
            <header className="jobDetails_article__header">
                <h2 className="jobDetails__article_heading">{jobDetails.title}</h2>
                <p className="jobDetails__paragraph">{jobDetails.type}</p>
                <p className="jobDetails__paragraph">{jobDetails.created_at}</p>
            </header>
            <div>
                <img src={jobDetails.company_logo} />
                <div className="job_info">
                    <p className="jobDetails_paragraph job_company">{jobDetails.company}</p>
                    <span className="job_location">{jobDetails.location}</span>
                </div>
            </div>
            <div className="jobDetails_description">
                {(jobDetails.description)}
            </div>
        </article>
        </section >  
    )
}
