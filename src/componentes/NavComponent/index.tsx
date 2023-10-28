import React from 'react';
import './style.css';

interface NavProps {
    title: string;
    }
function NavComponent(props: NavProps) {
    return (
        <button>
            {props.title}           
        </button>
    );
}

export default NavComponent;