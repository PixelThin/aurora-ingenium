import React, { useState } from 'react';
import './nav-prompt.css'

const NavPrompt = () => {
    const [prompt, setPrompt] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };

    return (
        <div>
            <textarea
                className="nav-prompt-text-input"
                value={prompt}
                onChange={handleInputChange}
                placeholder="Enter a navigation statement. Example: 'Fly in a circle for 5 seconds and then fly in a rectangle for 5 seconds'"
            />
            <br />
            <button
                className='nav-prompt-button'
            >
                Go
            </button>
        </div>
    );
};

export default NavPrompt;