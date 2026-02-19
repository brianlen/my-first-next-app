"use client";
import dynamic from "next/dynamic";
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Box,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Tabs,
  Tab,
  Button,
  Paper,
  Link,
  Grid,
} from '@mui/material';

// Import MUI Icons
import PodcastsIcon from '@mui/icons-material/Podcasts';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StarIcon from '@mui/icons-material/Star';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MovieIcon from '@mui/icons-material/Movie';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AirIcon from '@mui/icons-material/Air';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BedIcon from '@mui/icons-material/Bed';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MedicationIcon from '@mui/icons-material/Medication';
import LightModeIcon from '@mui/icons-material/LightMode';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';

// Import country flags (install with: bun install country-flag-icons)
import US from 'country-flag-icons/react/3x2/US';
import MX from 'country-flag-icons/react/3x2/MX';
import FR from 'country-flag-icons/react/3x2/FR';
import KR from 'country-flag-icons/react/3x2/KR';
import VN from 'country-flag-icons/react/3x2/VN';
import JP from 'country-flag-icons/react/3x2/JP';
import DE from 'country-flag-icons/react/3x2/DE';
import ES from 'country-flag-icons/react/3x2/ES';
import CA from 'country-flag-icons/react/3x2/CA';
import GB from 'country-flag-icons/react/3x2/GB';

// Import custom ThemeToggle component
import ThemeToggle from './components/ThemeToggle';

// ==================== DATA CONSTANTS ====================

const workExperience = [
  {
    title: "Engineer, United States Space Force",
    period: "Apr 2023 - Jan 2026",
    location: "Kirtland AFB, Albuquerque, NM"
  },
  {
    title: "Analyst, United States Space Force",
    period: "Apr 2021 - Apr 2023",
    location: "Wright-Patterson AFB, Dayton, OH"
  },
  {
    title: "Project Manager, United States Air Force",
    period: "Oct 2016 - Jul 2019",
    location: "Los Angeles AFB, El Segundo, CA"
  }
];

const education = [
  {
    degree: "Coding Bootcamp",
    institution: "Galvanize Inc, Boulder, CO",
    year: "August 2024"
  },
  {
    degree: "Master of Science in Electrical Engineering",
    institution: "Air Force Institute of Technology, Dayton, OH",
    year: "March 2021"
  },
  {
    degree: "Bachelor of Science in Aerospace Engineering",
    institution: "University of Michigan, Ann Arbor, MI",
    year: "May 2015",
    honors: "Cum Laude"
  }
];

const technicalSkills = [
  "C++", "MATLAB", "Python", "Julia", "Javascript", "Typescript",
  "Node.js", "React.js", "Next.js", "MUI", "Git", "Docker", "PostgreSQL", "PyTorch"
];

const aiSkills = [
  "ChatGPT", "Perplexity.ai", "Anthropic Claude", "Microsoft Copilot",
  "Cursor", "Gemini 2.5 Pro", "Palantir Foundry + AIP", "Ontology SDK", "Firebase AI Studio"
];

const keySkills = [
  "Space Systems Engineering", "Intelligence Analysis", "Project Management",
  "Software Development", "Risk Assessment", "Satellite Operations",
  "Technical Intelligence", "Cybersecurity", "Team Leadership"
];

const languages = [
  { name: "English", level: "Native", years: "Lifetime", flag: US },
  { name: "Spanish", level: "Novice", years: "2 years", flag: MX },
  { name: "French", level: "Basic", years: "1 year", flag: FR },
  { name: "Korean", level: "Basic", years: "1 year", flag: KR },
  { name: "Vietnamese", level: "Basic", years: "1 year", flag: VN },
  { name: "Japanese", level: "Beginner", years: "6 months", flag: JP }
];

const marathons = [
  { name: "Los Angeles Marathon", year: 2019, time: "5:22:44" },
  { name: "Air Force Marathon", year: 2019, time: "5:21:33" },
  { name: "Air Force Marathon", year: 2020, time: "5:23:52" },
  { name: "Air Force Marathon", year: 2021, time: "5:23:03" },
  { name: "Marine Corps Marathon", year: 2021, time: "5:28:40" },
  { name: "Space Coast Marathon", year: 2021, time: "4:59:30" },
  { name: "Disney Marathon", year: 2022, time: "5:32:16" },
  { name: "Air Force Marathon", year: 2022, time: "5:54:07" },
  { name: "Air Force Marathon", year: 2023, time: "5:44:12" },
  { name: "Duke City Marathon", year: 2023, time: "5:16:05" },
  { name: "Denver Colfax Marathon", year: 2024, time: "5:55:32" },
  { name: "Air Force Marathon", year: 2024, time: "5:58:39" },
  { name: "Duke City Marathon", year: 2024, time: "5:23:59" },
  { name: "Mesa Marathon", year: 2025, time: "5:42:32" },
  { name: "Bataan Memorial Death March", year: 2025, time: "6:26:48" },
  { name: "Oklahoma City Memorial Marathon", year: 2025, time: "5:30:18" },
  { name: "Air Force Marathon", year: 2025, time: "6:39:56" },
  { name: "Duke City Marathon", year: 2025, time: "6:08:49" },
  { name: "Albuquerque Fiesta Marathon", year: 2025, time: "6:00:21" },
  { name: "Bataan Memorial Death March (35-lbs rucking)", year: 2026, time: "6:30:00" },
  { name: "Albuquerque Marathon", year: 2026, time: "5:30:00" }
];

const placesLived = [
  {
    id: 1,
    city: "Ann Arbor, MI",
    description: "University of Michigan",
    years: "2011-2015",
    lat: 42.2808,
    lng: -83.7430,
  },
  {
    id: 2,
    city: "Cocoa Beach, FL",
    description: "NASA Kennedy Space Center",
    years: "2013",
    lat: 28.3200,
    lng: -80.6076,
  },
  {
    id: 3,
    city: "El Segundo, CA",
    description: "Los Angeles AFB",
    years: "2016-2019",
    lat: 33.9192,
    lng: -118.4165,
  },
  {
    id: 4,
    city: "Dayton, OH",
    description: "Wright-Patterson AFB",
    years: "2019-2023",
    lat: 39.7589,
    lng: -84.1916,
  },
  {
    id: 5,
    city: "Albuquerque, NM",
    description: "Kirtland AFB",
    years: "2023-2026",
    lat: 35.0844,
    lng: -106.6504,
  },
];

const citiesVisited = [
  // { id: 1, city: "Los Angeles", country: "USA", year: "1992–2010", lat: 34.0522, lng: -118.2437 },
  { id: 2, city: "Las Vegas", country: "USA", year: "2018", lat: 36.1699, lng: -115.1398 },
  // { id: 3, city: "Ann Arbor", country: "USA", year: "2010–2015", lat: 42.2808, lng: -83.7430 },
  { id: 4, city: "Detroit", country: "USA", year: "2013", lat: 42.3314, lng: -83.0458 },
  { id: 5, city: "Orlando", country: "USA", year: "2013", lat: 28.5383, lng: -81.3792 },
  // { id: 6, city: "Cape Canaveral", country: "USA", year: "2013", lat: 28.3922, lng: -80.6077 },
  { id: 7, city: "Montgomery", country: "USA", year: "2016", lat: 32.3668, lng: -86.2999 },
  { id: 8, city: "Denver", country: "USA", year: "2016", lat: 39.7392, lng: -104.9903 },
  { id: 9, city: "Newark", country: "USA", year: "2016", lat: 40.7357, lng: -74.1724 },
  { id: 10, city: "Manhattan", country: "USA", year: "2016", lat: 40.7831, lng: -73.9712 },
  { id: 11, city: "Boston", country: "USA", year: "2017", lat: 42.3601, lng: -71.0589 },
  { id: 12, city: "Clearwater", country: "USA", year: "2017", lat: 27.9659, lng: -82.8001 },
  { id: 13, city: "Miami", country: "USA", year: "2017", lat: 25.7617, lng: -80.1918 },
  { id: 14, city: "Tokyo", country: "Japan", year: "2018", lat: 35.6762, lng: 139.6503 },
  { id: 15, city: "Osaka", country: "Japan", year: "2018", lat: 34.6937, lng: 135.5023 },
  { id: 16, city: "Kyoto", country: "Japan", year: "2018", lat: 35.0116, lng: 135.7681 },
  { id: 17, city: "Hiroshima", country: "Japan", year: "2018", lat: 34.3853, lng: 132.4553 },
  { id: 18, city: "Washington DC", country: "USA", year: "2018", lat: 38.9072, lng: -77.0369 },
  { id: 19, city: "Phoenix", country: "USA", year: "2018", lat: 33.4484, lng: -112.0740 },
  { id: 20, city: "San Diego", country: "USA", year: "2019", lat: 32.7157, lng: -117.1611 },
  { id: 21, city: "San Francisco", country: "USA", year: "2019", lat: 37.7749, lng: -122.4194 },
  { id: 22, city: "Berlin", country: "Germany", year: "2019", lat: 52.5200, lng: 13.4050 },
  { id: 23, city: "Munich", country: "Germany", year: "2019", lat: 48.1351, lng: 11.5820 },
  { id: 24, city: "Barcelona", country: "Spain", year: "2019", lat: 41.3851, lng: 2.1734 },
  { id: 25, city: "Madrid", country: "Spain", year: "2019", lat: 40.4168, lng: -3.7038 },
  { id: 26, city: "Yosemite", country: "USA", year: "2019", lat: 37.8651, lng: -119.5383 },
  { id: 27, city: "Portland", country: "USA", year: "2019", lat: 45.5051, lng: -122.6750 },
  { id: 28, city: "Seattle", country: "USA", year: "2019", lat: 47.6062, lng: -122.3321 },
  { id: 29, city: "Yellowstone", country: "USA", year: "2019", lat: 44.4280, lng: -110.5885 },
  { id: 30, city: "Mt Rushmore", country: "USA", year: "2019", lat: 43.8791, lng: -103.4591 },
  { id: 31, city: "Minneapolis", country: "USA", year: "2019", lat: 44.9778, lng: -93.2650 },
  { id: 32, city: "Milwaukee", country: "USA", year: "2019", lat: 43.0389, lng: -87.9065 },
  { id: 33, city: "Chicago", country: "USA", year: "2019", lat: 41.8781, lng: -87.6298 },
  { id: 34, city: "Cleveland", country: "USA", year: "2019", lat: 41.4993, lng: -81.6944 },
  { id: 35, city: "Columbus", country: "USA", year: "2019", lat: 39.9612, lng: -82.9988 },
  // { id: 36, city: "Dayton", country: "USA", year: "2021", lat: 39.7589, lng: -84.1916 },
  { id: 37, city: "Cincinnati", country: "USA", year: "2021", lat: 39.1031, lng: -84.5120 },
  { id: 38, city: "Indianapolis", country: "USA", year: "2021", lat: 39.7684, lng: -86.1581 },
  { id: 39, city: "Pensacola", country: "USA", year: "2021", lat: 30.4213, lng: -87.2169 },
  { id: 40, city: "New Orleans", country: "USA", year: "2021", lat: 29.9511, lng: -90.0715 },
  { id: 41, city: "Dallas", country: "USA", year: "2021", lat: 32.7767, lng: -96.7970 },
  { id: 42, city: "Fort Worth", country: "USA", year: "2021", lat: 32.7555, lng: -97.3308 },
  { id: 43, city: "Niagara Falls", country: "USA/Canada", year: "2022", lat: 43.0962, lng: -79.0377 },
  { id: 44, city: "Toronto", country: "Canada", year: "2022", lat: 43.6532, lng: -79.3832 },
  { id: 45, city: "Ottawa", country: "Canada", year: "2022", lat: 45.4215, lng: -75.6972 },
  { id: 46, city: "Montreal", country: "Canada", year: "2022", lat: 45.5017, lng: -73.5673 },
  { id: 47, city: "Quebec City", country: "Canada", year: "2022", lat: 46.8139, lng: -71.2080 },
  { id: 48, city: "Pittsburgh", country: "USA", year: "2022", lat: 40.4406, lng: -79.9959 },
  { id: 49, city: "Baltimore", country: "USA", year: "2022", lat: 39.2904, lng: -76.6122 },
  { id: 50, city: "Philadelphia", country: "USA", year: "2022", lat: 39.9526, lng: -75.1652 },
  { id: 51, city: "New York", country: "USA", year: "2022", lat: 40.7128, lng: -74.0060 },
  // { id: 52, city: "Albuquerque", country: "USA", year: "2023", lat: 35.0844, lng: -106.6504 },
  { id: 53, city: "Seward", country: "USA", year: "2023", lat: 60.1042, lng: -149.4418 },
  { id: 54, city: "Anchorage", country: "USA", year: "2023", lat: 61.2181, lng: -149.9003 },
  { id: 55, city: "El Paso", country: "USA", year: "2023", lat: 31.7619, lng: -106.4850 },
  { id: 56, city: "Grand Canyon", country: "USA", year: "2023", lat: 36.0544, lng: -112.1401 },
  { id: 57, city: "London", country: "United Kingdom", year: "2023", lat: 51.5074, lng: -0.1278 },
  { id: 58, city: "Paris", country: "France", year: "2024", lat: 48.8566, lng: 2.3522 },
  { id: 59, city: "Colorado Springs", country: "USA", year: "2024", lat: 38.8339, lng: -104.8214 },
  { id: 60, city: "Oklahoma City", country: "USA", year: "2024", lat: 35.4676, lng: -97.5164 },
  { id: 61, city: "Tulsa", country: "USA", year: "2024", lat: 36.1540, lng: -95.9928 },
  { id: 62, city: "Little Rock", country: "USA", year: "2024", lat: 34.7465, lng: -92.2896 },
  { id: 63, city: "Memphis", country: "USA", year: "2024", lat: 35.1495, lng: -90.0490 },
  { id: 64, city: "Huntsville", country: "USA", year: "2024", lat: 34.7304, lng: -86.5861 },
  { id: 65, city: "Nashville", country: "USA", year: "2024", lat: 36.1627, lng: -86.7816 },
  { id: 66, city: "Louisville", country: "USA", year: "2024", lat: 38.2527, lng: -85.7585 },
  { id: 67, city: "St Louis", country: "USA", year: "2024", lat: 38.6270, lng: -90.1994 },
  { id: 68, city: "Kansas City", country: "USA", year: "2024", lat: 39.0997, lng: -94.5786 },
  { id: 69, city: "Seoul", country: "South Korea", year: "2024", lat: 37.5665, lng: 126.9780 },
  { id: 70, city: "Busan", country: "South Korea", year: "2025", lat: 35.1796, lng: 129.0756 },
  { id: 71, city: "Syracuse", country: "USA", year: "2025", lat: 43.0481, lng: -76.1474 },
  { id: 72, city: "Rome", country: "USA", year: "2025", lat: 43.2128, lng: -75.4557 },
  { id: 73, city: "Avon Park", country: "USA", year: "2025", lat: 27.5964, lng: -81.5059 },
  { id: 74, city: "Tampa", country: "USA", year: "2025", lat: 27.9506, lng: -82.4572 },
  { id: 75, city: "Ho Chi Minh City", country: "Vietnam", year: "2025", lat: 10.8231, lng: 106.6297 },
  { id: 76, city: "Hanoi", country: "Vietnam", year: "2026", lat: 21.0285, lng: 105.8542 },
];

const countriesVisited = [
  { country: "Japan", year: 2018, flag: JP, cities: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"] },
  { country: "Germany", year: 2019, flag: DE, cities: ["Berlin", "Munich"] },
  { country: "Spain", year: 2019, flag: ES, cities: ["Barcelona", "Madrid"] },
  { country: "Canada", year: 2022, flag: CA, cities: ["Toronto", "Ottawa", "Montreal", "Quebec"] },
  { country: "United Kingdom", year: 2023, flag: GB, cities: ["London"] },
  { country: "France", year: 2024, flag: FR, cities: ["Paris"] },
  { country: "South Korea", year: 2024, flag: KR, cities: ["Seoul", "Busan"] },
  { country: "Vietnam", year: 2025, flag: VN, cities: ["Saigon", "Hanoi"] }
];

const moviesWatched = [
  { title: "Gran Torino", year: 2008, genre: "Drama", summary: "A Korean War veteran confronts his prejudices when he befriends a Hmong teenager and his family." },
  { title: "Zero Dark Thirty", year: 2012, genre: "Thriller", summary: "A decade-long hunt for Osama bin Laden by a CIA analyst culminates in a daring raid." },
  { title: "Argo", year: 2012, genre: "Thriller", summary: "A CIA specialist orchestrates a fake film production to rescue Americans from Iran in 1979." },
  { title: "Gravity", year: 2013, genre: "Sci-Fi/Thriller", summary: "Astronauts struggle to survive after debris destroys their space shuttle during a routine spacewalk." },
  { title: "Olympus Has Fallen", year: 2013, genre: "Action", summary: "A Secret Service agent fights to rescue the President after terrorists seize the White House." },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi/Drama", summary: "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { title: "Kingsman: The Secret Service", year: 2015, genre: "Action/Comedy", summary: "A street kid is recruited into an elite secret spy organization to stop a global threat." },
  { title: "Furious 7", year: 2015, genre: "Action", summary: "Dominic Toretto and his crew face a vengeful assassin seeking revenge for his brother's death." },
  { title: "Sicario", year: 2015, genre: "Thriller", summary: "An FBI agent joins a government task force fighting the war on drugs at the U.S.-Mexico border." },
  { title: "Spy", year: 2015, genre: "Action/Comedy", summary: "A desk-bound CIA analyst volunteers to go undercover to infiltrate a deadly arms dealer's network." },
  { title: "Mad Max: Fury Road", year: 2015, genre: "Action", summary: "In a post-apocalyptic wasteland, Max teams with a rebel warrior to escape a tyrannical warlord." },
  { title: "Arrival", year: 2016, genre: "Sci-Fi/Drama", summary: "A linguist learns to communicate with aliens who have arrived on Earth in mysterious spacecraft." },
  { title: "The Nice Guys", year: 2016, genre: "Action/Comedy", summary: "A private investigator and a tough enforcer team up to solve a missing persons case in 1970s LA." },
  { title: "The Accountant", year: 2016, genre: "Thriller", summary: "An autistic math savant who works as a forensic accountant uncooks the books for criminal clients." },
  { title: "Central Intelligence", year: 2016, genre: "Action/Comedy", summary: "A mild-mannered accountant is dragged into the world of international espionage by a former classmate." },
  { title: "13 Hours: The Secret Soldiers of Benghazi", year: 2016, genre: "Action/Thriller", summary: "Six security operators defend the American diplomatic compound in Benghazi during a terrorist attack." },
  { title: "Life", year: 2017, genre: "Sci-Fi/Horror", summary: "A crew aboard the International Space Station discovers rapidly evolving life from Mars." },
  { title: "Thank You for Your Service", year: 2017, genre: "Drama/War", summary: "Iraq War veterans struggle with PTSD and reintegration after returning home from deployment." },
  { title: "Baby Driver", year: 2017, genre: "Action/Crime", summary: "A talented young getaway driver tries to escape his criminal life after falling in love." },
  { title: "The Hitman's Bodyguard", year: 2017, genre: "Action/Comedy", summary: "A protection agent must escort a hitman to testify at the International Criminal Court." },
  { title: "War Machine", year: 2017, genre: "War/Comedy", summary: "A four-star general attempts to end the war in Afghanistan using unconventional tactics." },
  { title: "Atomic Blonde", year: 2017, genre: "Action/Thriller", summary: "A top MI6 agent navigates Cold War Berlin to recover a stolen list of double agents." },
  { title: "Kingsman: The Golden Circle", year: 2017, genre: "Action/Comedy", summary: "The Kingsmen team up with their American counterparts to defeat a new enemy and save the world." },
  { title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", summary: "A blade runner uncovers a secret that could plunge society into chaos and finds Rick Deckard." },
  { title: "12 Strong", year: 2018, genre: "War/Action", summary: "A Special Forces team rides horses into Afghanistan after 9/11 to hunt down Taliban leaders." },
  { title: "Annihilation", year: 2018, genre: "Sci-Fi/Horror", summary: "A biologist joins an expedition into a mysterious quarantined zone where the laws of nature don't apply." },
  { title: "Mission: Impossible - Fallout", year: 2018, genre: "Action/Thriller", summary: "Ethan Hunt races against time to prevent a global nuclear catastrophe after a mission goes wrong." },
  { title: "Mile 22", year: 2018, genre: "Action/Thriller", summary: "An elite intelligence officer leads a covert team to transport an asset 22 miles to safety." },
  { title: "Operation Finale", year: 2018, genre: "Thriller/History", summary: "A team of secret agents tracks down Nazi war criminal Adolf Eichmann in Argentina in 1960." },
  { title: "Beirut", year: 2018, genre: "Thriller", summary: "A former diplomat returns to Beirut to negotiate for the life of a friend he left behind." },
  { title: "Hunter Killer", year: 2018, genre: "Action/Thriller", summary: "A submarine captain and Navy SEALs must rescue the Russian president from a coup during a crisis." },
  { title: "Den of Thieves", year: 2018, genre: "Action/Crime", summary: "An elite LASD unit tracks an outlaw crew planning a heist on the Federal Reserve Bank." },
  { title: "Sicario: Day of the Soldado", year: 2018, genre: "Thriller/Action", summary: "Federal agents battle Mexican drug cartels after terrorists are suspected of crossing the border." },
  { title: "First Man", year: 2018, genre: "Biography/Drama", summary: "The story of Neil Armstrong's journey to become the first man to walk on the moon." },
  { title: "High Life", year: 2018, genre: "Sci-Fi/Drama", summary: "Death row inmates travel on a mission to a black hole aboard a spacecraft." },
  { title: "John Wick: Chapter 3 - Parabellum", year: 2019, genre: "Action/Thriller", summary: "John Wick is on the run with a bounty on his head after killing a member of the High Table." },
  { title: "Angel Has Fallen", year: 2019, genre: "Action/Thriller", summary: "Secret Service agent Mike Banning is framed for an assassination attempt on the President." },
  { title: "Mosul", year: 2019, genre: "War/Action", summary: "An Iraqi SWAT team fights to liberate their city from ISIS control in a desperate mission." },
  { title: "Triple Frontier", year: 2019, genre: "Action/Thriller", summary: "Former Special Forces operatives reunite to plan a heist in South American drug lord territory." },
  { title: "Jojo Rabbit", year: 2019, genre: "Comedy/Drama", summary: "A young German boy's worldview is turned upside down when he discovers his mother is hiding a Jewish girl." },
  { title: "Fast & Furious Presents: Hobbs & Shaw", year: 2019, genre: "Action", summary: "Lawman Hobbs and outcast Shaw form an unlikely alliance to stop a cyber-genetically enhanced villain." },
  { title: "The Gentlemen", year: 2019, genre: "Action/Crime", summary: "An American expatriate tries to sell his London marijuana empire to English gangsters." },
  { title: "Ad Astra", year: 2019, genre: "Sci-Fi/Drama", summary: "An astronaut travels to the outer edges of the solar system to find his missing father." },
  { title: "Captive State", year: 2019, genre: "Sci-Fi/Thriller", summary: "Set in a Chicago neighborhood nearly a decade after an alien occupation of Earth." },
  { title: "Sputnik", year: 2020, genre: "Sci-Fi/Horror", summary: "A Soviet cosmonaut returns to Earth with an alien creature living inside his body." },
  { title: "The Outpost", year: 2020, genre: "War/Drama", summary: "A small unit of U.S. soldiers defends an outpost against overwhelming Taliban forces in Afghanistan." },
  { title: "Tenet", year: 2020, genre: "Action/Sci-Fi", summary: "An operative manipulates the flow of time to prevent World War III from starting." },
  { title: "Dune", year: 2021, genre: "Sci-Fi/Adventure", summary: "Paul Atreides journeys to the dangerous planet Arrakis to ensure his family and people's future." },
  { title: "The King's Man", year: 2021, genre: "Action/Adventure", summary: "One man must race against time to stop a collection of history's worst tyrants and criminal masterminds." },
  { title: "The Hitman's Wife's Bodyguard", year: 2021, genre: "Action/Comedy", summary: "The bodyguard and hitman are forced to work together again to save the bodyguard's wife." },
  { title: "The Suicide Squad", year: 2021, genre: "Action/Comedy", summary: "Supervillains are sent to the island of Corto Maltese on a dangerous black ops mission." },
  { title: "Wrath of Man", year: 2021, genre: "Action/Thriller", summary: "A mysterious security guard for an armored truck company unleashes fury to settle a score." },
  { title: "Copshop", year: 2021, genre: "Action/Thriller", summary: "A con artist and a rookie cop team up to survive a hit man trapped in a small-town police station." },
  { title: "No Time to Die", year: 2021, genre: "Action/Spy", summary: "James Bond comes out of retirement to rescue a kidnapped scientist and face a new villain." },
  { title: "The Gray Man", year: 2022, genre: "Action/Thriller", summary: "A CIA operative becomes an international target after uncovering agency secrets." },
  { title: "All Quiet on the Western Front", year: 2022, genre: "War/Drama", summary: "A young German soldier's enthusiasm for war fades in the trenches of World War I." },
  { title: "Bullet Train", year: 2022, genre: "Action/Comedy", summary: "Assassins with conflicting motives find their missions interconnected on a fast-moving train in Tokyo." },
  { title: "Ambulance", year: 2022, genre: "Action/Thriller", summary: "Two robbers hijack an ambulance after a bank heist goes wrong, taking a paramedic hostage." },
  { title: "Guy Ritchie's The Covenant", year: 2023, genre: "War/Thriller", summary: "A U.S. Army sergeant returns to Afghanistan to rescue his Afghan interpreter from the Taliban." },
  { title: "Plane", year: 2023, genre: "Action/Thriller", summary: "A pilot must protect passengers and save them from a hostile island after an emergency landing." },
  { title: "Dungeons & Dragons: Honor Among Thieves", year: 2023, genre: "Fantasy/Adventure", summary: "A charming thief and band of unlikely adventurers embark on an epic quest to retrieve a lost relic." },
  { title: "The Equalizer 3", year: 2023, genre: "Action/Thriller", summary: "Robert McCall finds peace in Southern Italy until he must fight the local crime syndicate." },
  { title: "John Wick: Chapter 4", year: 2023, genre: "Action/Thriller", summary: "John Wick takes on his most deadly adversaries yet in his quest for freedom from the High Table." },
  { title: "Sisu", year: 2023, genre: "Action/War", summary: "A prospector protects his gold from a Nazi platoon in Lapland during the final days of WWII." },
  { title: "Kandahar", year: 2023, genre: "Action/Thriller", summary: "A CIA operative and his translator flee across Afghanistan after their mission is exposed." },
  { title: "Operation Fortune: Ruse de Guerre", year: 2023, genre: "Action/Comedy", summary: "A spy must recruit a Hollywood star to help prevent the sale of a deadly weapons technology." },
  { title: "Guardians of the Galaxy Vol. 3", year: 2023, genre: "Action/Sci-Fi", summary: "The Guardians embark on a dangerous mission to save Rocket's life and protect the universe." },
  { title: "The Creator", year: 2023, genre: "Sci-Fi/Thriller", summary: "A former soldier hunts the Creator of advanced AI in a war between humans and artificial intelligence." },
  { title: "Argylle", year: 2024, genre: "Action/Spy", summary: "A reclusive spy novelist's fictional plots begin to mirror real-world espionage operations." },
  { title: "The Accountant 2", year: 2024, genre: "Action/Thriller", summary: "The autistic accountant returns to uncover another financial conspiracy." },
  { title: "The Beekeeper", year: 2024, genre: "Action/Thriller", summary: "A former operative wages war on a tech company after a phishing scam destroys his friend." },
  { title: "Land of Bad", year: 2024, genre: "Action/War", summary: "A drone pilot supports a Delta Force team trapped behind enemy lines in the Philippines." },
  { title: "Civil War", year: 2024, genre: "War/Thriller", summary: "War journalists travel across a fractured America during a modern civil war to reach Washington DC." },
  { title: "Dune: Part Two", year: 2024, genre: "Sci-Fi/Adventure", summary: "Paul Atreides unites with Chani and the Fremen to seek revenge against those who destroyed his family." },
  { title: "September 5", year: 2024, genre: "Thriller/Drama", summary: "The 1972 Munich Olympics hostage crisis unfolds through the eyes of ABC Sports broadcasters." },
  { title: "The Killer's Game", year: 2024, genre: "Action/Comedy", summary: "A hitman with a terminal diagnosis puts a contract on himself but must survive the killers." },
  { title: "Slingshot", year: 2024, genre: "Sci-Fi/Thriller", summary: "An astronaut struggles to maintain his grip on reality aboard a mission to Titan." },
  { title: "I.S.S.", year: 2024, genre: "Sci-Fi/Thriller", summary: "Astronauts aboard the ISS receive orders to take control by any means after war breaks out." },
  { title: "Mission: Impossible - The Final Reckoning", year: 2025, genre: "Action/Spy", summary: "Ethan Hunt faces his ultimate mission in the final chapter of the franchise." },
  { title: "My Dead Friend Zoe", year: 2025, genre: "Drama", summary: "A veteran navigates life with the help of an imaginary friend she met during deployment." },
  { title: "Ballerina", year: 2025, genre: "Action/Thriller", summary: "A young assassin seeks revenge for her father's murder in the John Wick universe." },
  { title: "Black Bag", year: 2025, genre: "Thriller/Spy", summary: "A married couple of spies find their loyalties tested when one suspects the other of treason." },
  { title: "Nobody 2", year: 2025, genre: "Action/Thriller", summary: "The suburban dad returns to unleash his lethal skills against new adversaries." },
  { title: "Sisu 2", year: 2025, genre: "Action/War", summary: "The indestructible prospector faces new enemies in the sequel to the Finnish action hit." },
  { title: "The Amateur", year: 2025, genre: "Action/Thriller", summary: "A CIA cryptographer goes rogue to avenge his wife's death at the hands of terrorists." },
  { title: "A Working Man", year: 2025, genre: "Action/Thriller", summary: "An everyday factory worker must use his unique set of skills when criminals threaten his family." },
  { title: "Shadow Force", year: 2025, genre: "Action", summary: "An elite team of operatives conducts covert missions against global threats." },
  { title: "Nuremberg", year: 2025, genre: "Drama/History", summary: "The trials of Nazi war criminals after World War II unfold in this historical drama." },
  { title: "Heads of State", year: 2025, genre: "Action/Comedy", summary: "Two agents from different countries team up to stop a global conspiracy." },
  { title: "Deep Cover", year: 2025, genre: "Action/Thriller", summary: "An undercover operative's identity is compromised during a dangerous mission." },
  { title: "G20", year: 2025, genre: "Action/Thriller", summary: "World leaders are targeted during the G20 summit by a sophisticated terrorist organization." },
  { title: "Mickey 17", year: 2025, genre: "Sci-Fi/Comedy", summary: "An expendable worker on a colony mission keeps dying and being regenerated for dangerous tasks." },
  { title: "I Was a Stranger", year: 2026, genre: "Drama/Thriller", summary: "A mysterious stranger arrives in a small town with secrets that change everything." },
  { title: "Sheepdog", year: 2026, genre: "Action/War", summary: "A military working dog handler and his K9 partner navigate dangerous combat zones." }
];

const booksRead = [
  {
    title: "Flow: The Psychology of Optimal Experience",
    author: "Mihaly Csikszentmihalyi",
    year: 1990,
    genre: "Psychology",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1748892272i/66354.jpg",
    summary: "Explores the state of complete absorption in challenging activities that produces deep enjoyment and fulfillment."
  },
  {
    title: "Mindhunter: Inside the FBI's Elite Serial Crime Unit",
    author: "John E. Douglas",
    year: 1995,
    genre: "True Crime",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1508625511i/36114475.jpg",
    summary: "Memoir of developing modern criminal profiling by interviewing and analyzing serial killers within the FBI's Behavioral Science Unit."
  },
  {
    title: "The Fourth Turning: An American Prophecy",
    author: "Neil Howe",
    year: 1997,
    genre: "History",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1685651696i/670089.jpg",
    summary: "Presents a theory of recurring generational cycles that drive periods of crisis and renewal in American history."
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    year: 1998,
    genre: "Self-Help",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1694722764i/1303.jpg",
    summary: "Codifies historical strategies for acquiring, defending, and wielding power in social and political contexts."
  },
  {
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    year: 2008,
    genre: "Psychology",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344266315i/3228917.jpg",
    summary: "Argues that extraordinary success stems from hidden advantages, cultural legacies, and extended practice opportunities rather than talent alone."
  },
  {
    title: "The Compound Effect: Jumpstart Your Income, Your Life, Your Success",
    author: "Darren Hardy",
    year: 2010,
    genre: "Self-Help",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1337205071i/9420697.jpg",
    summary: "Argues that small, smart choices repeated consistently over time create powerful, outsized outcomes."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    genre: "Psychology",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
    summary: "Describes two modes of thinking—fast, intuitive reactions and slow, deliberative reasoning—that shape judgment and decision making."
  },
  {
    title: "Zero to One: Notes on Startups, or How to Build the Future",
    author: "Peter Thiel",
    year: 2014,
    genre: "Business",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1414347376i/18050143.jpg",
    summary: "Argues that building startups which create radically new technologies is more valuable than competing in existing markets."
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    year: 2016,
    genre: "Self-Help",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg",
    summary: "Outlines strategies for cultivating intense, distraction-free concentration to produce high-value work."
  },
  {
    title: "Originals: How Non-Conformists Move the World",
    author: "Adam Grant",
    year: 2016,
    genre: "Psychology",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1445791874i/25614523.jpg",
    summary: "Examines how people champion novel ideas and overcome obstacles to drive creative change."
  },
  {
    title: "Algorithms to Live By: The Computer Science of Human Decisions",
    author: "Brian Christian",
    year: 2016,
    genre: "Science",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454296875i/25666050.jpg",
    summary: "Explains how algorithms from computer science can guide everyday choices about time, space, and relationships."
  },
  {
    title: "Men Without Work: America's Invisible Crisis",
    author: "Nicholas Eberstadt",
    year: 2016,
    genre: "Economics",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1473592953i/29633355.jpg",
    summary: "Analyzes the long-term rise of prime-age American men who have left the labor force and the social consequences of their absence from work."
  },
  {
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    year: 2018,
    genre: "Self-Help",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    summary: "Shows how small, consistent behavioral changes compound into remarkable long-term results."
  },
  {
    title: "Quirky: The Remarkable Story of the Traits, Foibles, and Genius of Breakthrough Innovators Who Changed the World",
    author: "Melissa A. Schilling",
    year: 2018,
    genre: "Biography",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1497940936i/35397862.jpg",
    summary: "Identifies common personality patterns and life circumstances among some of history's most celebrated innovators."
  },
  {
    title: "Range: Why Generalists Triumph in a Specialized World",
    author: "David Epstein",
    year: 2019,
    genre: "Self-Help",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550048292i/41795733.jpg",
    summary: "Explains how broad, diverse experience often leads to superior performance compared with early specialization."
  },
  {
    title: "Life Undercover: Coming of Age in the CIA",
    author: "Amaryllis Fox",
    year: 2019,
    genre: "Intelligence",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1553597872i/44594871.jpg",
    summary: "Recounts the author’s recruitment, training, and clandestine operations as a young undercover CIA officer."
  },
  {
    title: "The Recruiter: Spying and the Lost Art of American Intelligence",
    author: "Douglas London",
    year: 2021,
    genre: "Intelligence",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1612895786i/57012789.jpg",
    summary: "Memoir from a CIA operations officer on recruiting and handling spies in some of the world's most challenging environments."
  },
  {
    title: "Spies, Lies, and Algorithms: The History and Future of American Intelligence",
    author: "Amy B. Zegart",
    year: 2022,
    genre: "Intelligence",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1621508914i/57813553.jpg",
    summary: "Surveys how U.S. intelligence agencies evolved and how digital technologies are reshaping espionage and national security."
  },
  {
    title: "Nuclear War: A Scenario",
    author: "Annie Jacobsen",
    year: 2024,
    genre: "Science",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1698060837i/182733784.jpg",
    summary: "Depicts a meticulously researched, minute-by-minute hypothetical nuclear conflict to illustrate how deterrence could fail and escalate to global catastrophe."
  }
];



const nutritionalFood = [
  {
    meal: "Oatmeal Bowl",
    ingredients: ["Steel-cut oats", "Blueberries", "Almonds", "Honey", "Cinnamon"],
    nutrition: "High in fiber, antioxidants, and healthy fats for sustained energy",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400"
  },
  {
    meal: "Grilled Salmon",
    ingredients: ["Wild salmon", "Quinoa", "Roasted vegetables", "Lemon", "Olive oil"],
    nutrition: "Rich in omega-3 fatty acids, complete protein, and essential minerals",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
  },
  {
    meal: "Chicken Rice Bowl",
    ingredients: ["Grilled chicken breast", "Brown rice", "Broccoli", "Carrots", "Teriyaki sauce"],
    nutrition: "Balanced macros with lean protein, complex carbs, and vitamins",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"
  },
  {
    meal: "Greek Yogurt Parfait",
    ingredients: ["Greek yogurt", "Granola", "Strawberries", "Chia seeds", "Honey"],
    nutrition: "Probiotic-rich with high protein and calcium for gut and bone health",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400"
  }
];

const habitatHouses = [
  {
    address: "1176 June Dr, Xenia, OH 45385",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
  },
  {
    address: "2026 Ewalt Ave, Dayton, OH 45420",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
  },
  {
    address: "126 Prugh Ave, Xenia, OH 45385",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
  },
  {
    address: "864 Foley Dr, Vandalia, OH 45377",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
  },
  {
    address: "6380 Shull Rd, Huber Heights, OH 45424",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400"
  },
  {
    address: "6724 Sandy Dr, Dayton, OH 45426",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    address: "1106 S Bell Ave, Springfield, OH 45506",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    address: "1122 W Perrin Ave, Springfield, OH 45506",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    address: "100 Clifton Ave SE, Albuquerque, NM 87102",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    address: "104 Clifton Ave SE, Albuquerque, NM 87102",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    address: "108 Clifton Ave SE, Albuquerque, NM 87102",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    address: "112 Clifton Ave SE, Albuquerque, NM 87102",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
  {
    address: "116 Clifton Ave SE, Albuquerque, NM 87102",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  },
];

const breathingTechniques = [
  { name: "Box Breathing", description: "4-4-4-4 pattern for stress reduction", icon: CropSquareIcon },
  { name: "Wim Hof Method", description: "30 power breaths + retention for energy", icon: FlashOnIcon },
  { name: "4-7-8 Technique", description: "Inhale 4, hold 7, exhale 8 for sleep", icon: BedIcon }
];

const topPicks = [
  {
    name: "Garmin Instinct 2 Solar",
    description: "A rugged GPS smartwatch offers unlimited solar-powered battery life, full health and fitness tracking, built-in GPS with tactical features, smart notifications, and military-grade durability for reliable performance in any environment.",
    price: "$263.30",
    category: "Smartwatch",
    image: "https://m.media-amazon.com/images/I/61OuqJZ3liL._AC_SL1500_.jpg",
    link: "https://a.co/d/0iOErTKB"
  },
  {
    name: "ThruNite Archer 2A C",
    description: "A compact, ultra-bright flashlight made from durable aerospace aluminum, featuring multiple brightness modes, 2x AA or rechargeable battery compatibility, rugged waterproof, impact-resistant design for reliable use anywhere.",
    price: "$29.95",
    category: "Flashlight",
    image: "https://m.media-amazon.com/images/I/51-pL1xIOcL._AC_SL1500_.jpg",
    link: "https://a.co/d/03t5dyeJ"
  },
  {
    name: "Anker Power Bank",
    description: "A 20,000 mAh power bank delivers up to 87W fast charging for laptops, phones, and tablets, featuring a durable built-in USB-C cable and quick recharge capability for reliable all-day power on the go.",
    price: "$49.99",
    category: "Power Bank",
    image: "https://m.media-amazon.com/images/I/61jWG2JyYNL._AC_SL1500_.jpg",
    link: "https://a.co/d/01OVizkm"
  },
  {
    name: "Sawyer Squeeze",
    description: "An ultralight 2 oz water filter that lets hikers safely drink from streams or lakes by removing bacteria, protozoa, and microplastics, and easily connects to bottles, pouches, or hydration packs for clean water anywhere on the trail.",
    price: "$45.95",
    category: "Water Filter",
    image: "https://m.media-amazon.com/images/I/71PlK2Jo5uL._AC_SL1500_.jpg",
    link: "https://a.co/d/08oWDfEH"
  },
  {
    name: "EPICKA",
    description: "This compact all-in-one travel adapter works in 200+ countries with 4 plug types and 5 USB ports, letting you safely charge multiple devices at once anywhere in the world.",
    price: "$19.99",
    category: "Universal Travel Adapter",
    image: "https://m.media-amazon.com/images/I/71Z8QXcvteL._AC_SL1500_.jpg",
    link: "https://a.co/d/0gyFIfh9"
  },
  {
    name: "Smartwool Everyday",
    description: "These lightweight merino wool crew socks offer a snug, durable fit with soft cushioning, moisture control, and seamless comfort for all-day wear.",
    price: "$24.00",
    category: "Merino Wool Socks",
    image: "https://m.media-amazon.com/images/I/81Pakvnc+xL._AC_SX679_.jpg",
    link: "https://a.co/d/0hjHwzpT"
  }
];

const favoritePodcasts = [
  {
    name: "HubermanLab",
    host: "Andrew Huberman",
    youtubeChannel: "https://youtube.com/@hubermanlab",
    image: "https://yt3.googleusercontent.com/Y8lhyl8aHY42phxwoAwUqwLGDp-z8nmtj3Z7_JB-Oh4yIZ1OFYb-MlJRuz_oygqsYQU-VgGqiOM=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "The Diary of a CEO",
    host: "Steven Bartlett",
    youtubeChannel: "https://youtube.com/@thediaryofaceo",
    image: "https://yt3.googleusercontent.com/JHCZDz37bsTmwoE1o4LEodF5vhsHfk29kCEauDTFr27-7hHXsHHvvWGzcG77v32ERrkpfInkGQ=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Danny Jones Podcast",
    host: "Danny Jones",
    youtubeChannel: "https://youtube.com/@dannyjones",
    image: "https://yt3.googleusercontent.com/MPoSQZ2fQIjriliOlHNLkPO7TB2Os0qHRpooOiwzysxSb6gJW2BSwYr_jVwP8HuIOC6ep0ZK=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Lex Fridman Podcast",
    host: "Lex Fridman",
    youtubeChannel: "https://youtube.com/@lexfridman",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_ljfMy9kUR1PH9VRf-XsTsPqFMgORC_zodOQVEAm4hx36lC=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Chris Williamson",
    host: "Chris Williamson",
    youtubeChannel: "https://youtube.com/@ChrisWillx",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_mmN30Y4ap7dtPfLw8Algolz_LGtHHpTJxa-qAw-MCQpdo=s160-c-k-c0x00ffffff-no-rj"
  },
  {
    name: "Shawn Ryan Show",
    host: "Shawn Ryan",
    youtubeChannel: "https://youtube.com/@ShawnRyanShow",
    image: "https://yt3.googleusercontent.com/Q4QU_fme2fF3UHscjdJcS7_GvyRHN7JFeZqt70KfbwCH3vYTBcQGnicQmWryd6zztyzSq9T37w=s160-c-k-c0x00ffffff-no-rj"
  }
];

const favoriteSupplements = [
  {
    what: "Caffeine + L-Theanine",
    how: "Boosts alertness via adenosine blockade; L-Theanine promotes calm focus by increasing alpha waves and GABA",
    when: "Morning with breakfast",
    why: "Wake up your brain without jitters for better concentration during work or study"
  },
  {
    what: "Lion's Mane Mushroom",
    how: "Stimulates nerve growth factor (NGF) for neuron growth and branching",
    when: "Morning with food",
    why: "Grow new brain cell branches to boost memory, like fertilizing your neural garden"
  },
  {
    what: "Ashwagandha",
    how: "Lowers cortisol, enhances working memory and attention via adaptogenic effects",
    when: "Evening with food",
    why: "Cut stress to think clearer and remember better without burnout"
  },
  {
    what: "Ginkgo Biloba",
    how: "Improves cerebral blood flow, antioxidant protection, supports neurotransmitter activity",
    when: "Morning with breakfast",
    why: "Boost focus and memory by ramping up brain blood flow like opening highways"
  },
  {
    what: "Creatine",
    how: "Boosts brain ATP energy, acts as neurotransmitter buffer",
    when: "Post-workout",
    why: "Power up brain energy for quicker thinking, great for vegetarians"
  },
  {
    what: "Vitamin D",
    how: "Supports neuroprotection, calcium regulation, reduces inflammation in brain",
    when: "Morning with fatty food",
    why: "Prevent brain fog from deficiency, aids learning and mood"
  },
  {
    what: "Whey Protein",
    how: "Provides amino acids for BDNF production and neurotransmitter synthesis",
    when: "Post-workout",
    why: "Fuel brain growth factors for better focus and memory"
  },
  {
    what: "Omega-3 Fish Oil",
    how: "Supports brain cell membranes, reduces inflammation",
    when: "With meals",
    why: "Protect against decline with essential fats for sharp thinking"
  },
  {
    what: "Liposomal NAD+",
    how: "Boosts NAD+ for energy metabolism, DNA repair, sirtuin activation",
    when: "Morning with food",
    why: "Recharge aging cells for more energy and longevity"
  },
  {
    what: "Nitric Oxide",
    how: "Increases blood flow to brain via vasodilation, supports neuroplasticity",
    when: "Post-workout or 30-60 min before focus tasks",
    why: "Deliver more oxygen/nutrients to brain for better cognition"
  },
  {
    what: "Multivitamin",
    how: "Fills nutrient gaps for neurotransmitter synthesis, antioxidant support",
    when: "Morning with breakfast",
    why: "Cover basics to prevent cognitive dips from deficiencies"
  },
  {
    what: "Magnesium",
    how: "Supports synaptic function, reduces NMDA overexcitation, calms nerves",
    when: "Evening for sleep",
    why: "Relax brain overactivity for clearer thinking and rest"
  },
  {
    what: "Korean Panax Ginseng",
    how: "Active ginsenosides boost cerebral blood flow, protect neurons from oxidative damage, and support neurotransmitter balance",
    when: "Morning with food",
    why: "Sharpen mental energy and slow brain aging like a daily tune-up for your neurons"
  },
  {
    what: "5-HTP",
    how: "Direct serotonin precursor that raises brain serotonin levels; converts to melatonin at night",
    when: "Evening for sleep",
    why: "Give your brain the raw material for its feel-good chemical to lift mood and ease anxiety"
  },
  {
    what: "St. John's Wort",
    how: "Slows reabsorption of serotonin, dopamine, and norepinephrine, keeping mood-lifting chemicals active longer",
    when: "Morning with food; effects build over 2-4 weeks",
    why: "Natural mood support that keeps your brain's happiness chemicals from fading too fast"
  },
];

// ==================== TAB PANEL COMPONENT ====================

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

// ==================== HEADER COMPONENT ====================

function HeaderSection() {
  return (
    <Card elevation={3} sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
          Henry Cho
        </Typography>
        <Typography variant="h5" gutterBottom align="center" color="text.secondary">
          Space Systems Engineer & Research Analyst
        </Typography>
        <Typography variant="body1" paragraph align="center" sx={{ mt: 2 }}>
          Experienced space systems engineer and research analyst with a background in
          satellite technology, software development, and strategic space operations. Skilled in
          project management, cross-functional team leadership, and technical intelligence analysis.
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
          <Grid>
            <Tooltip title="Copy email to clipboard">
              <Chip
                icon={<ContactMailIcon />}
                label="henry.cho.af@gmail.com"
                clickable
                onClick={() => navigator.clipboard.writeText('henry.cho.af@gmail.com')}
                color="primary"
              />
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Copy phone to clipboard">
              <Chip
                icon={<PhoneIcon />}
                label="1-626-759-8684"
                clickable
                onClick={() => navigator.clipboard.writeText('1-626-759-8684')}
                color="primary"
              />
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Open in Google Maps">
              <Chip
                icon={<PlaceIcon />}
                label="Albuquerque, New Mexico"
                component={Link}
                href="https://www.google.com/maps/search/?api=1&query=Albuquerque,+New+Mexico"
                target="_blank"
                clickable
                color="primary"
              />
            </Tooltip>
          </Grid>
          <Grid>
            <Tooltip title="Open Linkedin profile">
              <Chip
                icon={<LinkedInIcon />}
                label="linkedin.com/in/the-henry-cho"
                component={Link}
                href="https://linkedin.com/in/the-henry-cho"
                target="_blank"
                clickable
                color="primary"
              />
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

// ==================== RESUME TAB COMPONENTS ====================

function ExperienceSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <WorkIcon /> Professional Experience
      </Typography>
      {workExperience.map((job, index) => (
        <Box key={index}>
          <Card elevation={2}
            sx={{
              mb: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{job.title}</Typography>
              <Typography variant="body2" color="text.secondary">{job.period}</Typography>
              <Typography variant="body2" color="text.secondary">{job.location}</Typography>
            </CardContent>
          </Card>
          {index < workExperience.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
}

function EducationSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SchoolIcon /> Education
      </Typography>
      {education.map((edu, index) => (
        <Box key={index}>
          <Card elevation={2}
            sx={{
              mb: 2,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{edu.degree}</Typography>
              <Typography variant="body2" color="text.secondary">{edu.institution}</Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.year} {edu.honors && `• ${edu.honors}`}
              </Typography>
            </CardContent>
          </Card>
          {index < education.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
}

function SkillsSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CodeIcon /> Technical Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {technicalSkills.map((skill) => (
          <Chip key={skill} label={skill} color="primary" />
        ))}
      </Box>

      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AutoAwesomeIcon /> AI Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {aiSkills.map((skill) => (
          <Chip key={skill} label={skill} color="secondary" />
        ))}
      </Box>

      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <StarIcon /> Key Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {keySkills.map((skill) => (
          <Chip key={skill} label={skill} variant="outlined" />
        ))}
      </Box>
    </Box>
  );
}

function LanguagesSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LanguageIcon /> Languages
      </Typography>
      <Grid container spacing={2}>
        {languages.map((lang) => (
          <Grid key={lang.name} size={{ xs: 6, sm: 4, md: 2 }}>
            <Card elevation={2}
              sx={{
                textAlign: 'center',
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
              <CardContent>
                <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
                  <lang.flag style={{ width: '60px', height: 'auto', borderRadius: '4px' }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {lang.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {lang.level}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {lang.years}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function ResumeTab() {
  return (
    <Box>
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <LanguagesSection />
    </Box>
  );
}

// ==================== TRAVEL TAB COMPONENTS ====================

function PlacedLivedAndCitiesVisitedSection() {
  const TravelMap = dynamic(() => import("./components/TravelMap"), {
    ssr: false,
    loading: () => (
      <Box sx={{ height: 500, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography color="text.secondary">Loading map...</Typography>
      </Box>
    ),
  });

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PublicIcon /> Places Lived & Cities Visited
      </Typography>

      {/* Legend */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Chip icon={<HomeIcon />} label="Places Lived" color="error" size="small" />
        <Chip icon={<FlightIcon />} label="Cities Visited" color="primary" size="small" />
      </Box>

      <TravelMap placesLived={placesLived} citiesVisited={citiesVisited} />
    </Box>
  )
}

function CountriesSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PublicIcon /> Countries Visited
      </Typography>
      <Grid container spacing={2}>
        {countriesVisited.map((visit) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={visit.country}>
            <Card elevation={2}
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
              <CardContent>
                <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
                  <visit.flag style={{ width: '80px', height: 'auto', borderRadius: '4px' }} />
                </Box>
                <Typography variant="h6" align="center">{visit.country}</Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  Visited {visit.year}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center', mt: 1 }}>
                  {visit.cities.map((city) => (
                    <Chip key={city} label={city} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function MarathonSection() {
  const [sortBy, setSortBy] = useState<'none' | 'year' | 'name' | 'time'>('none');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedMarathons = [...marathons].sort((a, b) => {
    if (sortBy === 'year') {
      return sortDirection === 'asc' ? a.year - b.year : b.year - a.year;
    }
    if (sortBy === 'name') {
      return sortDirection === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    }
    if (sortBy === 'time') {
      return sortDirection === 'asc' ? a.time.localeCompare(b.time) : b.time.localeCompare(a.time);
    }
    return 0;
  });

  const timeToSeconds = (time: string) => {
    const parts = time.split(':');
    return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
  };

  const avgTime =
    marathons.reduce((acc, m) => acc + timeToSeconds(m.time), 0) / marathons.length;
  const avgHours = Math.floor(avgTime / 3600);
  const avgMinutes = Math.floor((avgTime % 3600) / 60);
  const avgSeconds = Math.floor(avgTime % 60);

  const bestTime = marathons.reduce((best, m) =>
    timeToSeconds(m.time) < timeToSeconds(best.time) ? m : best
  );

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DirectionsRunIcon /> Marathon Achievements
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card elevation={2}
            sx={{
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h6" align="center">{marathons.length}</Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Total Marathons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card elevation={2}
            sx={{
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h6" align="center">
                {avgHours}:{avgMinutes.toString().padStart(2, '0')}:
                {avgSeconds.toString().padStart(2, '0')}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Average Time
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card elevation={2}
            sx={{
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h6" align="center">{bestTime.time}</Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Best Time
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'year') {
                    setSortBy('year');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  Year {sortBy === 'year' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'name') {
                    setSortBy('name');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  Marathon {sortBy === 'name' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'time') {
                    setSortBy('time');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  Finish Time {sortBy === 'time' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMarathons.map((marathon, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{marathon.year}</TableCell>
                <TableCell>{marathon.name}</TableCell>
                <TableCell>{marathon.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function AppalachianTrailSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PlaceIcon /> Appalachian Trail GPS Map
      </Typography>
      <Box
        sx={{
          minHeight: 400,
          border: '2px dashed',
          borderColor: 'divider',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.paper',
        }}
      >
        <Box textAlign="center">
          <PlaceIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            Appalachian Trail GPS Map - Coming Soon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Future: Integrate Leaflet/Mapbox for GPS track visualization
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function TravelTab() {
  return (
    <Box>
      <PlacedLivedAndCitiesVisitedSection />
      <CountriesSection />
      <MarathonSection />
      <AppalachianTrailSection />
    </Box>
  );
}

// ==================== MOVIES TAB COMPONENT ====================

function MoviesSection() {
  const [sortBy, setSortBy] = useState<'year' | 'title' | 'genre' | 'none'>('year');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedMovies = [...moviesWatched].sort((a, b) => {
    if (sortBy === 'year') {
      return sortDirection === 'asc' ? a.year - b.year : b.year - a.year;
    }
    if (sortBy === 'title') {
      return sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    }
    if (sortBy === 'genre') {
      return sortDirection === 'asc' ? a.genre.localeCompare(b.genre) : b.genre.localeCompare(a.genre);
    }
    return 0;
  });

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MovieIcon /> Movies Watched
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'year') {
                    setSortBy('year');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  YEAR {sortBy === 'year' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'title') {
                    setSortBy('title');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  TITLE {sortBy === 'title' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'genre') {
                    setSortBy('genre');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  GENRE {sortBy === 'genre' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>SUMMARY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMovies.map((movie) => (
              <TableRow key={movie.title}>
                <TableCell>{movie.year}</TableCell>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>{movie.summary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function MoviesTab() {
  return (
    <Box>
      <MoviesSection />
    </Box>
  );
}

function BooksSection() {
  const [sortBy, setSortBy] = useState<'year' | 'title' | 'author' | 'genre' | 'none'>('year');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedBooks = [...booksRead].sort((a, b) => {
    if (sortBy === 'year') {
      return sortDirection === 'asc' ? a.year - b.year : b.year - a.year;
    }
    if (sortBy === 'title') {
      return sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    }
    if (sortBy === 'author') {
      return sortDirection === 'asc' ? a.author.localeCompare(b.author) : b.author.localeCompare(a.author);
    }
    if (sortBy === 'genre') {
      return sortDirection === 'asc' ? a.genre.localeCompare(b.genre) : b.genre.localeCompare(a.genre);
    }
    return 0;
  });

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MenuBookIcon /> Books Read
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'year') {
                    setSortBy('year');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  YEAR {sortBy === 'year' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'title') {
                    setSortBy('title');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  TITLE {sortBy === 'title' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'author') {
                    setSortBy('author');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  AUTHOR {sortBy === 'author' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'genre') {
                    setSortBy('genre');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  GENRE {sortBy === 'genre' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}
                </Button>
              </TableCell>
              <TableCell>SUMMARY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBooks.map((book) => (
              <TableRow key={book.title}>
                <TableCell>{book.year}</TableCell>
                <TableCell>
                  <Box sx={{ width: '50px', height: '70px', display: 'flex', alignItems: 'center' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={book.cover}
                      alt={book.title}
                      style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
                    />
                  </Box>
                </TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.summary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function BooksTab() {
  return (
    <Box>
      <BooksSection />
    </Box>
  );
}

function PodcastsSection() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PodcastsIcon /> Podcasts Listened
      </Typography>
      <Grid container spacing={3}>
        {favoritePodcasts.map((podcast) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={podcast.name}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
              component="a"
              href={podcast.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, p: 2 }}>
                <CardMedia
                  component="img"
                  image={podcast.image}
                  alt={podcast.name}
                  sx={{ width: '64px', height: 'auto', flexShrink: 0, objectFit: 'cover', imageRendering: 'auto' }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {podcast.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {podcast.host}
                  </Typography>
                </Box>
              </Box>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  size="small"
                  startIcon={<YouTubeIcon />}
                  endIcon={<OpenInNewIcon />}
                  fullWidth
                  sx={{ color: '#FF0000' }}
                >
                  Watch on YouTube
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function PodcastsTab() {
  return (
    <Box>
      <PodcastsSection />
    </Box>
  );
}

// ==================== LIFESTYLE TAB COMPONENTS ====================

function NutritionSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <RestaurantIcon /> Nutritional Food
      </Typography>
      <Grid container spacing={3}>
        {nutritionalFood.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.meal}>
            <Card elevation={3}
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.meal}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.meal}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Ingredients:</strong> {item.ingredients.join(', ')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Why eat it:</strong> {item.nutrition}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function SupplementsSection() {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedSupplements = [...favoriteSupplements].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.when.localeCompare(b.when);
    } else {
      return b.when.localeCompare(a.when);
    }
  });

  const handleSortToggle = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MedicationIcon /> Favorite Supplements
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>WHAT</strong></TableCell>
              <TableCell>
                <Button onClick={handleSortToggle} variant="text" size="small">
                  <strong>WHEN {sortDirection === 'asc' ? '↑' : '↓'}</strong>
                </Button>
              </TableCell>
              <TableCell><strong>WHY</strong></TableCell>
              <TableCell><strong>HOW</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedSupplements.map((supplement) => (
              <TableRow key={supplement.what}>
                <TableCell>{supplement.what}</TableCell>
                <TableCell sx={{ display: 'table-cell' }}>
                  {supplement.when.toLowerCase().includes('morning') && <LightModeIcon sx={{ mr: 1, fontSize: 18, verticalAlign: 'middle' }} />}
                  {supplement.when.toLowerCase().includes('evening') && <HotelIcon sx={{ mr: 1, fontSize: 18, verticalAlign: 'middle' }} />}
                  {supplement.when.toLowerCase().includes('workout') && <FitnessCenterIcon sx={{ mr: 1, fontSize: 18, verticalAlign: 'middle' }} />}
                  {supplement.when.toLowerCase().includes('meal') && <FastfoodIcon sx={{ mr: 1, fontSize: 18, verticalAlign: 'middle' }} />}
                  {supplement.when}
                </TableCell>
                <TableCell>{supplement.why}</TableCell>
                <TableCell>{supplement.how}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function SleepSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HotelIcon /> Sleep Insights
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card elevation={2}
            sx={{
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h4" align="center">
                7.2 hrs
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Average Sleep Duration
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card elevation={2}
            sx={{
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h4" align="center">
                85%
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Sleep Quality Score
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic' }}>
        Placeholder data - Future: Integrate with sleep tracking API
      </Typography>
    </Box>
  );
}

function BreathingSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AirIcon /> Breathing Techniques
      </Typography>
      <Grid container spacing={2}>
        {breathingTechniques.map((technique) => (
          <Grid size={{ xs: 12, sm: 4 }} key={technique.name}>
            <Card elevation={2}
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <technique.icon /> {technique.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {technique.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function HabitatSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HomeWorkIcon /> Habitat For Humanity
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card elevation={2}
            sx={{
              mb: 3,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h4" align="center">
                {new Date().getFullYear() - 2021}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Years of volunteering since 2021
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card elevation={2}
            sx={{
              mb: 3,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h4" align="center">
                {habitatHouses.length}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Houses built
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card elevation={2}
            sx={{
              mb: 3,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4
              }
            }}>
            <CardContent>
              <Typography variant="h4" align="center">
                120+
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Hours volunteered
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {habitatHouses.map((house) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={house.address}>
            <Card elevation={3}
              sx={{
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
              <CardMedia
                component="img"
                height="200"
                image={house.image}
                alt={house.address}
              />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  {house.address.split(',')[0]}
                  <br />
                  {house.address.split(',').slice(1).join(',').trim()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function LifestyleTab() {
  return (
    <Box>
      <NutritionSection />
      <SupplementsSection />
      <SleepSection />
      <BreathingSection />
      <HabitatSection />
    </Box>
  );
}

// ==================== TOP PICKS TAB COMPONENT ====================

function TopPicksTab() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ShoppingCartIcon /> Top Picks
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        These are products I personally use and recommend.
      </Typography>

      <Grid container spacing={3}>
        {topPicks.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.name}>
            <Card elevation={3}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}>
              <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', backgroundColor: 'white' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {product.name}
                  </Typography>
                  <Chip label={product.category} size="small" color="primary" />
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="View product on Amazon">
                  <Button
                    size="small"
                    variant="contained"
                    endIcon={<OpenInNewIcon />}
                    href={product.link}
                    target="_blank"
                    fullWidth
                  >
                    View Product
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 4,
          p: 2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          <strong>Disclosure:</strong> I am <u>not</u> an affiliate and do <u>not</u> earn any commission from purchases. Links provided are purely for convenience.
        </Typography>
      </Box>
    </Box>
  );
}

// ==================== MAIN COMPONENT ====================

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: (theme) => theme.palette.background.default,
        py: 4,
      }}
    >
      <ThemeToggle />
      <Container maxWidth="lg">
        <HeaderSection />
        <Card elevation={3}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              aria-label="portfolio tabs"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '.MuiTabs-indicator': {
                  height: 3,
                },
                '& .MuiTab-root:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  transition: 'background-color 0.2s ease-in-out',
                },
              }}
            >
              <Tab label="Resume" icon={<WorkIcon />} {...a11yProps(0)} />
              <Tab label="Travel" icon={<PublicIcon />} {...a11yProps(1)} />
              <Tab label="Movies" icon={<MovieIcon />} {...a11yProps(2)} />
              <Tab label="Books" icon={<MenuBookIcon />} {...a11yProps(3)} />
              <Tab label="Podcasts" icon={<PodcastsIcon />} {...a11yProps(4)} />
              <Tab label="Lifestyle" icon={<FavoriteIcon />} {...a11yProps(5)} />
              <Tab label="Top Picks" icon={<ShoppingCartIcon />} {...a11yProps(6)} />
            </Tabs>
          </Box>

          <TabPanel value={activeTab} index={0}>
            <ResumeTab />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <TravelTab />
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <MoviesTab />
          </TabPanel>
          <TabPanel value={activeTab} index={3}>
            <BooksTab />
          </TabPanel>
          <TabPanel value={activeTab} index={4}>
            <PodcastsTab />
          </TabPanel>
          <TabPanel value={activeTab} index={5}>
            <LifestyleTab />
          </TabPanel>
          <TabPanel value={activeTab} index={6}>
            <TopPicksTab />
          </TabPanel>
        </Card>
      </Container>
    </Box>
  );
}
