import { useRecoilValue } from "recoil";
import { Container, MainTextBox, MainText, DisplayCenter } from "./detail";

export const Detail = () => {
  const goodsData = useRecoilValue(goodsData);
  return (
    <>
      <Container>
        <MainTextBox>
          <MainText>당신의 연인을 위한 선물은</MainText>
          <DisplayCenter>dddd</DisplayCenter>
        </MainTextBox>
      </Container>
    </>
  );
};
