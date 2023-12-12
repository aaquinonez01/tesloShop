import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import useUserStore from "../store/authSore";
export const Navbar = () => {
  const { status } = useUserStore();
  return (
    <AppBar>
      <Toolbar>
        <RouterLink to="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </RouterLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <RouterLink to="/category/men" passHref>
            <Link>
              <Button>Hombres</Button>
            </Link>
          </RouterLink>
          <RouterLink to="/category/women" passHref>
            <Link>
              <Button>Mujeres</Button>
            </Link>
          </RouterLink>
          <RouterLink to="/category/kid" passHref>
            <Link>
              <Button>Niños</Button>
            </Link>
          </RouterLink>
        </Box>

        <Box flex={1} />

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <RouterLink to="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </RouterLink>

        <RouterLink to={"/auth/login"}>
          {status === "not-authenticated" && (
            <Button
              variant="contained"
              sx={{ ml: 3, ":hover": { color: "black" } }}
              color="success"
            >
              Inciciar Sesion
            </Button>
          )}
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};
