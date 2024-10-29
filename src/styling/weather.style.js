import {
  Box,
  InputBase,
  Button,
  styled,
  Typography,
  createTheme,
} from "@mui/material";
import Sunset from "../assets/2.jpg";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#00000",
    },
    secondary: {
      main: "rgb(255,0,0)",
    },
    background: {
      default: "#F0F2F5",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export const InfoBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  backgroundColor: "#FFF",
  padding: theme.spacing(2),
  borderRadius: "0 24px 24px 0",
  [theme.breakpoints.up("md")]: {
    width: "60%",
    height: "90%",
  },
  '&.info-box':{
    background: 'antiquewhite'
  }
}));

export const Component = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",

  // Extra-small screens (0px and up)
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    width: "100%",
    padding: theme.spacing(1),
  },

  // Small screens (600px and up)
  [theme.breakpoints.up("sm")]: {
    width: "90%",
  },

  // Medium screens (900px and up)
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    width: "65%",
  },

  // Large screens (1200px and up)
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },

  // Extra-large screens (1536px and up)
  [theme.breakpoints.up("xl")]: {
    width: "40%",
  },
}));


export const Image = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Sunset})`,
  width: "100%",
  height: "200px",
  backgroundSize: "cover",
  borderRadius: "20px 20px 0 0",

  // Adjust for extra-small screens (0px and up)
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    height: "150px",
  },

  // Adjust for small screens (600px and up)
  [theme.breakpoints.up("sm")]: {
    width: "60%",
    height: "250px",
  },

  // Medium screens (900px and up)
  [theme.breakpoints.up("md")]: {
    width: "40%",
    height: "80%",
    borderRadius: "20px 0 0 20px",
  },

  // Large screens (1200px and up)
  [theme.breakpoints.up("lg")]: {
    height: "90%",
  },

  // Extra-large screens (1536px and up)
  [theme.breakpoints.up("xl")]: {
    height: "100%",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  background: "#445A6F",
  padding: theme.spacing(2),
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  '&.container': {
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'space-between',
  },

  // Styles for medium screens (laptops)
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // Styles for large screens (larger laptops, desktops)
  [theme.breakpoints.up("lg")]: {
    maxWidth: "960px",
  },
}));
export const Input = styled(InputBase)(({ theme }) => ({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
  borderBottom: "2px solid #FFF",
  width: "80%",
  "&::placeholder": {
    color: "#CCC",
  },

  '&.city-name': {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%", // For laptops and larger screens
    },
  }
}));

export const GetButton = styled(Button)(({ theme }) => ({
  background: theme.palette.secondary.main,
  "&:hover": {
    background: theme.palette.secondary.dark,
  },

  // Responsive button sizing
  width: "100%",
  marginTop: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    width: "auto",
    marginTop: 0,
  },
}));

export const ErrorMessage = styled(Typography)({
  color: "red",
  marginTop: 10,
});

export const Row = styled(Typography)({
  padding: 10,
  fontSize: 18,
  letterSpacing: 1.5,
  display: "flex",
  alignItems: "center",
  "& > svg": {
    marginRight: 10,
  },
});
