import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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

const MainText = styled.div`
  font-size: 32px;
  font-weight: 700;
  color:white;
  position: absolute;
  top: 240px;
  left 0px;
  right: 0px; 
`;

const ButtonBox = styled.div`
  margin-top: 80px;
`;
const Button = styled.button`
  display: flex;
  margin-top: 15px;
  padding: 13px 40px 13px 35px;
  border: 2px solid white;
  width: 232px;
  height: 45px;
  border-radius: 116px;
  font-weight: 500;
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const IconSize = styled.div`
  font-size: 25px;
  padding-right: 10px;
`;
const IconPosition = styled.div`
  top: -5px;
  position: relative;
`;

const Button2 = styled.button`
  display: flex;
  margin-top: 15px;
  padding: 13px 40px 13px 35px;
  border: 2px solid white;
  width: 232px;
  height: 45px;
  border-radius: 116px;
  font-weight: 500;
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Button3 = styled.button`
  margin-top: 15px;
  border: 2px solid white;
  width: 232px;
  height: 45px;
  border-radius: 116px;
  font-weight: 500;
  font-size: 14px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const IconSize2 = styled.div`
  font-size: 23px;
  padding-right: 19px;
`;
const IconPosition2 = styled.div`
  top: -4px;
  position: relative;
`;

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    setKakaoState(false);
    setGoogleState(false);
  }, []);
  const [kakaoState, setKakaoState] = useState(false);
  const [googleState, setGoogleState] = useState(false);

  //   const { data: kakao } = useQuery({
  //     queryKey: ["kakaoLogin"],
  //     queryFn: async () => {
  //       return (
  //         await fetch(`https://colot.site/api/v1/oauth2/authorize/kakao`)
  //       ).json();
  //     },
  //     enabled: kakaoState,
  //     onSuccess: () => setKakaoState(false),
  //   });

  //   const { data: google } = useQuery({
  //     queryKey: ["googleLogin"],
  //     queryFn: async () => {
  //       return (
  //         await fetch(`https://colot.site/api/v1/oauth2/authorize/google`)
  //       ).json();
  //     },
  //     enabled: googleState,
  //     onSuccess: () => setGoogleState(false),
  //   });
  return (
    <>
      <Container>
        <Content>
          <MainText>소셜 로그인</MainText>
          <ButtonBox>
            <Button
              onClick={() => {
                setKakaoState(true);
                router.push(`https://colot.site/api/v1/oauth2/authorize/kakao`);
              }}
            >
              <IconPosition>
                <IconSize>
                  <RiKakaoTalkFill />
                </IconSize>
              </IconPosition>
              카카오톡 로그인 하기
            </Button>
            <Button2
              onClick={() => {
                setGoogleState(true);
                router.push(
                  `https://colot.site/api/v1/oauth2/authorize/google`
                );
              }}
            >
              <IconPosition2>
                <IconSize2>
                  <FaGoogle />
                </IconSize2>
              </IconPosition2>
              구글 로그인 하기
            </Button2>
            <Button3 onClick={() => router.push(`/`)}>뒤로가기</Button3>
          </ButtonBox>
        </Content>
      </Container>
    </>
  );
};

export default Login;
