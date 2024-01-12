import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { goodsData } from "./components/atom";

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
const MainText = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: white;
  margin: 100px 40px 20px 40px;
`;
const SmallMainText = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: white;
  margin: 75px 40px 20px 40px;
`;

const OtherText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: black;
  margin: 60px 0 20px 0;
`;

const ImageContent = styled.div`
  margin: 60px 20px 40px 40px;
  display: flex;
  heigth: 200px;
`;

const ImagesBox = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 28px;
  color: white;
  justify-content: space-between;
  margin: 0px 40px 20px 40px;
`;
const Image = styled.img`
  width: 200px;
  margin-right: 30px;
`;
const SmallImage = styled.img`
  width: 100px;
`;
const CategoryBox = styled.span`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const CategoryBtn = styled.button`
  border: none;
  background-color: #d9d9d9;
  width: 90px;
  height: 30px;
  border-radius: 100px;
  color: #878787;
  font-size: 12px;
`;

const SmallGoodsBox = styled.div`
  cursor: pointer;
`;

const GoodsTitleBox = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
  align-items: center;
`;
const GoodsTitle = styled.div`
  font-weight: 600;
  font-size: 17px;
`;
const GoodsPrice = styled.div`
  margin-left: 20px;
  font-size: 12px;
  color: #878787;
`;
const SmallGoodsPrice = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 10px;
  color: #878787;
`;

const Text = styled.div`
  margin: 13px 40px 0 40px;
  font-size: 14px;
`;

const SmallText = styled.div`
  width: 100px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 12px;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const SmallPrice = styled.div`
  width: 100px;
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  color: #878787;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
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

const Goods = () => {
  const goodsDetail = useRecoilValue(goodsData);
  // 상품검색 API
  const { data, refetch } = useQuery({
    queryKey: ["goodsList"],
    queryFn: async () => {
      return (
        await fetch(`https://colot.site/api/v2/goods?title=${keyword}`)
      ).json();
    },
    onSuccess: () => {},
  });
  const router = useRouter();
  console.log(data?.data);
  const [keyword, setKeyword] = useState(goodsDetail.goodsType);
  return (
    <>
      <Container>
        <MainTextBox>
          <MainText>
            {keyword} 키워드를 통해 <br /> 이런 상품을 추천해드려요
          </MainText>
          <ImageContent>
            <Image src={data?.data[0]?.image}></Image>
            <CategoryBox>
              <CategoryBtn>{data?.data[0]?.category1}</CategoryBtn>
              <CategoryBtn>{data?.data[0]?.category2}</CategoryBtn>
              {data?.data[0]?.category3 && (
                <CategoryBtn>{data?.data[0]?.category3}</CategoryBtn>
              )}
              {data?.data[0]?.category4 && (
                <CategoryBtn>{data?.data[0]?.category4}</CategoryBtn>
              )}
            </CategoryBox>
          </ImageContent>
          <GoodsTitleBox>
            <GoodsTitle>
              {data?.data[0]?.title.replace(/<b>/g, "").replace(/<\/b>/g, "")}
            </GoodsTitle>
            <GoodsPrice>
              {data?.data[0]?.lprice.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </GoodsPrice>
          </GoodsTitleBox>
          <Text>
            {keyword}라는 키워드를 통해 해당 상품을 검색해보았어요. 마음에
            드시나요? 해당 상품을 연인에게 선물해보는 것은 어떨까요?
          </Text>
          <ButtonBox>
            <Button onClick={() => router.push(data?.data[0]?.link)}>
              구매하기
            </Button>
          </ButtonBox>
          <SmallMainText>
            <OtherText>다른 상품 추천받기</OtherText>
          </SmallMainText>
          <ImagesBox>
            {data?.data?.map((ele, index) => (
              <>
                {index > 0 && index < 4 && (
                  <SmallGoodsBox onClick={() => router.push(`${ele?.link}`)}>
                    <SmallImage key={index} src={ele?.image}></SmallImage>
                    <SmallText>
                      {ele?.title?.replace(/<b>/g, "").replace(/<\/b>/g, "")}
                    </SmallText>
                    <SmallGoodsPrice>
                      {ele?.lprice?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </SmallGoodsPrice>
                  </SmallGoodsBox>
                )}
              </>
            ))}
          </ImagesBox>
        </MainTextBox>
      </Container>
    </>
  );
};

export default Goods;
