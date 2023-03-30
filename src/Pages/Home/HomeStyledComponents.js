import styled from "styled-components";
import { CenteredDiv } from "../../components/Common/SharedStyleComponents";

const HomePageContainer = styled(CenteredDiv)`
  height: 90vh;
  background: linear-gradient(to left top, #f5f5f5, rgb(192, 192, 192));
`;

const AutocompleteContainer = styled.div`
  width: 300px;
`;

const UserOption = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 8px;
    flex-shrink: 0;
  }
`;

export { UserOption, AutocompleteContainer, HomePageContainer };
