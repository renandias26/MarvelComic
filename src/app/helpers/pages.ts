import { IPages } from "../interfaces/ipages";
import { faPenNib, faUsers, faBook } from "@fortawesome/free-solid-svg-icons";

export const PAGES: IPages[] = [

    {
        group: 'principal',
        pages: [
            {
                title: 'Creators',
                icon: faPenNib,
                path: 'creators',
                role: 'none'
            },
            {
                title: 'Comics',
                icon: faBook,
                path: 'comics',
                role: 'none'
            },
            {
                title: 'Characters',
                icon: faUsers,
                path: 'heroes',
                role: 'none'
            },
            // {
            //     title: 'Events',
            //     icon: 'home',
            //     path: 'events',
            //     role: 'none'
            // },
            // {
            //     title: 'Series',
            //     icon: 'home',
            //     path: 'series',
            //     role: 'none'
            // },
            // {
            //     title: 'Stories',
            //     icon: 'home',
            //     path: 'stories',
            //     role: 'none'
            // },
        ]
    }

]