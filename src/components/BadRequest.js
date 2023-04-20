//StyledComponents
import { ErrorPhoto } from "./BadRequestStyledComponent";

//Assets
import BabyYoda from "../assets/babyyoda.jpg";

export default function BadRequest() {
  return (
    <>
      <h3 style={{ marginBottom: "30px" }}>Bad city you entered, try again</h3>
      <ErrorPhoto src={BabyYoda} />
    </>
  );
}
