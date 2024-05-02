import PropTypes from "prop-types";
import { Card } from "@mui/material";

export const BaseCard = ({ pokemon, onCardClick, children }) => {
  const handleClick = (event) => {
    if (onCardClick) {
      onCardClick(event);
    }
  };
  return (
    <Card
      onClick={() => handleClick(pokemon)}
      sx={{
        borderRadius: "6px",
        border: "1px solid #e5e7eb",
        boxShadow: "-3px 3px 10px rgba(0, 0, 0, 0.3)"
      }}
    >
      {children}
    </Card>
  );
};

BaseCard.propTypes = {
  pokemon: PropTypes.object,
  onCardClick: PropTypes.func,
  children: PropTypes.object
};
