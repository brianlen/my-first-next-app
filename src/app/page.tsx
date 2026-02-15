"use client";
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
  Collapse,
  IconButton,
  Link,
} from '@mui/material';
import Grid from '@mui/material/Grid';
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThemeToggle from './components/ThemeToggle';
// Import country flags (install with: npm install country-flag-icons)
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
  { name: "2019 Los Angeles Marathon", year: 2019, time: "5:22:44" },
  { name: "2019 Air Force Marathon", year: 2019, time: "5:21:33" },
  { name: "2020 Air Force Marathon", year: 2020, time: "5:23:52" },
  { name: "2021 Air Force Marathon", year: 2021, time: "5:23:03" },
  { name: "2021 Marine Corps Marathon", year: 2021, time: "5:28:40" },
  { name: "2021 Space Coast Marathon", year: 2021, time: "4:59:30" },
  { name: "2022 Disney Marathon", year: 2022, time: "5:32:16" },
  { name: "2022 Air Force Marathon", year: 2022, time: "5:54:07" },
  { name: "2023 Air Force Marathon", year: 2023, time: "5:44:12" },
  { name: "2023 Duke City Marathon", year: 2023, time: "5:16:05" },
  { name: "2024 Denver Colfax Marathon", year: 2024, time: "5:55:32" },
  { name: "2024 Air Force Marathon", year: 2024, time: "5:58:39" },
  { name: "2024 Duke City Marathon", year: 2024, time: "5:23:59" },
  { name: "2025 Mesa Marathon", year: 2025, time: "5:42:32" },
  { name: "2025 Bataan Memorial Death March", year: 2025, time: "6:26:48" },
  { name: "2025 Oklahoma City Memorial Marathon", year: 2025, time: "5:30:18" },
  { name: "2025 Air Force Marathon", year: 2025, time: "6:39:56" },
  { name: "2025 Duke City Marathon", year: 2025, time: "6:08:49" },
  { name: "2025 Albuquerque Fiesta Marathon", year: 2025, time: "6:00:21" }
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
  { title: "Gravity", year: 2013, genre: "Sci-Fi/Thriller", rating: "up", poster: "https://image.tmdb.org/t/p/w500/uPMC8SkI68jlcXiLl2kbygmAq8s.jpg" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi/Drama", rating: "up", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { title: "Arrival", year: 2016, genre: "Sci-Fi/Drama", rating: "up", poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg" },
  { title: "Life", year: 2017, genre: "Sci-Fi/Horror", rating: "down", poster: "https://image.tmdb.org/t/p/w500/lygPKaYjRq2rvOXYmHEp0cPrQzV.jpg" },
  { title: "First Man", year: 2018, genre: "Biography/Drama", rating: "up", poster: "https://image.tmdb.org/t/p/w500/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg" },
  { title: "High Life", year: 2018, genre: "Sci-Fi/Drama", rating: "down", poster: "https://image.tmdb.org/t/p/w500/smOhK4qivDBl2E5OPpUqXwwxTkz.jpg" },
  { title: "Ad Astra", year: 2019, genre: "Sci-Fi/Drama", rating: "up", poster: "https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" },
  { title: "Captive State", year: 2019, genre: "Sci-Fi/Thriller", rating: "down", poster: "https://image.tmdb.org/t/p/w500/bHv61C2Cu0TbeBZ5hk7bhZ7ibjO.jpg" },
  { title: "Sputnik", year: 2020, genre: "Sci-Fi/Horror", rating: "up", poster: "https://image.tmdb.org/t/p/w500/6lYGEoqqH1a9zIwBb5EGg3fR0Zq.jpg" },
  { title: "Dune 1", year: 2021, genre: "Sci-Fi/Adventure", rating: "up", poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { title: "Guardians of the Galaxy 3", year: 2023, genre: "Action/Sci-Fi", rating: "up", poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" },
  { title: "The Creator", year: 2023, genre: "Sci-Fi/Thriller", rating: "up", poster: "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg" },
  { title: "Dune 2", year: 2024, genre: "Sci-Fi/Adventure", rating: "up", poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" },
  { title: "Slingshot", year: 2024, genre: "Sci-Fi/Thriller", rating: "down", poster: "https://image.tmdb.org/t/p/w500/7VbzNa6kkUKWvgH5MBwJ9z5sEEq.jpg" },
  { title: "ISS", year: 2024, genre: "Sci-Fi/Thriller", rating: "down", poster: "https://image.tmdb.org/t/p/w500/vLqkYu76qvB7mMkA25sEWJ8dLjO.jpg" },
  { title: "Mickey 17", year: 2025, genre: "Sci-Fi/Comedy", rating: "up", poster: "https://image.tmdb.org/t/p/w500/pnKdyHMNLJZz2rJqrBqFDMQr4K3.jpg" }
];

const booksRead = [
  { title: "Zero to One", author: "Peter Thiel", year: 2014, genre: "Business", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1414347376i/18050143.jpg", summary: "Build companies that create new things rather than competing in existing markets." },
  { title: "The 48 Laws of Power", author: "Robert Greene", year: 1998, genre: "Self-Help", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1640369261i/1303.jpg", summary: "Distilled wisdom of master strategists on wielding power throughout history." },
  { title: "Range", author: "David Epstein", year: 2019, genre: "Self-Help", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550048292i/41795733.jpg", summary: "Why generalists triumph in a specialized world through diverse experience." },
  { title: "Atomic Habits", author: "James Clear", year: 2018, genre: "Self-Help", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg", summary: "Tiny changes that create remarkable results through compound growth." },
  { title: "The Compound Effect", author: "Darren Hardy", year: 2010, genre: "Self-Help", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348444621i/9420697.jpg", summary: "Small, smart choices made consistently lead to radical differences." },
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, genre: "Psychology", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg", summary: "Two systems of thought shape our judgments and decision-making processes." },
  { title: "Flow", author: "Mihaly Csikszentmihalyi", year: 1990, genre: "Psychology", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348932616i/66354.jpg", summary: "The psychology of optimal experience and complete absorption in activities." },
  { title: "Deep Work", author: "Cal Newport", year: 2016, genre: "Self-Help", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447957962i/25744928.jpg", summary: "Rules for focused success in a distracted world through intense concentration." },
  { title: "Originals", author: "Adam Grant", year: 2016, genre: "Psychology", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1444077718i/25614523.jpg", summary: "How non-conformists move the world by championing new ideas effectively." },
  { title: "Quirky", author: "Melissa A Schilling", year: 2018, genre: "Biography", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1517615110i/36204001.jpg", summary: "Common patterns in the lives of breakthrough innovators and geniuses." },
  { title: "Outliers", author: "Malcolm Gladwell", year: 2008, genre: "Psychology", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344266315i/3228917.jpg", summary: "Success comes from hidden advantages, cultural legacy, and practice opportunities." },
  { title: "Mindhunter", author: "John E Douglas", year: 1995, genre: "True Crime", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1552328782i/41859095.jpg", summary: "Inside the FBI's elite serial crime unit that pioneered criminal profiling." },
  { title: "The Recruiter", author: "Douglas London", year: 2021, genre: "Intelligence", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607971753i/54304440.jpg", summary: "Memoir of a CIA officer recruiting spies in hostile territories." },
  { title: "Life Undercover", author: "Amaryllis Fox", year: 2019, genre: "Intelligence", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556043558i/43809851.jpg", summary: "Coming of age in the CIA as a young female intelligence officer." },
  { title: "Spies, Lies, and Algorithms", author: "Amy B Zegart", year: 2022, genre: "Intelligence", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631631340i/58558253.jpg", summary: "The history and future of American intelligence in the digital age." },
  { title: "Algorithms to Live By", author: "Brian Christian", year: 2016, genre: "Science", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1454296875i/25666050.jpg", summary: "Computer science principles applied to solving everyday human problems." },
  { title: "The Fourth Turning", author: "Neil Howe", year: 1997, genre: "History", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1412119512i/183508.jpg", summary: "Prophetic generational cycles that shape American history and destiny." },
  { title: "Men without Work", author: "Nicholas Eberstadt", year: 2016, genre: "Economics", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1478645618i/32715979.jpg", summary: "America's invisible crisis of prime-age men not in labor force." },
  { title: "Nuclear War", author: "Annie Jacobsen", year: 2024, genre: "Science", cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699556900i/197792472.jpg", summary: "A scenario detailing the terrifying minute-by-minute timeline of nuclear warfare." }
];

const nutritionRankings = [
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
    address: "1234 Mountain View Dr, Albuquerque, NM",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400"
  },
  {
    address: "5678 Desert Bloom Ave, Albuquerque, NM",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400"
  },
  {
    address: "9101 Sandia Heights Rd, Albuquerque, NM",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  }
];

const breathingTechniques = [
  { name: "Box Breathing", description: "4-4-4-4 pattern for stress reduction" },
  { name: "Wim Hof Method", description: "30 power breaths + retention for energy" },
  { name: "4-7-8 Technique", description: "Inhale 4, hold 7, exhale 8 for sleep" }
];

const recommendations = [
  {
    name: "Garmin Forerunner 255",
    description: "Advanced GPS running watch with training metrics, perfect for marathon training",
    price: "$349.99",
    category: "Fitness",
    image: "https://via.placeholder.com/300x200?text=Garmin+Watch",
    link: "#"
  },
  {
    name: "Osprey Atmos AG 65",
    description: "Premium backpacking pack with anti-gravity suspension for long trails",
    price: "$290.00",
    category: "Hiking",
    image: "https://via.placeholder.com/300x200?text=Osprey+Pack",
    link: "#"
  },
  {
    name: "Anker PowerCore 20000",
    description: "High-capacity portable charger for extended outdoor adventures",
    price: "$49.99",
    category: "Tech",
    image: "https://via.placeholder.com/300x200?text=Anker+Charger",
    link: "#"
  },
  {
    name: "ThermoPro TP03",
    description: "Digital meat thermometer for precise cooking temperature control",
    price: "$16.99",
    category: "Kitchen",
    image: "https://via.placeholder.com/300x200?text=Thermometer",
    link: "#"
  },
  {
    name: "Blue Light Blocking Glasses",
    description: "Computer glasses to reduce eye strain during long coding sessions",
    price: "$24.99",
    category: "Tech",
    image: "https://via.placeholder.com/300x200?text=Blue+Light+Glasses",
    link: "#"
  },
  {
    name: "Optimum Nutrition Gold Standard",
    description: "Premium whey protein for post-workout recovery and muscle building",
    price: "$64.99",
    category: "Fitness",
    image: "https://via.placeholder.com/300x200?text=Protein+Powder",
    link: "#"
  }
];

const favoritePodcasts = [
  {
    name: "Andrew Huberman",
    host: "Andrew Huberman",
    youtubeChannel: "https://youtube.com/@hubermanlab",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Steven Bartlett",
    host: "Steven Bartlett",
    youtubeChannel: "https://youtube.com/@stevenbartlett",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Danny Jones",
    host: "Danny Jones",
    youtubeChannel: "https://youtube.com/@dannyjones",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Lex Fridman",
    host: "Lex Fridman",
    youtubeChannel: "https://youtube.com/@lexfridman",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Chris Williamson",
    host: "Chris Williamson",
    youtubeChannel: "https://youtube.com/@chriswilliamson",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Shawn Ryan",
    host: "Shawn Ryan",
    youtubeChannel: "https://youtube.com/@shawnryan",
    image: "/api/placeholder/300/200"
  }
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
          Experienced space systems engineer and research analyst with a proven track record in
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
          <Card elevation={2} sx={{ mb: 2 }}>
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
          <Card elevation={2} sx={{ mb: 2 }}>
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
            <Card elevation={2} sx={{ textAlign: 'center', height: '100%' }}>
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

function MarathonSection() {
  const [sortBy, setSortBy] = useState<'none' | 'year' | 'name' | 'time'>('none');

  const sortedMarathons = [...marathons].sort((a, b) => {
    if (sortBy === 'year') {
      return a.year - b.year;
    }
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'time') {
      return a.time.localeCompare(b.time);
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
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" align="center">{marathons.length}</Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Total Marathons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card elevation={2}>
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
          <Card elevation={2}>
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
                <Button onClick={() => setSortBy(sortBy === 'year' ? 'none' : 'year')}>
                  Year
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => setSortBy(sortBy === 'name' ? 'none' : 'name')}>
                  Marathon
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => setSortBy(sortBy === 'time' ? 'none' : 'time')}>
                  Finish Time
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMarathons.map((marathon, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{marathon.year}</TableCell>
                <TableCell>{marathon.name.replace(/^\d{4}\s/, '')}</TableCell>
                <TableCell>{marathon.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
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
            <Card elevation={2}>
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
      <MarathonSection />
      <CountriesSection />
      <AppalachianTrailSection />
    </Box>
  );
}

// ==================== LIFESTYLE TAB COMPONENTS ====================

function MoviesSection() {
  const [openYears, setOpenYears] = useState<{ [key: number]: boolean }>({});

  const moviesByYear = moviesWatched.reduce((acc, movie) => {
    if (!acc[movie.year]) acc[movie.year] = [];
    acc[movie.year].push(movie);
    return acc;
  }, {} as { [key: number]: typeof moviesWatched });

  const years = Object.keys(moviesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const toggleYear = (year: number) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MovieIcon /> Movies Watched
      </Typography>
      {years.map((year) => (
        <Box key={year} sx={{ mb: 2 }}>
          <Card elevation={2}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6">{year}</Typography>
                <IconButton onClick={() => toggleYear(year)} size="small">
                  {openYears[year] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </Box>
              <Collapse in={openYears[year]} timeout="auto" unmountOnExit>
                <TableContainer sx={{ mt: 2 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell align="center">Rating</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {moviesByYear[year].map((movie) => (
                        <TableRow key={movie.title}>
                          <TableCell>
                            <Tooltip
                              title={
                                <img
                                  src={movie.poster}
                                  alt={movie.title}
                                  style={{ width: '150px', height: 'auto' }}
                                />
                              }
                            >
                              <span style={{ cursor: 'pointer' }}>{movie.title}</span>
                            </Tooltip>
                          </TableCell>
                          <TableCell>{movie.genre}</TableCell>
                          <TableCell align="center">
                            {movie.rating === 'up' ? (
                              <ThumbUpIcon color="success" />
                            ) : (
                              <ThumbDownIcon color="error" />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Collapse>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

function BooksSection() {
  const sortedBooks = booksRead.sort((a, b) => b.year - a.year);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MenuBookIcon /> Books Read
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Cover</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Summary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBooks.map((book) => (
              <TableRow key={book.title}>
                <TableCell>{book.year}</TableCell>
                <TableCell>
                  <img
                    src={book.cover}
                    alt={book.title}
                    style={{ width: '50px', height: 'auto', borderRadius: '4px' }}
                  />
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

function NutritionSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <RestaurantIcon /> Nutrition Rankings
      </Typography>
      <Grid container spacing={3}>
        {nutritionRankings.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.meal}>
            <Card elevation={3} sx={{ height: '100%' }}>
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

function SleepSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HotelIcon /> Sleep Insights
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card elevation={2}>
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
          <Card elevation={2}>
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
      {breathingTechniques.map((technique) => (
        <Card elevation={2} sx={{ mb: 2 }} key={technique.name}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {technique.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {technique.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

function HabitatSection() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HomeWorkIcon /> Habitat For Humanity
      </Typography>
      <Card elevation={2} sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Volunteer Work (2021-Present)
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="body2" color="text.secondary">
                Houses Built: <strong>3</strong>
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="body2" color="text.secondary">
                Hours Volunteered: <strong>120+</strong>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        {habitatHouses.map((house) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={house.address}>
            <Card elevation={3} sx={{ height: '100%' }}>
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

function MoviesTab() {
  return (
    <Box>
      <MoviesSection />
    </Box>
  );
}

function LifestyleTab() {
  return (
    <Box>
      <BooksSection />
      <NutritionSection />
      <SleepSection />
      <BreathingSection />
      <HabitatSection />

      {/* Favorite Podcasts */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PodcastsIcon /> Favorite Podcasts
          </Typography>
          <Divider sx={{ my: 2 }} />
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
                  <CardMedia
                    component="img"
                    height="200"
                    image={podcast.image}
                    alt={podcast.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {podcast.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Host: {podcast.host}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      fullWidth
                    >
                      Watch on YouTube
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

// ==================== RECOMMENDATIONS TAB COMPONENT ====================

function RecommendationsTab() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ShoppingCartIcon /> Product Recommendations
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        These are products I personally use and recommend. Quality tested through real-world use.
      </Typography>

      <Grid container spacing={3}>
        {recommendations.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.name}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
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
                <Tooltip title="Affiliate link - I may earn from qualifying purchases">
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
          <strong>Disclosure:</strong> As an affiliate, I may earn from qualifying purchases. This
          comes at no additional cost to you and helps support my content.
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
              }}
            >
              <Tab label="Resume" icon={<WorkIcon />} {...a11yProps(0)} />
              <Tab label="Travel" icon={<PublicIcon />} {...a11yProps(1)} />
              <Tab label="Movies" icon={<MovieIcon />} {...a11yProps(2)} />
              <Tab label="Lifestyle" icon={<FavoriteIcon />} {...a11yProps(3)} />
              <Tab label="Recommendations" icon={<ShoppingCartIcon />} {...a11yProps(4)} />
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
            <LifestyleTab />
          </TabPanel>
          <TabPanel value={activeTab} index={4}>
            <RecommendationsTab />
          </TabPanel>
        </Card>
      </Container>
    </Box>
  );
}
