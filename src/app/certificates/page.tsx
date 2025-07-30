'use client'

import ExperienceBlock from "../components/experience"
import certificateList from "./certificates.json"

export default function Certificates() {


    return (
            <div>
                {
                    certificateList.map((project, index) => (
                        <div className="p-5 pb-0 sm:p-10 sm:pb-0" key={`certificate_block_${index}`}>
                            <ExperienceBlock title={project.title} date={project.date} description={project.description}></ExperienceBlock>
                        </div>
                    ))
                }
            </div>
        )
};