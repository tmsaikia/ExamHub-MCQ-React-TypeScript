import { useState, useEffect } from "react";
import { 
  AppBar, Toolbar, Button, Typography, Box, IconButton, Drawer, 
  List, ListItem, ListItemText, Container 
} from "@mui/material";
import { useScrollTrigger, Slide } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const menuItems = [
  { label: "How it works", path: "#" },
  { label: "Our Service", path: "#" },
  { label: "Reviews", path: "#" },
  { label: "Contact Us", path: "#" },
  { label: "FAQ", path: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        sx={{ 
          backdropFilter: "blur(12px)",
          bgcolor: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
          transition: "all 0.3s ease",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", px: 0 }}>
            <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
              <Typography variant="h4" fontWeight="800" color="primary">
                ExamHub
              </Typography>
            </motion.div>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="text"
                  sx={{ fontWeight: 500, '&:hover': { color: "primary.main" } }}
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary"
                sx={{ borderRadius: "50px", px: 4 }}
              >
                Get Started
              </Button>
            </Box>

            <IconButton 
              sx={{ display: { md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}