import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../components/context/UserContext";
import { apiServices } from "../services/apiServices";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BallTriangle as LoadingAnimation } from "react-loader-spinner";

function HomePage() {
  const [books, setBooks] = useState(null);
  const { token } = useContext(UserContext);

  useEffect(() => {
    const request = apiServices.getBooks(token);
    request.then((response) => setBooks(response.data));
    request.catch((err) => console.log(err));
  }, [token]);

  // function handleClick post request to add book to bag
  function handleClick(id) {
    const bookId = id;
    const request = apiServices.addBookToBag(token, bookId);
    request.then((response) => console.log(response));
    request.catch((err) => console.log(err));
  }

    if (!books) {
        return (
            <Page>
                <StyledNav>
                    <Title>Home</Title>
                    <Link to="/my-bag">
                        <FaShoppingCart size={30} color="#333" />
                    </Link>
                </StyledNav>
                <LoadingAnimation
                    height={70}
                    width={70}
                    radius={5}
                    color="#000"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle=""
                    visible={true}
                />
            </Page>
        );
    }   


  return (
    <Page>
      <StyledNav>
        <Title>Home</Title>
        <Link to="/my-bag">
          <FaShoppingCart size={30} color="#333" />
        </Link>
      </StyledNav>
      <Books>
        {books.map((book) => (
          <BookContainer key={book._id} onClick={() => handleClick(book._id)}>
            <Background />
            <Book>
              <img src={book.imageURL} alt="bookURL"></img>
              <InfoContainer>
                <span>
                  {" "}
                  <h1>{book.title}</h1>
                </span>
                <span className="price"> ${book.price}</span>
              </InfoContainer>
            </Book>
          </BookContainer>
        ))}
      </Books>
    </Page>
  );
}

export default HomePage;

const Page = styled.div`
  background-color: EFEFEF;
  box-sizing: border-box;
  padding: 25px 40px 0 40px;

  width: 100vw;
  height: 100vh;
  margin-bottom: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Books = styled.div`
  box-sizing: border-box;
  max-width: 1000px;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 46px;
  row-gap: 27px;
`;

const BookContainer = styled.div`
  width: 140px;
  height: 205px;
  position: relative;
  margin-bottom: 50px;
`;
const Book = styled.div`
  overflow: hidden;

  img {
    width: 140px;
    height: 205px;
    object-fit: cover;
    border-radius: 20px;
  }
  position: absolute;
  z-index: 1;

  h1 {
    width: 100px;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #262626;
  }
`;

const InfoContainer = styled.div`
  display: flex;

  .price {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #1c1c1c;
  }
`;

const Background = styled.div`
  width: 140px;
  height: 205px;
  background-color: #262626;
  border-radius: 20px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 0;
`;

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  .icon {
    font-size: 30px;
  }

  .invisible {
    width: 10px;
    height: 5px;
  }
`;

const Title = styled.h1`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #000000;
`;
