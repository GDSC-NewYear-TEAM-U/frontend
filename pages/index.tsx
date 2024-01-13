import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { SlPresent } from "react-icons/sl";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginData } from "./components/atom/atom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 430px;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(255, 88, 154, 1) 0%,
    rgba(255, 129, 86, 1) 100%
  );
`;

const Content = styled.div`
  margin: 220px 70px 0px 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const MainImage = styled.div`
  width: 225px;
  height: 225px;
  font-size: 185px;
  color: white;
`;

const MainText = styled.div`
  font-size: 32px;
  font-weight: 700;
  color:white;
  position: absolute;
  top: 440px;
  left 0px;
  right: 0px; 
`;

const Text = styled.div`
  font-size: 16px;
  color: white;
  margin-top: 40px;
`;

const Button = styled.button`
  margin-top: 35px;
  border: 0;
  background-color: white;
  width: 232px;
  height: 45px;
  border-radius: 116px;
  font-weight: 600;
  font-size: 18px;
  color: #ff589a;
  cursor: pointer;
  :hover {
    background-color: #dddddd;
  }
`;

const Button2 = styled.button`
  margin-top: 10px;
  border: 2px solid white;
  width: 232px;
  height: 45px;
  border-radius: 116px;
  font-weight: 500;
  font-size: 18px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useRecoilState(LoginData);
  useEffect(() => {
    console.log(router.asPath);
    router.asPath != "/" && setUser(router.asPath);
  }, []);
  return (
    <>
      <Container>
        <Content>
          <MainImage>
            <SlPresent />
          </MainImage>
          <MainText>기쁨펀치</MainText>
          <Text>내 연인은 어떤 선물을 받고 싶을까?</Text>
          <Button onClick={() => router.push("/question")}>시작하기</Button>
          {user == "" ? (
            <Button2 onClick={() => router.push("/login")}>로그인</Button2>
          ) : (
            <Button2
              onClick={() => {
                setUser("");
                router.push(`/`);
              }}
            >
              로그아웃
            </Button2>
          )}
        </Content>
      </Container>
    </>
  );
}
