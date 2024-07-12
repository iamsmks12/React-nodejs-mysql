import React, { useState } from 'react';
import './SubmitPage.css';

function SubmitPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });
            const data = await response.json();
            alert(data.message); // Show success message
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding user');
        }
    };

    return (
        <div className="SubmitPage">
			<h2>Submit Page</h2>	
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SubmitPage;
