import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import LayoutStyled from "./LayoutStyled";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const isLoading = false;
  return (
    <LayoutStyled>
      <Header />
      {isLoading ? <Loading /> : children}
    </LayoutStyled>
  );
};

export default Layout;
