import React, { useState } from 'react';
import './Works.css';
import uiDesignPreview from './assets/ui-design-preview.png'; // Placeholder, user needs to add this image
import ProjectModal from './ProjectModal';

export default function Works() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="page-wrapper">
            <section className="works-section page-section" style={{ paddingTop: '80px' }}>
                <div className="works-header">
                    <h2 className="works-section-title">What I’ve Built</h2>
                    <p className="works-section-subtitle">
                        Designing systems that turn ideas into reality.
                    </p>
                </div>
                <div className="works-container">
                    <div className="works-content-left">
                        <h1 className="works-title">Portfolio Website</h1>
                        <p className="works-description">
                            A fully responsive portfolio website designed and developed using React.js. This project demonstrates my understanding of component-based architecture, state management with React Hooks, routing using React Router, and interactive UI animations. It serves as a platform to showcase my skills and growth in front-end development.
                        </p>

                        <div className="works-categories">
                            <div className="category-row">
                                <button className="category-pill active">
                                    <span className="dot active-dot"></span> Portfolio Website
                                </button>
                            </div>
                        </div>

                        <div className="works-pagination">
                            <span className="pagination-dot active"></span>
                            <span className="pagination-text">1 of 1</span>
                        </div>
                    </div>

                    <div className="works-content-right">
                        <div className="works-preview-card" onClick={openModal}>
                            <img src={uiDesignPreview} alt="Portfolio Website Preview" className="works-image" />
                        </div>
                    </div>

                </div>
            </section>

            <ProjectModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
