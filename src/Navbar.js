import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div class="navbar">
            <h1>Prince George's County Crime Map</h1>
            <nav element = "nav">
                <ul>
                    <li><span>Home</span></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Crime Map</a></li>
                    <li><a href="#">Statistics</a></li>
                </ul>
            </nav>
        </div>
    )
}
