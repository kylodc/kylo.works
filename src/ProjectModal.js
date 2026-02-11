import React from 'react';
import './ProjectModal.css';

export default function ProjectModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2 className="modal-title">Portfolio Website</h2>
          <p className="modal-subtitle">1 React.js project</p>
        </div>

        <div className="modal-body">
          <div className="project-card">
            <div className="project-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#7e5fff" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x="9" y="9" x2="15" y2="9"></line>
                <line x="9" y="15" x2="15" y2="15"></line>
              </svg>
            </div>
            <div className="project-info">
              <h3 className="project-title">Portfolio Website Framework</h3>
              <p className="project-subtitle">Design Framework</p>
            </div>
          </div>

          <div className="project-description">
            <p>A modular design framework for portfolio websites featuring reusable components, consistent design patterns, and flexible layouts that can be adapted for various creative professionals.</p>
          </div>

          <div className="project-features">
            <h4>Key Features</h4>
            <ul className="features-list">
              <li><span className="checkmark">✓</span> Modular Component Library</li>
              <li><span className="checkmark">✓</span> Consistent Design Tokens</li>
              <li><span className="checkmark">✓</span> Flexible Layout Grids</li>
              <li><span className="checkmark">✓</span> Reusable Page Templates</li>
              <li><span className="checkmark">✓</span> Responsive Breakpoints</li>
              <li><span className="checkmark">✓</span> Interactive Prototype Patterns</li>
            </ul>
          </div>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">Design Framework</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value status-incomplete">Incomplete</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Design Tools</span>
              <span className="meta-value">Auto Layout, Component Library, Design System</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
