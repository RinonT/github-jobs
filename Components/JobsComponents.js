import React from 'react';
import { Link } from 'react-router-dom';
import { Job_Container } from './Styles'

export default function JobsComponents({id, company_logo, company, title, type, location, created_at }) {

    return (

        <section className="page_section">
            <Link to={`/${id}`}>
                <Job_Container className="page_container section_container">
                    <img src={company_logo} alt={`${company}'s logo`} />
                    <article className="page_article section_article">
                        <h2 className="job_company">{company}</h2>
                        <p className="job_title">{title}</p>
                        <p className="job_type">{type}</p>
                        <div className="job_info">
                            <p className="job_location">{location}</p>
                            <div>
                                <img src="" alt="jobs" />
                                <span className="job_created">{created_at}</span>
                            </div>
                        </div>
                    </article>
                </Job_Container>
            </Link>
        </section>
    )
}
