import { Container, Grid, Typography, Link, Box, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        py: { xs: 3, sm: 5 }, // Reduce padding on mobile
        mt: 6,
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent={{ xs: "center", sm: "space-between" }} // Center on mobile, space between on larger screens
          textAlign={{ xs: "center", sm: "left" }} // Center text for mobile
        >
          {/* Branding Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              ExamHub
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Your trusted online exam platform.
            </Typography>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Company
            </Typography>
            <Box>
              {["About Us", "How to Work?", "Popular Course", "Service", "Courses"].map((text) => (
                <Link key={text} href="#" color="inherit" underline="none" display="block">
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Categories Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Categories
            </Typography>
            <Box>
              {["Offline Course", "Video Course"].map((text) => (
                <Link key={text} href="#" color="inherit" underline="none" display="block">
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Support
            </Typography>
            <Box>
              {["FAQ", "Help Center", "Career", "Privacy Policy"].map((text) => (
                <Link key={text} href="#" color="inherit" underline="none" display="block">
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider Line */}
        <Divider sx={{ my: 3 }} />

        {/* Social Media & Copyright */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }} // Stack on mobile, row on larger screens
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} ExamHub. All rights reserved.
          </Typography>
          <Box mt={{ xs: 2, sm: 0 }}> {/* Add spacing for mobile */}
            {[
              { icon: <FacebookIcon />, link: "#" },
              { icon: <TwitterIcon />, link: "#" },
              { icon: <InstagramIcon />, link: "#" },
            ].map(({ icon, link }, index) => (
              <Link key={index} href={link} color="inherit" sx={{ mx: 1 }}>
                {icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
