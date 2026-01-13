import { Timeline } from "@/components/ui/timeline";

const TRIP_DATA = {
    budget: "Low",
    destination: "Mumbai",
    duration: "5 Days",
    hotels: [
        {
            description:
                "Budget-friendly hotel with clean rooms, located close to Dadar Station.",
            geo_coordinates: {
                latitude: 19.013,
                longitude: 72.847,
            },
            hotel_address:
                "Next to Dadar Station, Dadar East, Mumbai",
            hotel_image_url:
                "https://example.com/hotel-surestay.jpg",
            hotel_name: "Hotel SureStay",
            price_per_night: "$30",
            rating: 4,
        },
        {
            description:
                "Comfortable stay with in-house dining, located near popular shopping areas.",
            geo_coordinates: {
                latitude: 19.006,
                longitude: 72.8288,
            },
            hotel_address: "Near Atria Mall, Worli, Mumbai",
            hotel_image_url:
                "https://example.com/residency-hotel.jpg",
            hotel_name: "Residency Hotel",
            price_per_night: "$40",
            rating: 4.5,
        },
        {
            description:
                "Ideal for travelers, close to the airport with easy access to local eateries.",
            geo_coordinates: {
                latitude: 19.0998,
                longitude: 72.876,
            },
            hotel_address:
                "Near Mumbai Airport, Andheri East, Mumbai",
            hotel_image_url:
                "https://example.com/hotel-transit.jpg",
            hotel_name: "Hotel Transit",
            price_per_night: "$35",
            rating: 4.2,
        },
    ],
    itinerary: [
        {
            activities: [
                {
                    best_time_to_visit: "Evening",
                    geo_coordinates: {
                        latitude: 19.103,
                        longitude: 72.8258,
                    },
                    place_address: "Juhu Tara Rd, Juhu, Mumbai",
                    place_details:
                        "Famous beach known for its street food and vibrant atmosphere.",
                    place_image_url:
                        "https://example.com/juhu-beach.jpg",
                    place_name: "Juhu Beach",
                    ticket_pricing: "Free",
                    time_travel_each_location: "1 hour from hotel",
                },
            ],
            best_time_to_visit_day: "Evening",
            day: 1,
            day_plan: "Explore street food in Juhu Beach",
        },
        {
            activities: [
                {
                    best_time_to_visit: "Morning",
                    geo_coordinates: {
                        latitude: 19.0144,
                        longitude: 72.8266,
                    },
                    place_address:
                        "Siddhivinayak Temple Rd, Prabhadevi, Mumbai",
                    place_details:
                        "One of the most famous Ganesh temples in Mumbai.",
                    place_image_url:
                        "https://example.com/siddhivinayak.jpg",
                    place_name: "Siddhivinayak Temple",
                    ticket_pricing: "Free",
                    time_travel_each_location:
                        "30 minutes from hotel",
                },
                {
                    best_time_to_visit: "Afternoon",
                    geo_coordinates: {
                        latitude: 18.9634,
                        longitude: 72.8263,
                    },
                    place_address: "Marine Lines, Mumbai",
                    place_details:
                        "Historic ice cream parlour famous for its unique ice cream sandwiches.",
                    place_image_url:
                        "https://example.com/k-rustoms.jpg",
                    place_name: "K. Rustom's Ice Cream",
                    ticket_pricing: "Approx. $2",
                    time_travel_each_location:
                        "15 minutes from Siddhivinayak Temple",
                },
            ],
            best_time_to_visit_day: "Morning",
            day: 2,
            day_plan:
                "Visit Siddhivinayak Temple and explore local snacks",
        },
        {
            activities: [
                {
                    best_time_to_visit: "Evening",
                    geo_coordinates: {
                        latitude: 18.9662,
                        longitude: 72.8154,
                    },
                    place_address: "Chowpatty, Marine Drive, Mumbai",
                    place_details:
                        "Iconic beach known for its bhel puri and other local snacks.",
                    place_image_url:
                        "https://example.com/chowpatty.jpg",
                    place_name: "Chowpatty Beach",
                    ticket_pricing: "Free",
                    time_travel_each_location:
                        "30 minutes from hotel",
                },
            ],
            best_time_to_visit_day: "Evening",
            day: 3,
            day_plan:
                "Visit Chowpatty Beach for some evening snacks",
        },
        {
            activities: [
                {
                    best_time_to_visit: "Afternoon",
                    geo_coordinates: {
                        latitude: 18.9612,
                        longitude: 72.8347,
                    },
                    place_address:
                        "Mahatma Jyotiba Phule Marg, T. M. S. No. 84, Mumbai",
                    place_details:
                        "Famous market for shopping and tasting local food.",
                    place_image_url:
                        "https://example.com/crawford-market.jpg",
                    place_name: "Crawford Market",
                    ticket_pricing: "Free entry",
                    time_travel_each_location:
                        "45 minutes from hotel",
                },
            ],
            best_time_to_visit_day: "Afternoon",
            day: 4,
            day_plan:
                "Explore the local markets and try street food",
        },
        {
            activities: [
                {
                    best_time_to_visit: "Morning",
                    geo_coordinates: {
                        latitude: 19.0146,
                        longitude: 72.8489,
                    },
                    place_address: "Dharavi, Mumbai",
                    place_details:
                        "One of the largest slums in Asia, known for its local food tours.",
                    place_image_url:
                        "https://example.com/dharavi.jpg",
                    place_name: "Dharavi",
                    ticket_pricing:
                        "Approx. $10 for guided food tour",
                    time_travel_each_location: "1 hour from hotel",
                },
            ],
            best_time_to_visit_day: "Morning",
            day: 5,
            day_plan:
                "Visit Dharavi and explore local culinary experiences",
        },
    ],
    people_size: "Solo",
}

const Itinerary = () => {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Built and launched Aceternity UI and Aceternity UI Pro from scratch
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/templates/startup-1.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Card grid component
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Startup template Aceternity
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Random file upload lol
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} tripData={TRIP_DATA} />
        </div>
    );

}

export default Itinerary