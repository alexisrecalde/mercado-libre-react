import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ItemCount from "../items/ItemCount";
import style from "./style.css";
import { useNavigate } from "react-router-dom";

export default function MultiActionAreaCard({ producto }) {
  let navigate = useNavigate();

  const handleNavegation = () => {
    navigate(`/producto/${producto.id}`);
  };
  return (
    <Card className="card-container" sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={handleNavegation}>
        <CardMedia component="img" height="50" image={producto.images[0]} />
        <hr />
        <CardContent>
          <Typography
            className="productos-title"
            gutterBottom
            variant="h6"
            component="div"
          >
            {producto.name} | {"$10000"}
          </Typography>
          <Typography
            className="product-text-description"
            variant="body2"
            color="text.secondary"
          >
            {producto.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount stock={5} />
    </Card>
  );
}
