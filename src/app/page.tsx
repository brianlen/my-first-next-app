"use client";
import dynamic from "next/dynamic";
import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Fade,
  Grid,
  Link,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tooltip,
  Typography
} from '@mui/material';

// Import MUI Icons
import AirIcon from '@mui/icons-material/Air';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FlightIcon from '@mui/icons-material/Flight';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HotelIcon from '@mui/icons-material/Hotel';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MedicationIcon from '@mui/icons-material/Medication';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MovieIcon from '@mui/icons-material/Movie';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PublicIcon from '@mui/icons-material/Public';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Import custom components
import ThemeToggle from './components/ThemeToggle';
import FoodPanel from './components/FoodPanel';

// Import custom data
import { workExperience, education, technicalSkills, aiSkills, keySkills, languages } from './data/resumeData';
import { placesLived, citiesVisited, countriesVisited, marathonsArray } from './data/travelData';
import { moviesWatched } from './data/moviesData';
import { booksRead } from './data/booksData';
import { podcastsArray } from './data/podcastsData';
import { eatFoods, avoidFoods, supplementsArray } from './data/foodData';
import { breathingTechniques, habitatHouses } from './data/lifestyleData';
import { productsArray } from './data/productsData';

// ==================== TAB PANEL COMPONENT ====================

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  fading?: boolean;
}

function TabPanel({ children, value, index, fading }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Fade in={!fading} timeout={100}>
        <Box sx={{ p: 3 }}>{value === index ? children : null}</Box>
      </Fade>
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
    <Card elevation={1} sx={{ mb: 2 }}>
      <CardContent sx={{ pb: 1 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 1 }}>
          Henry Cho
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
          <Avatar
            alt="Henry Cho"
            sx={{
              width: 120,
              height: 120,
              margin: 'auto',
              border: '2px solid',
              borderColor: '#000000'
            }}
            src="avatar.jpg"
          />
        </Box>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 1 }}>
          Space Systems Engineer & Research Analyst
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1, mb: 1 }}>
          Experienced space systems engineer and research analyst with a background in
          satellite technology, software development, and strategic space operations. Skilled in
          project management, cross-functional team leadership, and technical intelligence analysis.
        </Typography>

        <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
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
        <PublicIcon /> Places
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
  const [sortBy, setSortBy] = useState<'none' | 'year' | 'name' | 'time'>('year');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedMarathons = [...marathonsArray].sort((a, b) => {
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
    marathonsArray.reduce((acc, m) => acc + timeToSeconds(m.time), 0) / marathonsArray.length;
  const avgHours = Math.floor(avgTime / 3600);
  const avgMinutes = Math.floor((avgTime % 3600) / 60);
  const avgSeconds = Math.floor(avgTime % 60);

  const bestTime = marathonsArray.reduce((best, m) =>
    timeToSeconds(m.time) < timeToSeconds(best.time) ? m : best
  );

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DirectionsRunIcon /> Marathons
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
              <Typography variant="h6" align="center">{marathonsArray.length}</Typography>
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
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'year') {
                    setSortBy('year');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  <strong>YEAR {sortBy === 'year' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
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
                  <strong>MARATHON {sortBy === 'name' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
                </Button>
              </TableCell>
              <TableCell>
                <Tooltip title="Chip time (hh:mm:ss)">
                  <Button onClick={() => {
                    if (sortBy !== 'time') {
                      setSortBy('time');
                      setSortDirection('asc');
                    } else {
                      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                    }
                  }}>
                    <strong>FINISH TIME {sortBy === 'time' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMarathons.map((marathon, index) => (
              <TableRow key={index}>
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
                <Button sx={{ whiteSpace: 'nowrap' }} onClick={() => {
                  if (sortBy !== 'year') {
                    setSortBy('year');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  <strong>YEAR {sortBy === 'year' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
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
                  <strong>TITLE {sortBy === 'title' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
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
                  <strong>GENRE {sortBy === 'genre' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
                </Button>
              </TableCell>
              <TableCell><strong>SUMMARY</strong></TableCell>
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
                <Button sx={{ whiteSpace: 'nowrap' }} onClick={() => {
                  if (sortBy !== 'year') {
                    setSortBy('year');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  <strong>YEAR {sortBy === 'year' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
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
                  <strong>TITLE {sortBy === 'title' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
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
                  <strong>AUTHOR {sortBy === 'author' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
                </Button>
              </TableCell>
              <TableCell>
                <Button sx={{ whiteSpace: 'nowrap' }} onClick={() => {
                  if (sortBy !== 'genre') {
                    setSortBy('genre');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }}>
                  <strong>GENRE {sortBy === 'genre' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
                </Button>
              </TableCell>
              <TableCell><strong>SUMMARY</strong></TableCell>
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
        {podcastsArray.map((podcast) => (
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

// ==================== FOOD TAB COMPONENTS ====================

function FoodSection() {
  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", px: 2, py: 4 }}>

      {/* Title Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <RestaurantIcon /> Food
        </Typography>
      </Box>

      {/* Two-Panel Grid */}
      <Grid container spacing={3} alignItems="stretch">
        <Grid size={{ xs: 12, md: 6 }}>
          <FoodPanel title="EAT" type="eat" categories={eatFoods} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <FoodPanel title="AVOID" type="avoid" categories={avoidFoods} />
        </Grid>
      </Grid>
    </Box>
  );
}

function SupplementsSection() {
  const [sortBy, setSortBy] = useState<'what' | 'when'>('what');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedSupplements = [...supplementsArray].sort((a, b) => {
    if (sortBy === 'what') {
      return sortDirection === 'asc' ? a.what.localeCompare(b.what) : b.what.localeCompare(a.what);
    }
    if (sortBy === 'when') {
      return sortDirection === 'asc' ? a.when.localeCompare(b.when) : b.when.localeCompare(a.when);
    }
    return 0;
  });

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MedicationIcon /> Supplements
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'what') {
                    setSortBy('what');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }} variant="text" size="small">
                  <strong>WHAT {sortBy === 'what' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => {
                  if (sortBy !== 'when') {
                    setSortBy('when');
                    setSortDirection('asc');
                  } else {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  }
                }} variant="text" size="small">
                  <strong>WHEN {sortBy === 'when' ? (sortDirection === 'desc' ? '↓' : '↑') : ''}</strong>
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

function FoodTab() {
  return (
    <Box>
      <FoodSection />
      <SupplementsSection />
    </Box>
  );
}

// ==================== LIFESTYLE TAB COMPONENTS ====================

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

      <Grid container spacing={3} sx={{ mt: 3 }}>
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
      <SleepSection />
      <BreathingSection />
      <HabitatSection />
    </Box>
  );
}

// ==================== PRODUCTS TAB COMPONENT ====================

function ProductsTab() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ShoppingCartIcon /> Products
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        These are products I personally use and recommend.
      </Typography>

      <Grid container spacing={3}>
        {productsArray.map((product) => (
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
                <Typography variant="body2" color="text.secondary" >
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Open in Amazon">
                  <Button
                    size="small"
                    variant="contained"
                    endIcon={<OpenInNewIcon />}
                    href={product.link}
                    target="_blank"
                    fullWidth
                  >
                    View on Amazon
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
  const [transitioning, setTransitioning] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue !== activeTab) {
      setTransitioning(true);
      setTimeout(() => {
        setActiveTab(newValue);
        setTransitioning(false);
      }, 100); // fade-out time in ms
    }
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
      <Fade in={true} timeout={1000}>
        <Container maxWidth="lg">
          <HeaderSection />
          <Card elevation={3}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
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
                  '& .MuiTab-root': {
                    minWidth: 100,
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
                <Tab label="Food" icon={<RestaurantIcon />} {...a11yProps(5)} />
                <Tab label="Lifestyle" icon={<FavoriteIcon />} {...a11yProps(6)} />
                <Tab label="Products" icon={<ShoppingCartIcon />} {...a11yProps(7)} />
              </Tabs>
            </Box>

            <TabPanel value={activeTab} index={0} fading={transitioning}>
              <ResumeTab />
            </TabPanel>
            <TabPanel value={activeTab} index={1} fading={transitioning}>
              <TravelTab />
            </TabPanel>
            <TabPanel value={activeTab} index={2} fading={transitioning}>
              <MoviesTab />
            </TabPanel>
            <TabPanel value={activeTab} index={3} fading={transitioning}>
              <BooksTab />
            </TabPanel>
            <TabPanel value={activeTab} index={4} fading={transitioning}>
              <PodcastsTab />
            </TabPanel>
            <TabPanel value={activeTab} index={5} fading={transitioning}>
              <FoodTab />
            </TabPanel>
            <TabPanel value={activeTab} index={6} fading={transitioning}>
              <LifestyleTab />
            </TabPanel>
            <TabPanel value={activeTab} index={7} fading={transitioning}>
              <ProductsTab />
            </TabPanel>
          </Card>
        </Container>
      </Fade>
    </Box>
  );
}
