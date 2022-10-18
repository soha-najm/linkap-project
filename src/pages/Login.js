import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { adminUsername, adminPass } from "../utilities/Constantans";
import {
  TextField,
  Button,
  Paper,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const login = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && pass) {
      if (username === adminUsername && pass === adminPass) {
        localStorage.setItem("loggedInId", username);
        login.replace("/dashboard");
      }
    }
  };

  return (
    <Container>
      <CssBaseline />
      <Paper
        sx={{
          marginTop: 8,
          marginLeft: "20%",
          marginRight: "20%",
          p: "3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "250px",
          maxWidth: "600px",
          maxHeight: "800px",
          minHeight: "600px",
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">Login</Typography>

        <TextField
          type="text"
          label="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          required
          sx={{ width: "80%" }}
        />
        <TextField
          type="password"
          label="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          margin="normal"
          required
          sx={{ width: "80%" }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ margin: 3, marginTop: 6, borderRadius: 1, p: 2, width: "80%" }}
        >
          LOGIN
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
