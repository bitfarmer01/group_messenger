import styled from "styled-components";
import { Avatar, Typography } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebase";

function Header() {
  const [user] = useAuthState(auth); //Retrieve and monitor the authentication state from Firebase and check if the firebase.user is logged in

  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => {
            auth.signOut();
          }}
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </HeaderLeft>
      <HeaderTitle>
        <Typography variant="h4">Messenger App</Typography>
      </HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;
  background-color: #120e43;
  color: white;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 2rem;
  }
`;

const HeaderTitle = styled.div`
  margin-right: 35rem;
  color: white;
`;
const HeaderAvatar = styled(Avatar)`
  cursor:pointer :hover {
    opacity: 0.8;
  }
`;
