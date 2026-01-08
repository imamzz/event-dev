export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};

export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "React Summit US 2025",
        slug: "react-summit-us-2025",
        location: "San Francisco, CA, USA",
        date: "2025-02-02",
        time: "09:00 AM"
    },
    {
        image: "/images/event2.png",
        title: "Vue.js Conference 2025",
        slug: "vuejs-conference-2025",
        location: "New York, NY, USA",
        date: "2025-03-15",
        time: "10:00 AM"
    },
    {
        image: "/images/event3.png",
        title: "Angular Connect 2025",
        slug: "angular-connect-2025",
        location: "London, UK",
        date: "2025-04-20",
        time: "02:00 PM"
    },
    {
        image: "/images/event4.png",
        title: "Node.js World 2025",
        slug: "nodejs-world-2025",
        location: "Berlin, Germany",
        date: "2025-05-10",
        time: "11:00 AM"
    },
    {
        image: "/images/event5.png",
        title: "Web Dev Expo 2025",
        slug: "web-dev-expo-2025",
        location: "Tokyo, Japan",
        date: "2025-06-05",
        time: "08:00 AM"
    },
    {
        image: "/images/event6.png",
        title: "JavaScript Fest 2025",
        slug: "javascript-fest-2025",
        location: "Paris, France",
        date: "2025-07-12",
        time: "03:00 PM"
    },
    {
        image: "/images/event-full.png",
        title: "Frontend Masters 2025",
        slug: "frontend-masters-2025",
        location: "Toronto, Canada",
        date: "2025-08-22",
        time: "01:00 PM"
    }
]