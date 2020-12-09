import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { Context } from '../GlobalContext';
import { Article, JobDetailArticle} from './Styles';

export default function JobDetailsComponents() {
    const { state } = useContext(Context);
    const { jobId } = useParams();
    const { jobs } = state;

    const jobDetails = jobs.length > 0 && jobs.find(job => job.id === jobId);
   
    return ( 
     <section className = "jobDetails_section">
        <Article className="jobDetails_article" >
            <Link className="jobDetails_link" to='/'>
            ← Back to search
            </Link>
            <h2 className="jobDetails_heading">How to apply</h2>
            <p className="jobDetails_paragraph" id="apply">
                {jobDetails.how_to_apply} 
            </p>
        </Article>
        <JobDetailArticle className="jobDetails_article">
            <header className="jobDetails_article__header">
                <h2 className="jobDetails__article_heading">{jobDetails.title}</h2>
                <p className="jobDetails__paragraph job_type">{jobDetails.type}</p>
                <span className="jobDetails__paragraph job_date">{jobDetails.created_at}</span>
            </header>
            <div className="job_info_container">
                <img src={jobDetails.company_logo} />
                <div className="job_info">
                    <p className="jobDetails_paragraph job_company">{jobDetails.company}</p>
                    <span className="job_location">{jobDetails.location}</span>
                </div>
            </div>
            <div className="jobDetails_description">
               {jobDetails.description}
            </div>
        </JobDetailArticle>
        </section>
    )
}
