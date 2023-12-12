import { Box } from "@mui/material";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};
