import React , { useState }from 'react';
import { Link } from 'react-router-dom';

function TheNav() {
    const [navlinks] = useState([
        {id: "1", active: false, image: "https://img.icons8.com/cotton/100/000000/greenery-1--v2.png", path: '/'},
        {id: "2", active: false, image: "https://img.icons8.com/plasticine/100/000000/watering-can.png", path: '/upload'},
        {id: "3", active: false, image: "https://img.icons8.com/doodle/100/000000/gender-neutral-user.png", path: '/profile/1'},
    ])
    return (
        <div className="absolute bottom-0 border-t border-solid border-gray-300 w-full py-2 flex justify-around thenav bg-white z-50">
            {
                navlinks.map(nav =>(
                    <div key={nav.id}>
                        <Link to={nav.path}>
                            <button className="rounded-full hover:bg-green-100 p-3 focus:outline-none">
                                <img src={nav.image} width="40" alt="icon" />
                            </button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default TheNav
