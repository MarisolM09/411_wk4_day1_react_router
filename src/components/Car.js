import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import { Container, Chip, Paper} from "@mui/material";

const Car = (props) => {
  const { id } = useParams();
  let car = cars.find((car) => car.id == id);

  return (
    <Container classsName="container" maxWidth="sm">
      
        <Paper elevation={3}>
          <h2>{car.Name}</h2>
          <div className="chip">
            <Chip classname="chip" label={`Id: ${car.id}`} />
            <Chip label={`Miles Per Gallon: ${car.Miles_per_Gallon}`} />
            <Chip label={`Cylinders: ${car.Displacement}`} />
            <Chip label={`Displacement: ${car.Horsepower}`} />
            <Chip label={`Weight: ${car.Weight_in_lbs} lbs`} />
            <Chip label={`Acceleration: ${car.Acceleration}`} />
            <Chip label={`Year: ${car.Year}`} />
            <Chip label={`Origin: ${car.Origin}`} />
          </div>
        </Paper>
    
    </Container>
  );
};

export default Car;
