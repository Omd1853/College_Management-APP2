import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { login } from "../services/api";

export function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigation.navigate("Stats");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold">College Info Login</label>
      
      <textField
        hint="Username"
        text={username}
        onTextChange={(e) => setUsername(e.value)}
        className="input p-2 mb-4 w-3/4"
      />
      
      <textField
        hint="Password"
        secure={true}
        text={password}
        onTextChange={(e) => setPassword(e.value)}
        className="input p-2 mb-4 w-3/4"
      />
      
      {error ? <label className="text-red-500 mb-2">{error}</label> : null}
      
      <button
        className="btn btn-primary p-2 w-3/4"
        onTap={handleLogin}
      >
        Login
      </button>
      
      <button
        className="btn btn-secondary p-2 w-3/4 mt-2"
        onTap={() => navigation.navigate("PublicStats")}
      >
        View Public Stats
      </button>
    </flexboxLayout>
  );
}