'use client'

import ExperienceBlock from "./components/experience"

export default function Projects() {
    const projects = [
        {
            title: "Social Media Website - Full Stack Developer (React.js + Spring Boot)",
            date: "02/2025 - 03/2025",
            description: {
                summary: "Built a <b>WebSocket-based</b> chat backend in <b>Spring Boot</b>, enabling real-time messaging with <b>MySQL</b> message persistence. Used <b>React.js</b> frontend and <b>Spring Boot</b> backend.",
                points: [
                    "Implemented <b>JWT</b> authentication, <b>Spring Security</b>, and <b>CAPTCHA v3</b> for secure and bot-resistant user access", 
                    "Developed a WebSocket-based chatroom; managed <b>MySQL</b> schemas for user and message data",
                    "Deployed using <b>Docker</b>, <b>Nginx</b> (reverse proxy) for HTTPS and WSS, and hosted on <b>DigitalOcean</b> droplet",
                    "<a href='https://aaaa418.com/'><u>Site</u></a>"
                ],
            }
        },
        {
            title: "Phishing Classifier - Python Artificial Intelligence",
            date: "10/2024 - 12/2024",
            description: {
                summary: "Used <b>PySpark</b>, <b>NumPy</b>, <b>Pandas</b>, <b>Matplotlib</b>, and <b>Seaborn</b> to clean data, then found the most effective algorithm using performance metrics such as accuracy, precision, recall, and F1 score.",
                points: [
                    "Our best algorithm reached over 95% on all metrics, with an accuracy of 95.9%, a precision score of 96.2%, a recall score of 95.4%, and an F1 score of 95.8%."
                ],
            }
        },
        {
            title: "Receipt Scanning Website - Full Stack Developer (React.js + PHP + MySQL)",
            date: "09/2024 - 12/2024",
            description: {
                summary: "Collaborated with a team to build a secure web app for uploading, parsing, and sharing receipt data. Integrated a <b>RESTful PHP</b> backend with a <b>React</b> frontend, enabling secure receipt upload, user login, and cost-splitting.",
                points: [
                    "Designed and integrated a <b>SQL</b> database with a <b>PHP</b> backend for structured receipt and user data",
                    "Connected backend to a <b>React.js</b> frontend and implemented <b>authentication</b> and security features",
                    "Enabled manual <b>cost-splitting</b>, allowing users to assign receipt items to specific individuals for <b>expense tracking</b>"
                ],
            }
        },
        // {
        //     title: "",
        //     date: "",
        //     description: {
        //         summary: "",
        //         points: [

        //         ],
        //     }
        // }
    ];

    return (
        <div>
            {
                projects.map((project) => (
                    <div className="p-5 pb-0 sm:p-10 sm:pb-0">
                        <ExperienceBlock title={project.title} date={project.date} description={project.description}></ExperienceBlock>
                    </div>
                ))
            }
        </div>
    )
}