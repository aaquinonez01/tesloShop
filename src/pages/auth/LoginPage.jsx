import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../layout/AuthLayout";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import useUserStore from "../../store/authSore";
const LoginPage = () => {
  const { setStatus } = useUserStore();
  return (
    <AuthLayout>
      <Box sx={{ width: 380, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Iniciar Sesión
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label="Correo" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              color="primary"
              disabled
              className="circular-btn"
              size="large"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link
              target="_blank"
              to={"https://facebook-3pms.onrender.com/"}
              defaultChecked={false}
            >
              <Button
                onClick={() => setStatus("checking")}
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
                sx={{ display: "flex", gap: 2, ":hover": { color: "black" } }}
              >
                <FacebookIcon /> <span>Iniciar Sesion con Facebook</span>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              className="circular-btn"
              size="large"
              fullWidth
              disabled
              sx={{ display: "flex", gap: 2, ":hover": { color: "black" } }}
            >
              <GoogleIcon /> <span>Iniciar Sesion con Google</span>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ fontSize: 12, color: "red" }}
              variant="p"
              component={"p"}
            >
              Nota: Por el momento solo funciona el logueo por Facebook
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="end"></Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
