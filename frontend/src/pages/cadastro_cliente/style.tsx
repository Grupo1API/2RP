import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: "1em",
  },
  campo: {
    display: "flex",
    gap: "5px 10px",
  },
  text: {
    marginBottom: "2em",
  },
  button: {
    width: "2em",
  },
}));