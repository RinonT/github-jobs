import React from 'react';
import { Link } from 'react-router-dom';
import { Job_Container } from './Styles'

export default function JobsComponents({ id, company_logo, company, title, type, location, created_at }) {
const offerDate = new Date(created_at).toLocaleString();

const date1 = Date.parse(created_at);
const date2 = Date.parse(new Date()); 
 
const discussedOnDate = new Date(Number(date1));
 const today = new Date(Number(date2))
  
 const date3 = new Date(discussedOnDate.toLocaleDateString()); 
 const date4 = new Date(today.toLocaleDateString()); 
   
 // To calculate the time difference of two dates 
 const Difference_In_Time = date4.getTime() - date3.getTime(); 
   
 // To calculate the no. of days between two dates 
 const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24) + ` days ago`; 
   
    return (
        <section className="page_section">
            <Link to={`/${id}`}>
                <Job_Container className="page_container section_container">
                    <div className="section_container__div">
                        <img src={company_logo} alt={`${company}'s logo`} />
                        <article className="page_article section_article">
                            <h2 className="job_company">{company}</h2>
                            <p className="job_title">{title}</p>
                            <p className="job_type">{type}</p>
                        </article>
                    </div>
                    <div className="job_info">
                        <p className="job_location">{location}</p>
                        <div>
                            <img src="" alt="jobs" />
                            <span className="job_created">{Difference_In_Days}</span>
                        </div>
                    </div>
                </Job_Container> 
            </Link>
        </section>
    )
}
