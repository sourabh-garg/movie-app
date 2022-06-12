import {useState} from "react";

const SidebarData = {
    0: [
        {title: "Discover", icon: "", active: true},
        {title: "Playlist", icon: "", active: false},
        {title: "Movie", icon: "", active: false},
        {title: "TV Shows", icon: "", active: false},
        {title: "My List", icon: "", active: false}
    ],
    1: [
        {title: "Watch Later", icon: "", active: false},
        {title: "Recommended", icon: "", active: false},

    ],
    2: [
        {title: "Settings", icon: "", active: false},
        {title: "Logout", icon: "", active: false},
    ]
};

const UserData = {
    photo: "https://i.ibb.co/0YKsbRW/pexels-pixabay-220453-1.jpg",
    name: "Eric Hoffman"
}


export default function Index() {
    let [data] = useState(SidebarData);


    let sideLinks = [];
    for(let key in data){
        let currentList = data[key].map((item) => {
            const {title, active} = item;
           return (<a className={`${active? "active": "" } sidebar-link`} key={title}> <p>{title}</p> </a>)
        });
        let list = <div className="link-section">{currentList}</div>;
        sideLinks.push(list);

    }


    return (
        <div className="sidebar">

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
    );
}