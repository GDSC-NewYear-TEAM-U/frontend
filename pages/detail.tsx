import styled from "styled-components";
import { goodsData } from "./components/atom/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { use } from "react";
import { SlPresent } from "react-icons/sl";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 430px;
  height: 100vh;
  background-color: white;
`;

const MainTextBox = styled.div`
  width: 430px;
  height: 180px;
  background-color: rgba(255, 129, 86, 1);
`;

const TitleText = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin: 130px 40px 20px 40px;
`;

const DisplayCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 100px;
  width: 230px;
  heigth: 230px;
`;
const MainImage = styled.div`
  width: 225px;
  height: 225px;
  font-size: 185px;
  color: #ff589a;
`;
const MainText = styled.div`
  margin-top: 30px;
  font-weight: 700;
  font-size: 28px;
`;
const DetailText = styled.div`
margin: 0 40px;
margin-top 20px;
font-weight: 400;
font-size: 14px;
`;

const Button = styled.button`
  border: 0;
  margin-top: 30px;
  padding: 12px 25px;
  background: linear-gradient(
    90deg,
    rgba(255, 88, 154, 1) 0%,
    rgba(255, 129, 86, 1) 100%
  );
  width: 290px;
  min-height: 45px;
  border-radius: 116px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(222, 88, 154, 1) 0%,
      rgba(222, 129, 86, 1) 100%
    );
  }
`;

const Detail = () => {
  const [goodsDetail, setGoodsDetail] = useRecoilState(goodsData);

  const router = useRouter();
  console.log(goodsDetail);
  return (
    <>
      <Container>
        <MainTextBox>
          <TitleText>당신의 연인을 위한 선물은</TitleText>
          <DisplayCenter>
            {goodsDetail?.image != "" ? (
              <Image src={goodsDetail?.image} />
            ) : (
              <MainImage>
                <SlPresent />
              </MainImage>
            )}
            <MainText>{goodsDetail?.goodsType}</MainText>
            <DetailText>{goodsDetail?.info}</DetailText>
            <Button onClick={() => router.push(`/goods`)}>상품보기</Button>
          </DisplayCenter>
        </MainTextBox>
      </Container>
    </>
  );
};

export default Detail;
