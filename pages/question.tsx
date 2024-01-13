import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { goodsData } from "./components/atom/atom";

interface AnswerList {
  question_id: number;
  answer: number;
}

interface Data {
  result: Array<AnswerList>;
}

const queryClient = new QueryClient();

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 430px;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(255, 88, 154, 1) 0%,
    rgba(255, 129, 86, 1) 100%
  );
`;

const Content = styled.div`
  margin: 0px 70px 60px 70px;
  width: 290px;
`;

const QuestionText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

const ButtonBox = styled.div`
  margin-top: 35px;
`;

const Button = styled.button`
  border: 0;
  margin-top: 20px;
  padding: 12px 25px;
  background-color: white;
  width: 290px;
  min-height: 45px;
  border-radius: 116px;
  font-size: 16px;
  color: #ff589a;
  :hover {
    background-color: #dddddd;
  }
`;

const Question = () => {
  const [state, setState] = useState(false);
  const [text, setText] = useState("결과 확인하기");

  // 질문 리스트
  const { data, refetch } = useQuery({
    queryKey: ["questionList"],
    queryFn: async () => {
      return (await fetch(`https://colot.site/api/v2/qlist`)).json();
    },
  });
  console.log(data);

  const mutation = useMutation({
    mutationFn: (newData: AnswerList) => {
      return fetch(`https://colot.site/api/v2/keyword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
    },
    onError: (e) => {
      setText("다시 눌러주세요! ㅜㅜ");
    },
    onSuccess: (e) => {
      console.log(e);
      // setGoodsData();
      // router.push(`/goods`);
    },
  });

  const router = useRouter();

  const setGoodsData = useSetRecoilState(goodsData);
  const [questionNum, setQuestionNum] = useState(0);
  const [answerList, setAnswerList] = useState<Array<AnswerList>>([]);

  const { data: keywordData, refetch: keywordRefetch } = useQuery({
    queryKey: ["keywordData"],
    queryFn: async () => {
      return (
        await fetch(
          `https://colot.site/api/v2/keyword?q1=${answerList[0].question_id}&a1=${answerList[0].answer}&q2=${answerList[1].question_id}&a2=${answerList[1].answer}&q3=${answerList[2].question_id}&a3=${answerList[2].answer}&q4=${answerList[3].question_id}&a4=${answerList[3].answer}&q5=${answerList[4].question_id}&a5=${answerList[4].answer}&q6=${answerList[5].question_id}&a6=${answerList[5].answer}&q7=${answerList[6].question_id}&a7=${answerList[6].answer}&q8=${answerList[7].question_id}&a8=${answerList[7].answer}`
        )
      ).json();
    },
    onError: (e) => {},
    enabled: answerList.length == 8,
    onSuccess: (e) => {
      console.log(e);
      if (e?.code == 200) {
        router.push(`/detail`);
      } else {
        refetch();
      }
      setGoodsData({
        goodsType: e?.data?.keyword,
        info: e?.data?.detail,
        image: e?.data?.image,
      });
    },
  });

  const handleAnswer = (answerData) => {
    setAnswerList((answerList) => [
      ...answerList,
      {
        question_id: data?.data[questionNum]?.question_id,
        answer: answerData,
      },
    ]);
    setQuestionNum(questionNum + 1);
  };
  const handleDone = () => {
    // mutation.mutate(answerList);
    setState(true);
  };
  console.log(answerList);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Content>
            {data?.data.length > questionNum ? (
              <>
                <QuestionText>
                  {questionNum + 1}. {data?.data[questionNum]?.question}
                </QuestionText>
                <ButtonBox>
                  <Button onClick={() => handleAnswer(0)}>
                    {data?.data[questionNum]?.answer1}
                  </Button>
                  <Button onClick={() => handleAnswer(1)}>
                    {data?.data[questionNum]?.answer2}
                  </Button>
                </ButtonBox>
              </>
            ) : (
              <>
                <QuestionText>결과를 확인해보세요.</QuestionText>
                <ButtonBox>
                  <Button disabled={state} onClick={handleDone}>
                    결과 확인하기
                  </Button>
                </ButtonBox>
              </>
            )}
          </Content>
        </Container>
      </QueryClientProvider>
    </>
  );
};

export default Question;
