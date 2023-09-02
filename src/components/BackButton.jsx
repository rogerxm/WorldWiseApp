import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate("..");
      }}
    >
      &larr; Back
    </Button>
  );
};
