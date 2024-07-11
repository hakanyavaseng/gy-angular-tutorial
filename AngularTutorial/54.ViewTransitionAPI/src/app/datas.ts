export const persons : any[] = [
    {
        id: 1,
        name: "Hakan",
        photo: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Mehmet",
        photo: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        name: "Ayşe",
        photo: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Ayşe",
        photo: "https://randomuser.me/api/portraits/men/4.jpg"
    }
].map(person => {
    return {
        ...person,
        viewTransitionName : `view-transition-name: person-${person.id}`
    }
})