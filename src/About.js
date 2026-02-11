import React from 'react';
import './About.css';
import portrait from './assets/me-portrait.PNG';
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaLaravel, FaAws, FaBook, FaJava } from "react-icons/fa";

export default function About() {
    return (
        <div className="page-wrapper">
            <section id="about" className="about-section page-section" style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '100px' }}>
                <div className="about-header">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-subtitle">
                        Aspiring Software Developer | Building Practical and User-Focused Solutions
                    </p>
                </div>
                <div className="about-content-wrapper">
                    <div className="about-image-wrap">
                        <div className="about-glow-frame">
                            <img src={portrait} alt="Portrait of Kylo" className="about-portrait" />
                        </div>
                    </div>
                    <div className="about-content">
                        <h3 className="about-name">John Kylo E. Dela Cruz</h3>
                        <p className="about-role">Computer Engineering Student</p>
                        <p className="about-description">
                            I am passionate about building practical and user-focused applications. I continuously
                            improve my technical skills through hands-on projects and self-learning, exploring both frontend and backend development
                            I am eager to gain real-world experience and contribute to meaningful software solutions.
                        </p>
                        <div className="about-stats">
                            <div className="about-card">
                                <span className="about-stat-number">4+</span>
                                <span className="about-stat-label">Years Experience</span>
                                <span className="about-stat-tag">Design &amp; Illustration</span>
                            </div>
                            <div className="about-card">
                                <span className="about-stat-number">5+</span>
                                <span className="about-stat-label">Projects Completed</span>
                                <span className="about-stat-tag">Personal &amp; Academic</span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Tech Stack Section */}
                <div className="tech-stack-section">
                    <h3 className="tech-stack-title">Tech Stack &amp; Expertise</h3>
                    <p className="tech-stack-subtitle">The tech stack I'm experienced with and continue to work on.</p>

                    <div className="tech-stack-container">
                        <div className="tech-track">

                            {/* Original Set */}
                            <div className="tech-card">
                                <span className="tech-icon javascript"><SiJavascript /></span>
                                <span className="tech-name">JavaScript</span>
                                <span className="tech-desc">Interactive Logic</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon tailwind"><SiTailwindcss /></span>
                                <span className="tech-name">Tailwind CSS</span>
                                <span className="tech-desc">Utility-first CSS</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon react"><FaReact /></span>
                                <span className="tech-name">React</span>
                                <span className="tech-desc">UI Library</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon nextjs"><SiNextdotjs /></span>
                                <span className="tech-name">Next.js</span>
                                <span className="tech-desc">React Framework</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon nodejs"><FaNodeJs /></span>
                                <span className="tech-name">Node.js</span>
                                <span className="tech-desc">Runtime Env</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon python"><FaPython /></span>
                                <span className="tech-name">Python</span>
                                <span className="tech-desc">Backend &amp; AI</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon laravel"><FaLaravel /></span>
                                <span className="tech-name">Laravel</span>
                                <span className="tech-desc">PHP Framework</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon aws"><FaAws /></span>
                                <span className="tech-name">AWS</span>
                                <span className="tech-desc">Cloud Services</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon java"><FaJava /></span>
                                <span className="tech-name">Java</span>
                                <span className="tech-desc">Object-Oriented Programming</span>
                            </div>

                            {/* Duplicate Set for Infinite Loop */}
                            <div className="tech-card">
                                <span className="tech-icon javascript"><SiJavascript /></span>
                                <span className="tech-name">JavaScript</span>
                                <span className="tech-desc">Interactive Logic</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon tailwind"><SiTailwindcss /></span>
                                <span className="tech-name">Tailwind CSS</span>
                                <span className="tech-desc">Utility-first CSS</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon react"><FaReact /></span>
                                <span className="tech-name">React</span>
                                <span className="tech-desc">UI Library</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon nextjs"><SiNextdotjs /></span>
                                <span className="tech-name">Next.js</span>
                                <span className="tech-desc">React Framework</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon nodejs"><FaNodeJs /></span>
                                <span className="tech-name">Node.js</span>
                                <span className="tech-desc">Runtime Env</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon python"><FaPython /></span>
                                <span className="tech-name">Python</span>
                                <span className="tech-desc">Backend &amp; AI</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon laravel"><FaLaravel /></span>
                                <span className="tech-name">Laravel</span>
                                <span className="tech-desc">PHP Framework</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon aws"><FaAws /></span>
                                <span className="tech-name">AWS</span>
                                <span className="tech-desc">Cloud Services</span>
                            </div>
                            <div className="tech-card">
                                <span className="tech-icon java"><FaJava /></span>
                                <span className="tech-name">Java</span>
                                <span className="tech-desc">Object-Oriented Programming</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Journey Section */}
                <div className="learning-journey-section">
                    <div className="learning-card">
                        <div className="learning-header">
                            <span className="learning-icon"><FaBook /></span>
                            <h3 className="learning-title">My Learning Journey</h3>
                        </div>
                        <p className="learning-text">
                            My learning journey is driven by curiosity and a desire to understand how systems work behind the scenes. I embrace challenges as opportunities to grow, constantly improving my coding and problem-solving skills. With every new technology I explore, I move closer to becoming a confident and capable software developer.
                        </p>
                        <div className="learning-tags">
                            <span className="learning-tag tag-yellow">Strengthening Programming Fundamentals</span>
                            <span className="learning-tag tag-orange">Exploring React</span>
                            <span className="learning-tag tag-teal">Building Portfolio Projects</span>
                        </div>
                    </div>
                </div>

                {/* Credentials Section (Education & Certifications) */}
                <div className="credentials-section">
                    <div className="credentials-grid">

                        {/* Education Column */}
                        <div className="credential-column">
                            <h3 className="credential-header">Education</h3>

                            <div className="credential-card">
                                <div className="credential-top">
                                    <h4 className="credential-title">Bachelor of Science in Computer Engineering</h4>
                                    <span className="credential-year">2022 – Present</span>
                                </div>
                                <h5 className="credential-issuer">STI College Balagtas</h5>
                                <ul className="credential-list">
                                    <li>Dean’s Lister</li>
                                    <li>Currently strengthening my foundation in programming, databases, and software development.</li>
                                    <li>Continuously improving problem-solving and system design skills through academic and personal projects.</li>
                                </ul>
                            </div>

                            <div className="credential-card">
                                <div className="credential-top">
                                    <h4 className="credential-title">Senior High School – STEM Strand</h4>
                                    <span className="credential-year">2020 – 2022</span>
                                </div>
                                <h5 className="credential-issuer">La Consolacion University Philippines</h5>
                                <ul className="credential-list">
                                    <li>Developed strong analytical and mathematical problem-solving skills.</li>
                                    <li>Built a solid foundation in logic, critical thinking, and technical concepts.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Certifications Column */}
                        <div className="credential-column">
                            <h3 className="credential-header">Certifications</h3>

                            <div className="credential-card">
                                <div className="credential-top">
                                    <h4 className="credential-title">Java Fundamentals - Oracle Academy </h4>
                                    <span className="credential-year">2023</span>
                                </div>
                                <ul className="credential-list">
                                    <li>Learned core Java concepts including object-oriented programming (OOP), variables, data types, loops, conditionals, and basic debugging.</li>
                                    <li>Completed hands-on coding exercises and structured activities to strengthen programming logic and problem-solving skills.</li>
                                    <li>Practiced writing clean and structured Java code.</li>
                                </ul>
                            </div>

                            <div className="credential-card">
                                <div className="credential-top">
                                    <h4 className="credential-title">Ethical Hacking Essentials (EHE) v1 – EC-Council Certification</h4>
                                    <span className="credential-year">2025</span>
                                </div>
                                <ul className="credential-list">
                                    <li>Gained foundational knowledge in cybersecurity, ethical hacking principles, and information security concepts.</li>
                                    <li>Learned about network security, system vulnerabilities, basic penetration testing concepts, and security best practices.</li>
                                    <li>Developed awareness of ethical and legal considerations in cybersecurity.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </div >
    );
}
