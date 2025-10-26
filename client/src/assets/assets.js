import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Bhurban",
    "Peshwar",
    "Quetta",
    "Gilgit, Gilgit-Baltistan",
    "Faisalabad"
];

// TripNest Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { 
        _id: 1, 
        title: "Weekend Wanderer Deal", 
        description: "Take a spontaneous break from the city and unwind at handpicked countryside retreats. Enjoy 20% off on stays that blend comfort, charm, and serenity — perfect for a quick escape that feels like a full vacation.", 
        priceOff: 20, 
        expiryDate: "Nov 15", 
        image: exclusiveOfferCardImg1 
    },
    { 
        _id: 2, 
        title: "Couples Paradise Offer", 
        description: "Celebrate love with our romantic beachfront stays, a complimentary candlelight dinner, and rejuvenating spa sessions. TripNest makes every moment together unforgettable with this exclusive 25% discount.", 
        priceOff: 25, 
        expiryDate: "Dec 10", 
        image: exclusiveOfferCardImg2 
    },
    { 
        _id: 3, 
        title: "Adventure Escape Bundle", 
        description: "Fuel your sense of adventure with mountain lodges and thrilling outdoor experiences. Book 30 days in advance and save 30% on stays that bring you closer to nature — from sunrise hikes to cozy nights by the fire.", 
        priceOff: 30, 
        expiryDate: "Dec 20", 
        image: exclusiveOfferCardImg3 
    },
]



// TripNest Testimonials Dummy Data
export const testimonials = [
    { 
        id: 1, 
        name: "Ayesha Khan", 
        address: "Peshwar, Pakistan", 
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200", 
        rating: 5, 
        review: "TripNest made our weekend trip completely stress-free! The booking process was quick, and the stay exceeded our expectations. I loved the friendly service, curated options, and how everything felt perfectly tailored for a comfortable and memorable experience." 
    },
    { 
        id: 2, 
        name: "Hamza Ahmed", 
        address: "Karachi, Pakistan", 
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200", 
        rating: 4, 
        review: "I’ve used many travel sites before, but TripNest truly stands out. The platform is completely stress-free! smooth, user-friendly, and filled with unique stays. I discovered amazing local hotels that perfectly matched my style and budget without any hassle or confusion." 
    },
    { 
        id: 3, 
        name: "Sara Malik", 
        address: "Islamabad, Pakistan", 
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200", 
        rating: 5, 
        review: "TripNest exceeded every expectation! The hotel suggestions were spot-on, the customer support was responsive, and the whole experience felt effortless. It’s the perfect choice for travelers who value comfort, quality, and a bit of adventure in every trip." 
    }
]




// TripNest Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// TripNest Room Details Data
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// TripNest Hotel Dummy Data
export const hotelDummyData = [
  {
    "_id": "h1",
    "name": "Pearl Continental",
    "address": "Club Road, Karachi",
    "contact": "+0123456789",
    "owner": userDummyData,
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
  },
  {
    "_id": "h2",
    "name": "Hotel One",
    "address": "Main Boulevard, Lahore",
    "contact": "+0987654321",
    "owner": userDummyData,
    "createdAt": "2025-04-12T10:15:33.123Z",
    "updatedAt": "2025-04-12T10:15:33.123Z",
    "__v": 0
  },
  {
    "_id": "h3",
    "name": "Serena Hotel",
    "address": "F-5/1, Islamabad",
    "contact": "+0213456789",
    "owner": userDummyData,
    "createdAt": "2025-04-15T08:45:22.456Z",
    "updatedAt": "2025-04-15T08:45:22.456Z",
    "__v": 0
  },
  {
    "_id": "h4",
    "name": "Flashman’s Hotel",
    "address": "Mall Road, Rawalpindi",
    "contact": "+0511122334",
    "owner": userDummyData,
    "createdAt": "2025-04-18T09:22:41.123Z",
    "updatedAt": "2025-04-18T09:22:41.123Z",
    "__v": 0
  },
  {
    "_id": "h5",
    "name": "Pearl Continental Bhurban",
    "address": "Murree Hills, Bhurban",
    "contact": "+0573344556",
    "owner": userDummyData,
    "createdAt": "2025-04-19T08:50:11.987Z",
    "updatedAt": "2025-04-19T08:50:11.987Z",
    "__v": 0
  },
  {
    "_id": "h6",
    "name": "Pearl Continental Peshawar",
    "address": "Khyber Road, Peshawar",
    "contact": "+0915566778",
    "owner": userDummyData,
    "createdAt": "2025-04-21T10:12:01.456Z",
    "updatedAt": "2025-04-21T10:12:01.456Z",
    "__v": 0
  },
  {
    "_id": "h7",
    "name": "Hotel Serena Quetta",
    "address": "Shahrah-e-Zarghoon, Quetta",
    "contact": "+0819988776",
    "owner": userDummyData,
    "createdAt": "2025-04-22T07:33:15.222Z",
    "updatedAt": "2025-04-22T07:33:15.222Z",
    "__v": 0
  },
  {
    "_id": "h8",
    "name": "Serena Hotel Gilgit",
    "address": "Jutial, Gilgit, Gilgit-Baltistan",
    "contact": "+0581112233",
    "owner": userDummyData,
    "createdAt": "2025-04-23T11:15:44.879Z",
    "updatedAt": "2025-04-23T11:15:44.879Z",
    "__v": 0
  },
  {
    "_id": "h9",
    "name": "Avari Express Faisalabad",
    "address": "Susan Road, Faisalabad",
    "contact": "+0414455667",
    "owner": userDummyData,
    "createdAt": "2025-04-25T09:10:19.000Z",
    "updatedAt": "2025-04-25T09:10:19.000Z",
    "__v": 0
  }
];


//  TripNest Rooms Dummy Data
export const roomsDummyData = [
  {
    "_id": "r1",
    "hotel": [hotelDummyData[0]], // Karachi
    "roomType": "Executive Suite",
    "pricePerNight": "25,999",
    "amenities": ["Free WiFi", "Room Service", "Pool Access"],
    "images": [roomImg1, roomImg2, roomImg3, roomImg4],
    "isAvailable": true
  },
  {
    "_id": "r2",
    "hotel": [hotelDummyData[1]], // Lahore
    "roomType": "Luxury Double",
    "pricePerNight": "22,499",
    "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
    "images": [roomImg2, roomImg3, roomImg1, roomImg4],
    "isAvailable": true
  },
  {
    "_id": "r3",
    "hotel": [hotelDummyData[2]], // Islamabad
    "roomType": "Deluxe King Room",
    "pricePerNight": "27,999",
    "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
    "images": [roomImg3, roomImg4, roomImg1, roomImg2],
    "isAvailable": true
  },
  {
    "_id": "r4",
    "hotel": [hotelDummyData[3]], // Rawalpindi
    "roomType": "Standard Room",
    "pricePerNight": "18,499",
    "amenities": ["Room Service", "Mountain View", "Pool Access"],
    "images": [roomImg4, roomImg1, roomImg2, roomImg3],
    "isAvailable": true
  },
  {
    "_id": "r5",
    "hotel": [hotelDummyData[4]], // Bhurban
    "roomType": "Hillside View Suite",
    "pricePerNight": "30,999",
    "amenities": ["Mountain View", "Room Service", "Pool Access"],
    "images": [roomImg1, roomImg4, roomImg2, roomImg3],
    "isAvailable": true
  },
  {
    "_id": "r6",
    "hotel": [hotelDummyData[5]], // Peshawar
    "roomType": "Premium Room",
    "pricePerNight": "20,999",
    "amenities": ["Room Service", "Free WiFi", "Free Breakfast"],
    "images": [roomImg2, roomImg1, roomImg3, roomImg4],
    "isAvailable": true
  },
  {
    "_id": "r7",
    "hotel": [hotelDummyData[6]], // Quetta
    "roomType": "Deluxe Double",
    "pricePerNight": "23,499",
    "amenities": ["Room Service", "Mountain View", "Free Breakfast"],
    "images": [roomImg3, roomImg2, roomImg4, roomImg1],
    "isAvailable": true
  },
  {
    "_id": "r8",
    "hotel": [hotelDummyData[7]], // Gilgit
    "roomType": "Mountain Suite",
    "pricePerNight": "35,999",
    "amenities": ["Mountain View", "Free WiFi", "Room Service"],
    "images": [roomImg4, roomImg3, roomImg2, roomImg1],
    "isAvailable": true
  },
  {
    "_id": "r9",
    "hotel": [hotelDummyData[8]], // Faisalabad
    "roomType": "Business Suite",
    "pricePerNight": "21,499",
    "amenities": ["Free WiFi", "Room Service", "Free Breakfast"],
    "images": [roomImg2, roomImg4, roomImg1, roomImg3],
    "isAvailable": true
  }
];


// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/