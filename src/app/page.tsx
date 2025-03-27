"use client";

import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip, 
  Avatar, 
  Box, 
  Divider, 
  List, 
  ListItem, 
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import StarIcon from '@mui/icons-material/Star';
import PlaceIcon from '@mui/icons-material/Place';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import PublicIcon from '@mui/icons-material/Public';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Grid container spacing={3} alignItems="center" mb={4}>
        <Grid item xs={12} md={3}>
          <Avatar 
            alt="Henry Cho" 
            sx={{ 
              width: 200, 
              height: 200, 
              margin: 'auto',
              border: '4px solid',
              borderColor: 'primary.main'
            }}
            src="/api/placeholder/200/200"
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h3" component="h1" gutterBottom>
            Henry Cho
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Space Systems Engineer & Intelligence Analyst
          </Typography>
          <Typography variant="body1">
            Experienced space systems engineer and intelligence analyst with a proven track record in satellite technology, software development, and strategic space operations. Skilled in project management, cross-functional team leadership, and technical intelligence analysis.
          </Typography>
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <ContactMailIcon sx={{ mr: 2 }} />
                <Typography>henry.cho.af@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ mr: 2 }} />
                <Typography>+1 (626) 759-8684</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" alignItems="center">
                <PlaceIcon sx={{ mr: 2 }} />
                <Typography>Albuquerque, New Mexico</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Link 
                href="https://www.linkedin.com/in/the-henry-cho" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  textDecoration: 'none',
                  color: 'primary.main'
                }}
              >
                <LinkedInIcon sx={{ mr: 1 }} />
                <Typography>linkedin.com/in/the-henry-cho</Typography>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Work Experience */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <WorkIcon sx={{ mr: 2 }} />
            Professional Experience
          </Typography>
          <List>
            {[
              {
                title: "Engineer, United States Space Force",
                period: "Apr 2023 - Feb 2026",
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
            ].map((job, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={job.title}
                    secondary={`${job.period} | ${job.location}`}
                  />
                </ListItem>
                {index < 2 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Education */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <SchoolIcon sx={{ mr: 2 }} />
            Education
          </Typography>
          <List>
            {[
              {
                degree: "Coding Bootcamp",
                institution: "Galvanize Inc, Boulder, CO",
                year: "August 2024"
              },
              {
                degree: "Master's in Electrical Engineering",
                institution: "Air Force Institute of Technology, Dayton, OH",
                year: "March 2021"
              },
              {
                degree: "Bachelor's in Aerospace Engineering",
                institution: "University of Michigan, Ann Arbor, MI",
                year: "May 2015",
                honors: "Cum Laude"
              }
            ].map((edu, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={edu.degree}
                    secondary={`${edu.institution} | ${edu.year} ${edu.honors ? `| ${edu.honors}` : ''}`}
                  />
                </ListItem>
                {index < 2 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Technical Skills */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <CodeIcon sx={{ mr: 2 }} />
            Technical Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              "C++",
              "MATLAB",
              "Python",
              "Julia",
              "Typescript",
              "React",
              "Next.js",
              "MUI",
              "OSDK"
            ].map((skill) => (
              <Chip 
                key={skill} 
                label={skill} 
                color="primary" 
                variant="outlined" 
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <StarIcon sx={{ mr: 2 }} />
            Key Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              "Space Systems Engineering", 
              "Intelligence Analysis", 
              "Project Management", 
              "Software Development", 
              "Risk Assessment", 
              "Satellite Operations", 
              "Technical Intelligence",
              "Cybersecurity",
              "Team Leadership"
            ].map((skill) => (
              <Chip 
                key={skill} 
                label={skill} 
                color="primary" 
                variant="outlined" 
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Languages */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <LanguageIcon sx={{ mr: 2 }} />
            Languages
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              { name: "English", level: "Advanced" },
              { name: "Spanish", level: "Basic" },
              { name: "French", level: "Basic" },
              { name: "Korean", level: "Basic" },
              { name: "Vietnamese", level: "Basic" }
            ].map((lang) => (
              <Chip 
                key={lang.name} 
                label={`${lang.name} (${lang.level})`} 
                color="secondary" 
                variant="outlined" 
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Volunteer Work */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <WorkIcon sx={{ mr: 2 }} />
            Volunteer Work
          </Typography>
          <Typography variant="body1">
            Volunteer with Habitat for Humanity
          </Typography>
        </CardContent>
      </Card>

      {/* Countries Visited */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <PublicIcon sx={{ mr: 2 }} />
            Countries Visited
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              { country: "Japan", year: 2018 },
              { country: "Germany", year: 2019 },
              { country: "Spain", year: 2019 },
              { country: "Canada", year: 2022 },
              { country: "United Kingdom", year: 2023 },
              { country: "France", year: 2024 },
              { country: "South Korea", year: 2024 }
            ].map((visit) => (
              <Chip 
                key={visit.country} 
                label={`${visit.country} (${visit.year})`} 
                color="secondary" 
                variant="outlined" 
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Marathons */}
<Card>
  <CardContent>
    <Typography variant="h5" gutterBottom>
      <DirectionsRunIcon sx={{ mr: 2 }} />
      Marathon Achievements
    </Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Marathon</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Finish Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            { name: "Los Angeles Marathon", location: "Los Angeles, CA", year: 2019, time: "03:45:22" },
            { name: "Air Force Marathon", location: "Dayton, OH", year: 2019, time: "03:52:17" },
            { name: "Air Force Marathon", location: "Dayton, OH", year: 2020, time: "03:40:55" },
            { name: "Air Force Marathon", location: "Dayton, OH", year: 2021, time: "03:38:44" },
            { name: "Space Coast Marathon", location: "Cocoa Beach, FL", year: 2021, time: "03:43:11" },
            { name: "Disney Marathon", location: "Orlando, FL", year: 2022, time: "03:50:33" },
            { name: "Air Force Marathon", location: "Dayton, OH", year: 2022, time: "03:37:26" },
            { name: "Air Force Marathon", location: "Dayton, OH", year: 2023, time: "03:36:09" },
            { name: "Duke City Marathon", location: "Albuquerque, NM", year: 2023, time: "03:42:55" },
            { name: "Denver Marathon", location: "Denver, CO", year: 2024, time: "03:39:47" },
            { name: "Air Force Marathon", location: "Dayton, OH", year: 2024, time: "03:35:33" },
            { name: "Duke City Marathon", location: "Albuquerque, NM", year: 2024, time: "03:41:22" },
            { name: "Mesa Marathon", location: "Mesa, AZ", year: 2025, time: "03:43:56" },
            { name: "Bataan Memorial Death March", location: "White Sands, NM", year: 2025, time: "04:15:37" }
          ].map((marathon) => (
            <TableRow key={`${marathon.name}-${marathon.year}`}>
              <TableCell>{marathon.name}</TableCell>
              <TableCell>{marathon.location}</TableCell>
              <TableCell>{marathon.year}</TableCell>
              <TableCell>{marathon.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </CardContent>
</Card>
    </Container>
  );
}