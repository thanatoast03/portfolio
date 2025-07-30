'use client'

import ExperienceBlock from "../components/experience"
import projectList from "./projects.json"

export default function Projects() {
    // {
    //     "title": "",
    //     "date": "",
    //     "description": {
    //         "summary": "",
    //         "points": [
    //              ""
    //         ]
    //     }
    // }

    return (
        <div>
            {
                projectList.map((project, index) => (
                    <div className="p-5 pb-0 sm:p-10 sm:pb-0" key={`experience_block_${index}`}>
                        <ExperienceBlock title={project.title} date={project.date} description={project.description}></ExperienceBlock>
                    </div>
                ))
            }
        </div>
    )
}