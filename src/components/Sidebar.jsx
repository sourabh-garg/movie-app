import {useState} from "react";
import {isMobile} from 'react-device-detect';

const SidebarData = {
    0: [
        {title: "Discover", icon: "/search-blue.svg", active: true},
        {title: "Playlist", icon: "/Vector.svg", active: false},
        {title: "Movie", icon: "/movies.svg", active: false},
        {title: "TV Shows", icon: "/shows.svg", active: false},
        {title: "My List", icon: "/my-list.svg", active: false}
    ],
    1: [
        {title: "Watch Later", icon: "/watch.svg", active: false},
        {title: "Recommended", icon: "/heart.svg", active: false},

    ],
    2: [
        {title: "Settings", icon: "/setting.svg", active: false},
        {title: "Logout", icon: "/logout.svg", active: false},
    ]
};

const UserData = {
    photo: "https://i.ibb.co/0YKsbRW/pexels-pixabay-220453-1.jpg",
    name: "Eric Hoffman"
}


export default function Index({active,updateSidebarState}) {
    let [data] = useState(SidebarData);

    let sideLinks = [];
    for(let key in data){
        let currentList = data[key].map((item) => {
            const {title, active,icon} = item;
           return (<a className={`${active? "active": "" } sidebar-link`} key={title}>
                     <img src={icon} alt={title}/>
                     <p>{title}</p>
                    </a>)
        });
        let list = <div className="link-section">{currentList}</div>;
        sideLinks.push(list);

    }


    return (
        <div className={`${active ? "sidebar-active": ""} sidebar`}>

            <div className="sidebar-inner">
            <div className="user-data">
                <div className="profile-pic">
                    <img src={UserData.photo} alt={UserData.name}/>
                </div>
                <p>{UserData.name}</p>
            </div>

            <div>
                {sideLinks}
            </div>
            </div>
            {isMobile && <div className="sidebar-overlay" onClick={() => {updateSidebarState(false)}}/> }
        </div>
    );
}