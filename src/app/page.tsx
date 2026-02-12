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
  IconButton,
  List,
  ListItem,
  ListItemText,
  Link,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import StarIcon from '@mui/icons-material/Star';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center" mb={4}>
            <Grid size={{ xs: 12, md: 3 }}>
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
            <Grid size={{ xs: 12, md: 9 }}>
              <Typography variant="h3" component="h1" gutterBottom>
                Henry Cho
              </Typography>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                Space Systems Engineer & Research Analyst
              </Typography>
              <Typography variant="body1">
                Experienced space systems engineer and research analyst with a proven track record in satellite technology, software development, and strategic space operations. Skilled in project management, cross-functional team leadership, and technical intelligence analysis.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 3 }}>
              <Box display="flex" alignItems="center">
                <ContactMailIcon sx={{ mr: 2 }} />
                {/* Clickable mailto link */}
                <Link
                  href="mailto:henry.cho.af@gmail.com"
                  underline="hover"
                  sx={{ mr: 1 }}
                >
                  <Typography color="primary">
                    henry.cho.af@gmail.com
                  </Typography>
                </Link>

                {/* Copy Button */}
                <Tooltip title="Copy email">
                  <IconButton
                    size="small"
                    onClick={() =>
                      navigator.clipboard.writeText("henry.cho.af@gmail.com")
                    }
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}>
              <Box display="flex" alignItems="center">
                <PhoneIcon sx={{ mr: 2 }} />
                <Typography>+1 (626) 759-8684</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}>
              <Box display="flex" alignItems="center">
                <PlaceIcon sx={{ mr: 2 }} />
                <Typography>Albuquerque, New Mexico</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 3 }}>
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
                <LinkedInIcon sx={{ mr: 2 }} />
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
              "Javascript",
              "Typescript",
              "Node.js",
              "React.js",
              "Next.js",
              "MUI",
              "Git",
              "Docker",
              "PostgreSQL",
              "PyTorch"
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

      {/* AI Skills */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <AutoAwesomeIcon sx={{ mr: 2 }} />
            AI Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              "ChatGPT",                // Nov 2022
              "Perplexity.ai",          // Dec 2022
              "Anthropic Claude",       // Mar 2023
              "Microsoft Copilot",      // Mar 2023 (Office integration)
              "Cursor",                 // May 2023
              "Gemini 2.5 Pro",         // Feb 2024
              "Palantir Foundry + AIP", // 2016 (Foundry), AIP (2023)
              "Ontology SDK",           // 2024
              "Firebase AI Studio"      // 2024
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="secondary"
                variant="outlined"
              />
            ))}
          </Box>
        </CardContent>
      </Card>


      {/* Key Skills */}
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
              { name: "Spanish", level: "Novice" },
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
              { country: "South Korea", year: 2024 },
              { country: "Vietnam", year: 2025 }
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

      {/* Volunteer Work */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <WorkIcon sx={{ mr: 2 }} />
            Volunteer Work
          </Typography>
          <Typography variant="body1">
            Habitat for Humanity (2021-Present)
          </Typography>
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
                  <TableCell width="50px">#</TableCell>
                  <TableCell>Marathon</TableCell>
                  <TableCell>Finish Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { name: "2019 Los Angeles Marathon", time: "5:22:44" },
                  { name: "2019 Air Force Marathon", time: "5:21:33" },
                  { name: "2020 Air Force Marathon", time: "5:23:52" },
                  { name: "2021 Air Force Marathon", time: "5:23:03" },
                  { name: "2021 Marine Corps Marathon", time: "5:28:40" },
                  { name: "2021 Space Coast Marathon", time: "4:59:30" },
                  { name: "2022 Disney Marathon", time: "5:32:16" },
                  { name: "2022 Air Force Marathon", time: "5:54:07" },
                  { name: "2023 Air Force Marathon", time: "5:44:12" },
                  { name: "2023 Duke City Marathon", time: "5:16:05" },
                  { name: "2024 Denver Colfax Marathon", time: "5:55:32" },
                  { name: "2024 Air Force Marathon", time: "5:58:39" },
                  { name: "2024 Duke City Marathon", time: "5:23:59" },
                  { name: "2025 Mesa Marathon", time: "5:42:32" },
                  { name: "2025 Bataan Memorial Death March", time: "6:26:48" },
                  { name: "2025 Albuquerque Half Marathon", time: "2:17:39" },
                  { name: "2025 Oklahoma City Memorial Marathon", time: "5:30:18" },
                  { name: "2025 Air Force Marathon", time: "6:39:56" },
                  { name: "2025 Duke City Marathon", time: "6:08:49" },
                  { name: "2025 Albuquerque Fiesta Marathon", time: "6:00:21" }
                ].map((marathon, index) => (
                  <TableRow key={marathon.name}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{marathon.name}</TableCell>
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
