import TopBar from "./app-bars/TopBar";
import styled from "styled-components";
import ImgNotFound from './../assets/img/notFound.jpg'

function NotFound() {
    return (
        <Page>
        <TopBar title="NotFound" link="/" />
        <Img src={ImgNotFound} /> 
      </Page>
    )
}

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

const Img = styled.img`
  width: 90vw;
`

export default NotFound