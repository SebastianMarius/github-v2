//StyledComponents
import { ErrorPhoto } from "./BadRequestStyledComponent";

//Assets
import BabyYoda from "../assets/babyyoda.jpg";

export default function BadRequest(props) {
  
  const {internattionalizare, activelang} = props;

  return (
    <>
      <h3 style={{ marginBottom: "30px" }}>{internattionalizare[activelang].badRequest.badRequest}</h3>
      <ErrorPhoto src={BabyYoda} />
    </>
  );
}
