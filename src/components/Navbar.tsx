import { useState, useEffect } from "react";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const menuItems = [
  { label: "How it works", path: "#features" },
  { label: "Pricing", path: "#pricing" },
  { label: "Testimonials", path: "#reviews" },
  { label: "Contact", path: "#contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const mobileMenu = (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: "100%",
          maxWidth: 300,
          bgcolor: theme.palette.background.paper
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <IconButton
          onClick={() => setDrawerOpen(false)}
          sx={{ ml: "auto", display: "flex" }}
        >
          <CloseIcon />
        </IconButton>
        
        <List sx={{ pt: 0 }}>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path)}
                sx={{
                  py: 1.5,
                  "&:hover": {
                    bgcolor: theme.palette.action.hover
                  }
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1.1rem"
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                handleNavigation("/login");
                setDrawerOpen(false);
              }}
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600
              }}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar 
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        bgcolor: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
        transition: "all 0.3s ease",
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 6 } }}>
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h5"
            fontWeight="800"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            ExamHub
          </Typography>
        </motion.div>

        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ p: 1 }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="text"
                onClick={() => handleNavigation(item.path)}
                sx={{
                  fontWeight: 500,
                  color: "text.primary",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "transparent"
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={() => handleNavigation("/login")}
              sx={{
                px: 4,
                borderRadius: 2,
                fontWeight: 600
              }}
            >
              Get Started
            </Button>
          </Box>
        )}
        
        {mobileMenu}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;