export interface Book {
    number: number;
    title: string;
    author: string;
    coverUrl?: string;
    displayNumber?: string;
}

export const books: Book[] = [
    {
        "number": 1,
        "title": "변신 이야기  (1)",
        "author": "오비디우스",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937460012/9788937460012_front_medium.jpg"
    },
    {
        "number": 2,
        "title": "변신 이야기  (2)",
        "author": "오비디우스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/002_%EB%B3%80%EC%8B%A0-%EC%9D%B4%EC%95%BC%EA%B8%B021-500x847.jpg"
    },
    {
        "number": 3,
        "title": "햄릿",
        "author": "윌리엄 셰익스피어",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/003_%ED%96%84%EB%A6%BF-500x845.jpg"
    },
    {
        "number": 4,
        "title": "변신 · 시골의사",
        "author": "프란츠 카프카",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/004_%EB%B3%80%EC%8B%A0-%EC%8B%9C%EA%B3%A8%EC%9D%98%EC%82%AC-500x843.jpg"
    },
    {
        "number": 5,
        "title": "동물농장",
        "author": "조지 오웰",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/005_%EB%8F%99%EB%AC%BC%EB%86%8D%EC%9E%A5-500x847.jpg"
    },
    {
        "number": 6,
        "title": "허클베리 핀의 모험",
        "author": "마크 트웨인",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/006_%ED%97%88%ED%81%B4%EB%B2%A0%EB%A6%AC%ED%95%80%EC%9D%98-%EB%AA%A8%ED%97%98-500x847.jpg"
    },
    {
        "number": 7,
        "title": "암흑의 핵심",
        "author": "조지프 콘래드",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937460074/9788937460074_front_medium.jpg"
    },
    {
        "number": 8,
        "title": "토니오 크뢰거 · 트리스탄 · 베네치아에서의 죽음",
        "author": "토마스 만",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937460081/9788937460081_front_medium.jpg"
    },
    {
        "number": 9,
        "title": "문학이란 무엇인가",
        "author": "장폴 사르트르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/009_%EB%AC%B8%ED%95%99%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-500x844.jpg"
    },
    {
        "number": 10,
        "title": "한국단편문학선 1",
        "author": "김동인",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/010_%ED%95%9C%EA%B5%AD%EB%8B%A8%ED%8E%B8%EB%AC%B8%ED%95%99%EC%84%A011-500x842.jpg"
    },
    {
        "number": 11,
        "title": "인간의 굴레에서 (1)",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/011_%EC%9D%B8%EA%B0%84%EC%9D%98-%EA%B5%B4%EB%A0%88%EC%97%90%EC%84%9C1-500x845.jpg"
    },
    {
        "number": 12,
        "title": "인간의 굴레에서 (2)",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/012_%EC%9D%B8%EA%B0%84%EC%9D%98-%EA%B5%B4%EB%A0%88%EC%97%90%EC%84%9C2-500x846.jpg"
    },
    {
        "number": 13,
        "title": "이반 데니소비치, 수용소의 하루",
        "author": "알렉산드르 솔제니친",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/013_%EC%9D%B4%EB%B0%98-%EB%8D%B0%EB%8B%88%EC%86%8C%EB%B9%84%EC%B9%98-500x842.jpg"
    },
    {
        "number": 14,
        "title": "너새니얼 호손 단편선",
        "author": "너새니얼 호손",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/014_%EB%84%88%EC%83%88%EB%8B%88%EC%96%BC-%ED%98%B8%EC%86%90-500x847.jpg"
    },
    {
        "number": 15,
        "title": "나의 미카엘",
        "author": "아모스 오즈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/015_%EB%82%98%EC%9D%98-%EB%AF%B8%EC%B9%B4%EC%97%98-500x845.jpg"
    },
    {
        "number": 16,
        "title": "중국신화전설 (1)",
        "author": "위앤커",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/016_%EC%A4%91%EA%B5%AD%EC%8B%A0%ED%99%94%EC%A0%84%EC%84%A41-500x842.jpg"
    },
    {
        "number": 17,
        "title": "중국신화전설 (2)",
        "author": "위앤커",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/017_%EC%A4%91%EA%B5%AD%EC%8B%A0%ED%99%94%EC%A0%84%EC%84%A42-500x842.jpg"
    },
    {
        "number": 18,
        "title": "고리오 영감",
        "author": "오노레 드 발자크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/018_%EA%B3%A0%EB%A6%AC%EC%98%A4-%EC%98%81%EA%B0%90-500x841.jpg"
    },
    {
        "number": 19,
        "title": "파리대왕",
        "author": "윌리엄 골딩",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/019_%ED%8C%8C%EB%A6%AC%EB%8C%80%EC%99%95-500x842.jpg"
    },
    {
        "number": 20,
        "title": "한국단편문학선 2",
        "author": "김동리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/020_%ED%95%9C%EA%B5%AD%EB%8B%A8%ED%8E%B8%EB%AC%B8%ED%95%99%EC%84%A02_%ED%91%9C%EC%A7%80%EC%B5%9C%EC%A2%851-500x842.jpg"
    },
    {
        "number": 21,
        "title": "파우스트 (1)",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/021_%ED%8C%8C%EC%9A%B0%EC%8A%A4%ED%8A%B81-500x842.jpg"
    },
    {
        "number": 22,
        "title": "파우스트 (2)",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/022_%ED%8C%8C%EC%9A%B0%EC%8A%A4%ED%8A%B82-500x844.jpg"
    },
    {
        "number": 23,
        "title": "빌헬름 마이스터의 수업시대 (1)",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/023_%EB%B9%8C%ED%97%AC%EB%A6%84-%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EC%9D%98-%EC%88%98%EC%97%85%EC%8B%9C%EB%8C%801-500x843.jpg"
    },
    {
        "number": 24,
        "title": "빌헬름 마이스터의 수업시대 (2)",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/024_%EB%B9%8C%ED%97%AC%EB%A6%84-%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EC%9D%98-%EC%88%98%EC%97%85%EC%8B%9C%EB%8C%802-500x842.jpg"
    },
    {
        "number": 25,
        "title": "젊은 베르테르의 슬픔",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/025_%EC%A0%8A%EC%9D%80-%EB%B2%A0%EB%A5%B4%ED%85%8C%EB%A5%B4%EC%9D%98-%EC%8A%AC%ED%94%94-500x840.jpg"
    },
    {
        "number": 26,
        "title": "이피게니에, 스텔라",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/026_%EC%9D%B4%ED%94%BC%EA%B2%8C%EB%8B%88%EC%97%90-%EC%8A%A4%ED%85%94%EB%9D%BC-500x846.jpg"
    },
    {
        "number": 27,
        "title": "다섯째 아이",
        "author": "도리스 레싱",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/027_%EB%8B%A4%EC%84%AF%EC%A7%B8-%EC%95%84%EC%9D%B4-500x843.jpg"
    },
    {
        "number": 28,
        "title": "삶의 한가운데",
        "author": "루이제 린저",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/028_%EC%82%B6%EC%9D%98-%ED%95%9C%EA%B0%80%EC%9A%B4%EB%8D%B0-500x846.jpg"
    },
    {
        "number": 29,
        "title": "농담",
        "author": "밀란 쿤데라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/029_%EB%86%8D%EB%8B%B4-500x841.jpg"
    },
    {
        "number": 30,
        "title": "야성의 부름",
        "author": "잭 런던",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/030_%EC%95%BC%EC%84%B1%EC%9D%98-%EB%B6%80%EB%A6%84-500x843.jpg"
    },
    {
        "number": 31,
        "title": "아메리칸",
        "author": "헨리 제임스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/031_%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B8-500x839.jpg"
    },
    {
        "number": 32,
        "title": "양철북 (1)",
        "author": "귄터 그라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/032_%EC%96%91%EC%B2%A0%EB%B6%811-500x840.jpg"
    },
    {
        "number": 33,
        "title": "양철북 (2)",
        "author": "귄터 그라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/033_%EC%96%91%EC%B2%A0%EB%B6%812-500x841.jpg"
    },
    {
        "number": 34,
        "title": "백년의 고독 (1)",
        "author": "가브리엘 가르시아 마르케스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/034_%EB%B0%B1%EB%85%84%EC%9D%98-%EA%B3%A0%EB%8F%851-500x841.jpg"
    },
    {
        "number": 35,
        "title": "백년의 고독 (2)",
        "author": "가브리엘 가르시아 마르케스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/035_%EB%B0%B1%EB%85%84%EC%9D%98-%EA%B3%A0%EB%8F%852-500x842.jpg"
    },
    {
        "number": 36,
        "title": "마담 보바리",
        "author": "귀스타브 플로베르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/036_%EB%A7%88%EB%8B%B4-%EB%B3%B4%EB%B0%94%EB%A6%AC-500x841.jpg"
    },
    {
        "number": 37,
        "title": "거미여인의 키스",
        "author": "마누엘 푸익",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/037_%EA%B1%B0%EB%AF%B8%EC%97%AC%EC%9D%B8%EC%9D%98-%ED%82%A4%EC%8A%A4-500x841.jpg"
    },
    {
        "number": 38,
        "title": "달과 6펜스",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/38_%EB%8B%AC%EA%B3%BC-6%ED%8E%9C%EC%8A%A4_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 39,
        "title": "폴란드의 풍차",
        "author": "장 지오노",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/039_%ED%8F%B4%EB%9E%80%EB%93%9C%EC%9D%98-%ED%92%8D%EC%B0%A8-500x841.jpg"
    },
    {
        "number": 40,
        "title": "독일어 시간 (1)",
        "author": "지그프리트 렌츠",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/040_%EB%8F%85%EC%9D%BC%EC%96%B4-%EC%8B%9C%EA%B0%841-500x841.jpg"
    },
    {
        "number": 41,
        "title": "독일어 시간 (2)",
        "author": "지그프리트 렌츠",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/041_%EB%8F%85%EC%9D%BC%EC%96%B4-%EC%8B%9C%EA%B0%842-500x842.jpg"
    },
    {
        "number": 42,
        "title": "말테의 수기",
        "author": "라이너 마리아 릴케",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/042_%EB%A7%90%ED%85%8C%EC%9D%98-%EC%88%98%EA%B8%B0-500x842.jpg"
    },
    {
        "number": 43,
        "title": "고도를 기다리며",
        "author": "사뮈엘 베케트",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/043_%EA%B3%A0%EB%8F%84%EB%A5%BC-%EA%B8%B0%EB%8B%A4%EB%A6%AC%EB%A9%B0-500x841.jpg"
    },
    {
        "number": 44,
        "title": "데미안",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/044_%EB%8D%B0%EB%AF%B8%EC%95%88-500x840.jpg"
    },
    {
        "number": 45,
        "title": "젊은 예술가의 초상",
        "author": "제임스 조이스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/045_%EC%A0%8A%EC%9D%80-%EC%98%88%EC%88%A0%EA%B0%80%EC%9D%98-%EC%B4%88%EC%83%81-500x838.jpg"
    },
    {
        "number": 46,
        "title": "카탈로니아 찬가",
        "author": "조지 오웰",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/046_%EC%B9%B4%ED%83%88%EB%A1%9C%EB%8B%88%EC%95%84-%EC%B0%AC%EA%B0%80-500x846.jpg"
    },
    {
        "number": 47,
        "title": "호밀밭의 파수꾼",
        "author": "제롬 데이비드 샐린저",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%E1%84%92%E1%85%A9%E1%84%86%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%87%80%E1%84%89%E1%85%A2%E1%84%87%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A7%E1%86%A8_B_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 48,
        "title": "파르마의 수도원 (1)",
        "author": "스탕달",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/048_%ED%8C%8C%EB%A5%B4%EB%A7%88%EC%9D%98%EC%88%98%EB%8F%84%EC%9B%901-500x840.jpg"
    },
    {
        "number": 49,
        "title": "파르마의 수도원 (2)",
        "author": "스탕달",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/049_%ED%8C%8C%EB%A5%B4%EB%A7%88%EC%9D%98-%EC%88%98%EB%8F%84%EC%9B%902-500x844.jpg"
    },
    {
        "number": 50,
        "title": "수레바퀴 아래서",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/050_%EC%88%98%EB%A0%88%EB%B0%94%ED%80%B4-%EC%95%84%EB%9E%98%EC%84%9C-500x841.jpg"
    },
    {
        "number": 51,
        "title": "내 이름은 빨강 (1)",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_51_%EB%82%B4%EC%9D%B4%EB%A6%84%EC%9D%80%EB%B9%A8%EA%B0%95_01_%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 52,
        "title": "내 이름은 빨강 (2)",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_52_%EB%82%B4%EC%9D%B4%EB%A6%84%EC%9D%80%EB%B9%A8%EA%B0%95_02_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 53,
        "title": "오셀로",
        "author": "윌리엄 셰익스피어",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/053_%EC%98%A4%EC%85%80%EB%A1%9C-500x842.jpg"
    },
    {
        "number": 54,
        "title": "조서",
        "author": "르 클레지오",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/054_%EC%A1%B0%EC%84%9C-500x839.jpg"
    },
    {
        "number": 55,
        "title": "모래의 여자",
        "author": "아베 코보",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/055_%EB%AA%A8%EB%9E%98%EC%9D%98-%EC%97%AC%EC%9E%90-500x841.jpg"
    },
    {
        "number": 56,
        "title": "부덴브로크 가의 사람들 (1)",
        "author": "토마스 만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/056_%EB%B6%80%EB%8D%B4%EB%B8%8C%EB%A1%9C%ED%81%AC-%EA%B0%80%EC%9D%98-%EC%82%AC%EB%9E%8C%EB%93%A41-500x841.jpg"
    },
    {
        "number": 57,
        "title": "부덴브로크 가의 사람들 (2)",
        "author": "토마스 만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/057_%EB%B6%80%EB%8D%B4%EB%B8%8C%EB%A1%9C%ED%81%AC-%EA%B0%80%EC%9D%98-%EC%82%AC%EB%9E%8C%EB%93%A42-500x840.jpg"
    },
    {
        "number": 58,
        "title": "싯다르타",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/058_%EC%8B%AF%ED%83%80%EB%A5%B4%ED%83%80_%ED%91%9C%EC%A7%80-500x842.jpg"
    },
    {
        "number": 59,
        "title": "아들과 연인 (1)",
        "author": "데이비드 허버트 로렌스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/059_%EC%95%84%EB%93%A4%EA%B3%BC-%EC%97%B0%EC%9D%B81-500x844.jpg"
    },
    {
        "number": 60,
        "title": "아들과 연인 (2)",
        "author": "데이비드 허버트 로렌스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/060_%EC%95%84%EB%93%A4%EA%B3%BC-%EC%97%B0%EC%9D%B82-500x841.jpg"
    },
    {
        "number": 61,
        "title": "설국",
        "author": "가와바타 야스나리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/061_%EC%84%A4%EA%B5%AD-500x852.jpg"
    },
    {
        "number": 62,
        "title": "벨킨 이야기 · 스페이드 여왕",
        "author": "알렉산드르 세르게예비치 푸시킨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/062_%EB%B2%A8%ED%82%A8%EC%9D%B4%EC%95%BC%EA%B8%B0.%EC%8A%A4%ED%8E%98%EC%9D%B4%EB%93%9C%EC%97%AC%EC%99%95-500x852.jpg"
    },
    {
        "number": 63,
        "title": "넙치 (1)",
        "author": "귄터 그라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/063_%EB%84%99%EC%B9%981-500x852.jpg"
    },
    {
        "number": 64,
        "title": "넙치 (2)",
        "author": "귄터 그라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/064_%EB%84%99%EC%B9%982-500x852.jpg"
    },
    {
        "number": 65,
        "title": "소망 없는 불행",
        "author": "페터 한트케",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/065_%EC%86%8C%EB%A7%9D%EC%97%86%EB%8A%94%EB%B6%88%ED%96%89-500x852.jpg"
    },
    {
        "number": 66,
        "title": "나르치스와 골드문트",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/066_%EB%82%98%EB%A5%B4%EC%B9%98%EC%8A%A4%EC%99%80%EA%B3%A8%EB%93%9C%EB%AC%B8%ED%8A%B8-500x852.jpg"
    },
    {
        "number": 67,
        "title": "황야의 이리",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/067_%ED%99%A9%EC%95%BC%EC%9D%98%EC%9D%B4%EB%A6%AC-500x852.jpg"
    },
    {
        "number": 68,
        "title": "페테르부르크 이야기",
        "author": "니콜라이 고골",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/68-%ED%8E%98%ED%85%8C%EB%A5%B4%EB%B6%80%EB%A5%B4%ED%81%AC-%EC%9D%B4%EC%95%BC%EA%B8%B0_%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 69,
        "title": "밤으로의 긴 여로",
        "author": "유진 오닐",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/069_%EB%B0%A4%EC%9C%BC%EB%A1%9C%EC%9D%98%EA%B8%B4%EC%97%AC%EB%A1%9C-500x852.jpg"
    },
    {
        "number": 70,
        "title": "체호프 단편선",
        "author": "안톤 체호프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/070_%EC%B2%B4%ED%98%B8%ED%94%84%EB%8B%A8%ED%8E%B8%EC%84%A0-500x852.jpg"
    },
    {
        "number": 71,
        "title": "버스 정류장",
        "author": "가오싱젠",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/071_%EB%B2%84%EC%8A%A4%EC%A0%95%EB%A5%98%EC%9E%A5-500x852.jpg"
    },
    {
        "number": 72,
        "title": "구운몽",
        "author": "김만중",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/072_%EA%B5%AC%EC%9A%B4%EB%AA%BD-500x852.jpg"
    },
    {
        "number": 73,
        "title": "대머리 여가수",
        "author": "외젠 이오네스코",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/073_%EB%8C%80%EB%A8%B8%EB%A6%AC%EC%97%AC%EA%B0%80%EC%88%98-500x852.jpg"
    },
    {
        "number": 74,
        "title": "이솝 우화집",
        "author": "이솝",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/074_%EC%9D%B4%EC%86%9D%EC%9A%B0%ED%99%94%EC%A7%91-500x852.jpg"
    },
    {
        "number": 75,
        "title": "위대한 개츠비",
        "author": "F. 스콧 피츠제럴드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/075_%EC%9C%84%EB%8C%80%ED%95%9C%EA%B0%9C%EC%B8%A0%EB%B9%84-500x852.jpg"
    },
    {
        "number": 76,
        "title": "푸른 꽃",
        "author": "노발리스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/076_%ED%91%B8%EB%A5%B8%EA%BD%83-500x852.jpg"
    },
    {
        "number": 77,
        "title": "1984",
        "author": "조지 오웰",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/077_1984-500x852.jpg"
    },
    {
        "number": 78,
        "title": "영혼의 집 (1)",
        "author": "이사벨 아옌데",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/078_%EC%98%81%ED%98%BC%EC%9D%98%EC%A7%911-500x852.jpg"
    },
    {
        "number": 79,
        "title": "영혼의 집 (2)",
        "author": "이사벨 아옌데",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/079_%EC%98%81%ED%98%BC%EC%9D%98%EC%A7%912-500x852.jpg"
    },
    {
        "number": 80,
        "title": "첫사랑",
        "author": "이반 세르게예비치 투르게네프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/080_%EC%B2%AB%EC%82%AC%EB%9E%91-500x852.jpg"
    },
    {
        "number": 81,
        "title": "내가 죽어 누워 있을 때",
        "author": "윌리엄 포크너",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/081_%EB%82%B4%EA%B0%80%EC%A3%BD%EC%96%B4%EB%88%84%EC%9B%8C%EC%9E%88%EC%9D%84%EB%95%8C-500x852.jpg"
    },
    {
        "number": 82,
        "title": "런던 스케치",
        "author": "도리스 레싱",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937460821/9788937460821_front_medium.jpg"
    },
    {
        "number": 83,
        "title": "팡세",
        "author": "블레즈 파스칼",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/083_%ED%8C%A1%EC%84%B8-500x852.jpg"
    },
    {
        "number": 84,
        "title": "질투",
        "author": "알랭 로브그리예",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/084_%EC%A7%88%ED%88%AC-500x852.jpg"
    },
    {
        "number": 85,
        "title": "채털리 부인의 연인  (1)",
        "author": "데이비드 허버트 로렌스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/085_%EC%B1%84%ED%84%B8%EB%A6%AC%EB%B6%80%EC%9D%B8%EC%9D%98%EC%97%B0%EC%9D%B81-500x852.jpg"
    },
    {
        "number": 86,
        "title": "채털리 부인의 연인  (2)",
        "author": "데이비드 허버트 로렌스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/086_%EC%B1%84%ED%84%B8%EB%A6%AC%EB%B6%80%EC%9D%B8%EC%9D%98%EC%97%B0%EC%9D%B82-500x852.jpg"
    },
    {
        "number": 87,
        "title": "그 후",
        "author": "나쓰메 소세키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/087_%EA%B7%B8%ED%9B%84-500x852.jpg"
    },
    {
        "number": 88,
        "title": "오만과 편견",
        "author": "제인 오스틴",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/088_%EC%98%A4%EB%A7%8C%EA%B3%BC%ED%98%84%EA%B2%AC-500x852.jpg"
    },
    {
        "number": 89,
        "title": "부활  (1)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%9189_%EB%B6%80%ED%99%9C1_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 90,
        "title": "부활  (2)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%9190_%EB%B6%80%ED%99%9C2_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 91,
        "title": "방드르디, 태평양의 끝",
        "author": "미셸 투르니에",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/091_%EB%B0%A9%EB%93%9C%EB%A5%B4%EB%94%94%ED%83%9C%ED%8F%89%EC%96%91%EC%9D%98%EB%81%9D-500x852.jpg"
    },
    {
        "number": 92,
        "title": "미겔 스트리트",
        "author": "V. S.나이폴",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/092_%EB%AF%B8%EA%B2%94%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8-500x852.jpg"
    },
    {
        "number": 93,
        "title": "페드로 파라모",
        "author": "후안 룰포",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%8E%98%EB%93%9C%EB%A1%9C-%ED%8C%8C%EB%9D%BC%EB%AA%A8_%ED%91%9C1-500x849.jpg"
    },
    {
        "number": 94,
        "title": "차라투스트라는 이렇게 말했다",
        "author": "프리드리히 니체",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/094_%EC%B0%A8%EB%9D%BC%ED%88%AC%EC%8A%A4%ED%8A%B8%EB%9D%BC%EB%8A%94%EC%9D%B4%EB%A0%87%EA%B2%8C%EB%A7%90%ED%96%88%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 95,
        "title": "적과 흑 (1)",
        "author": "스탕달",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/095_%EC%A0%81%EA%B3%BC%ED%9D%911-500x852.jpg"
    },
    {
        "number": 96,
        "title": "적과 흑 (2)",
        "author": "스탕달",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/096_%EC%A0%81%EA%B3%BC%ED%9D%912-500x852.jpg"
    },
    {
        "number": 97,
        "title": "콜레라 시대의 사랑 (1)",
        "author": "가브리엘 가르시아 마르케스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/097_%EC%BD%9C%EB%A0%88%EB%9D%BC%EC%8B%9C%EB%8C%80%EC%9D%98%EC%82%AC%EB%9E%911-500x852.jpg"
    },
    {
        "number": 98,
        "title": "콜레라 시대의 사랑 (2)",
        "author": "가브리엘 가르시아 마르케스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/098_%EC%BD%9C%EB%A0%88%EB%9D%BC%EC%8B%9C%EB%8C%80%EC%9D%98%EC%82%AC%EB%9E%912-500x852.jpg"
    },
    {
        "number": 99,
        "title": "맥베스",
        "author": "윌리엄 셰익스피어",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/099_%EB%A7%A5%EB%B2%A0%EC%8A%A4-500x852.jpg"
    },
    {
        "number": 100,
        "title": "춘향전",
        "author": "Unknown",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/100_%EC%B6%98%ED%96%A5%EC%A0%84-500x852.jpg"
    },
    {
        "number": 101,
        "title": "페르디두르케",
        "author": "비톨트 곰브로비치",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/101_%ED%8E%98%EB%A5%B4%EB%94%94%EB%91%90%EB%A5%B4%EC%BC%80-500x852.jpg"
    },
    {
        "number": 102,
        "title": "포르노그라피아",
        "author": "비톨트 곰브로비치",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461026/9788937461026_front_medium.jpg"
    },
    {
        "number": 103,
        "title": "인간 실격",
        "author": "다자이 오사무",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/103_%EC%9D%B8%EA%B0%84%EC%8B%A4%EA%B2%A9-500x852.jpg"
    },
    {
        "number": 104,
        "title": "네루다의 우편배달부",
        "author": "안토니오 스카르메타",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/104_%EB%84%A4%EB%A3%A8%EB%8B%A4%EC%9D%98%EC%9A%B0%ED%8E%B8%EB%B0%B0%EB%8B%AC%EB%B6%80-500x852.jpg"
    },
    {
        "number": 105,
        "title": "이탈리아 기행 (1)",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/105_%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%84%EA%B8%B0%ED%96%891-500x852.jpg"
    },
    {
        "number": 106,
        "title": "이탈리아 기행 (2)",
        "author": "요한 볼프강 폰 괴테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/106_%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%84%EA%B8%B0%ED%96%892-500x852.jpg"
    },
    {
        "number": 107,
        "title": "나무 위의 남작",
        "author": "이탈로 칼비노",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/107_%EB%82%98%EB%AC%B4%EC%9C%84%EC%9D%98%EB%82%A8%EC%9E%91-500x852.jpg"
    },
    {
        "number": 108,
        "title": "달콤 쌉싸름한 초콜릿",
        "author": "라우라 에스키벨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8B%AC%EC%BD%A4%EC%B4%88%EC%BD%9C%EB%A6%BF_%ED%91%9C%EC%A7%80-1-500x853.jpg"
    },
    {
        "number": 109,
        "title": "제인 에어 (1)",
        "author": "샬럿 브론테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/109_%EC%A0%9C%EC%9D%B8%EC%97%90%EC%96%B41-500x852.jpg"
    },
    {
        "number": 110,
        "title": "제인 에어 (2)",
        "author": "샬럿 브론테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/110_%EC%A0%9C%EC%9D%B8%EC%97%90%EC%96%B42-500x852.jpg"
    },
    {
        "number": 111,
        "title": "크눌프",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/111_%ED%81%AC%EB%88%8C%ED%94%84-500x852.jpg"
    },
    {
        "number": 112,
        "title": "시계태엽 오렌지",
        "author": "앤서니 버지스",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461125/9788937461125_front_medium.jpg"
    },
    {
        "number": 113,
        "title": "파리의 노트르담 (1)",
        "author": "빅토르 위고",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/113_%ED%8C%8C%EB%A6%AC%EC%9D%98%EB%85%B8%ED%8A%B8%EB%A5%B4%EB%8B%B41-500x852.jpg"
    },
    {
        "number": 114,
        "title": "파리의 노트르담 (2)",
        "author": "빅토르 위고",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/114_%ED%8C%8C%EB%A6%AC%EC%9D%98%EB%85%B8%ED%8A%B8%EB%A5%B4%EB%8B%B4-500x852.jpg"
    },
    {
        "number": 115,
        "title": "새로운 인생",
        "author": "단테 알리기에리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/115_%EC%83%88%EB%A1%9C%EC%9A%B4%EC%9D%B8%EC%83%9D-500x852.jpg"
    },
    {
        "number": 116,
        "title": "로드 짐 (1)",
        "author": "조지프 콘래드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/116_%EB%A1%9C%EB%93%9C%EC%A7%901-500x852.jpg"
    },
    {
        "number": 117,
        "title": "로드 짐 (2)",
        "author": "조지프 콘래드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/117_%EB%A1%9C%EB%93%9C%EC%A7%902-500x852.jpg"
    },
    {
        "number": 118,
        "title": "폭풍의 언덕",
        "author": "에밀리 브론테",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/118_%ED%8F%AD%ED%92%8D%EC%9D%98%EC%96%B8%EB%8D%95-500x852.jpg"
    },
    {
        "number": 119,
        "title": "텔크테에서의 만남",
        "author": "귄터 그라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/119_%ED%85%94%ED%81%AC%ED%85%8C%EC%97%90%EC%84%9C%EC%9D%98%EB%A7%8C%EB%82%A8-500x852.jpg"
    },
    {
        "number": 120,
        "title": "검찰관",
        "author": "니콜라이 바실리예비치 고골",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/120_%EA%B2%80%EC%B0%B0%EA%B4%80-500x852.jpg"
    },
    {
        "number": 121,
        "title": "안개",
        "author": "미겔 데 우나무노",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/121_%EC%95%88%EA%B0%9C-500x852.jpg"
    },
    {
        "number": 122,
        "title": "나사의 회전",
        "author": "헨리 제임스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/122_%EB%82%98%EC%82%AC%EC%9D%98-%ED%9A%8C%EC%A0%84-500x852.jpg"
    },
    {
        "number": 123,
        "title": "피츠제럴드 단편선 1",
        "author": "F. 스콧 피츠제럴드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/123_%ED%94%BC%EC%B8%A0%EC%A0%9C%EB%9F%B4%EB%93%9C-%EB%8B%A8%ED%8E%B8%EC%84%A0-1-500x852.jpg"
    },
    {
        "number": 124,
        "title": "목화밭의 고독 속에서",
        "author": "베르나르마리 콜테스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/124_%EB%AA%A9%ED%99%94%EB%B0%AD%EC%9D%98-%EA%B3%A0%EB%8F%85-%EC%86%8D%EC%97%90%EC%84%9C-500x852.jpg"
    },
    {
        "number": 125,
        "title": "돼지꿈",
        "author": "황석영",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/125_%EB%8F%BC%EC%A7%80%EA%BF%88-500x852.jpg"
    },
    {
        "number": 126,
        "title": "라셀라스",
        "author": "새뮤얼 존슨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/126_%EB%9D%BC%EC%85%80%EB%9D%BC%EC%8A%A4-500x852.jpg"
    },
    {
        "number": 127,
        "title": "리어 왕",
        "author": "윌리엄 셰익스피어",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/127_%EB%A6%AC%EC%96%B4%EC%99%95-500x852.jpg"
    },
    {
        "number": 128,
        "title": "쿠오 바디스 (1)",
        "author": "헨릭 시엔키에비츠",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/128_%EC%BF%A0%EC%98%A4-%EB%B0%94%EB%94%94%EC%8A%A4-1-500x852.jpg"
    },
    {
        "number": 129,
        "title": "쿠오 바디스 (2)",
        "author": "헨릭 시엔키에비츠",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/129_%EC%BF%A0%EC%98%A4-%EB%B0%94%EB%94%94%EC%8A%A4-2-500x852.jpg"
    },
    {
        "number": 130,
        "title": "자기만의 방 · 3기니",
        "author": "버지니아 울프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/130-%EC%9E%90%EA%B8%B0%EB%A7%8C%EC%9D%98%EB%B0%A9_%ED%91%9C1-1-500x854.jpg"
    },
    {
        "number": 131,
        "title": "시르트의 바닷가",
        "author": "쥘리앙 그라크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/131_%EC%8B%9C%EB%A5%B4%ED%8A%B8%EC%9D%98-%EB%B0%94%EB%8B%B7%EA%B0%80-500x852.jpg"
    },
    {
        "number": 132,
        "title": "이성과 감성",
        "author": "제인 오스틴",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/132_%EC%9D%B4%EC%84%B1%EA%B3%BC-%EA%B0%90%EC%84%B1-500x852.jpg"
    },
    {
        "number": 133,
        "title": "바덴바덴에서의 여름",
        "author": "레오니드 보리소비치 치프킨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/133_%EB%B0%94%EB%8D%B4%EB%B0%94%EB%8D%B4%EC%97%90%EC%84%9C%EC%9D%98-%EC%97%AC%EB%A6%84-500x852.jpg"
    },
    {
        "number": 134,
        "title": "새로운 인생",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/134_%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%9D%B8%EC%83%9D-500x852.jpg"
    },
    {
        "number": 135,
        "title": "무지개 (1)",
        "author": "데이비드 허버트 로렌스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/135_%EB%AC%B4%EC%A7%80%EA%B0%9C-1-500x852.jpg"
    },
    {
        "number": 136,
        "title": "무지개 (2)",
        "author": "데이비드 허버트 로렌스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/136_%EB%AC%B4%EC%A7%80%EA%B0%9C-2-500x852.jpg"
    },
    {
        "number": 137,
        "title": "인생의 베일",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/137_%EC%9D%B8%EC%83%9D%EC%9D%98-%EB%B2%A0%EC%9D%BC-500x852.jpg"
    },
    {
        "number": 138,
        "title": "보이지 않는 도시들",
        "author": "이탈로 칼비노",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/138_%EB%B3%B4%EC%9D%B4%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%8F%84%EC%8B%9C%EB%93%A4-500x852.jpg"
    },
    {
        "number": 139,
        "title": "연초 도매상 (1)",
        "author": "존 바스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/139_%EC%97%B0%EC%B4%88-%EB%8F%84%EB%A7%A4%EC%83%81-1-500x852.jpg"
    },
    {
        "number": 140,
        "title": "연초 도매상 (2)",
        "author": "존 바스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/140_%EC%97%B0%EC%B4%88-%EB%8F%84%EB%A7%A4%EC%83%81-2-500x852.jpg"
    },
    {
        "number": 141,
        "title": "연초 도매상 (3)",
        "author": "존 바스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/141_%EC%97%B0%EC%B4%88-%EB%8F%84%EB%A7%A4%EC%83%81-3-500x852.jpg"
    },
    {
        "number": 142,
        "title": "플로스 강의 물방앗간 (1)",
        "author": "조지 엘리엇",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461422/9788937461422_front_medium.jpg"
    },
    {
        "number": 143,
        "title": "플로스 강의 물방앗간 (2)",
        "author": "조지 엘리엇",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461439/9788937461439_front_medium.jpg"
    },
    {
        "number": 144,
        "title": "연인",
        "author": "마르그리트 뒤라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/144_%EC%97%B0%EC%9D%B8-500x852.jpg"
    },
    {
        "number": 145,
        "title": "이름 없는 주드 (1)",
        "author": "토머스 하디",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/145_%EC%9D%B4%EB%A6%84%EC%97%86%EB%8A%94-%EC%A3%BC%EB%93%9C-1-500x852.jpg"
    },
    {
        "number": 146,
        "title": "이름 없는 주드 (2)",
        "author": "토머스 하디",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/146_%EC%9D%B4%EB%A6%84%EC%97%86%EB%8A%94-%EC%A3%BC%EB%93%9C-2-500x852.jpg"
    },
    {
        "number": 147,
        "title": "제49호 품목의 경매",
        "author": "토머스 핀천",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461477/9788937461477_front_medium.jpg"
    },
    {
        "number": 148,
        "title": "성역",
        "author": "윌리엄 포크너",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/148_%EC%84%B1%EC%97%AD-500x852.jpg"
    },
    {
        "number": 149,
        "title": "무진기행",
        "author": "김승옥",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/149_%EB%AC%B4%EC%A7%84%EA%B8%B0%ED%96%89-500x852.jpg"
    },
    {
        "number": 150,
        "title": "신곡 (1)",
        "author": "단테 알리기에리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/150_%EC%8B%A0%EA%B3%A1-%EC%A7%80%EC%98%A5%ED%8E%B8-500x852.jpg"
    },
    {
        "number": 151,
        "title": "신곡 (2)",
        "author": "단테 알리기에리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/151_%EC%8B%A0%EA%B3%A1-%EC%97%B0%EC%98%A5%ED%8E%B8-500x852.jpg"
    },
    {
        "number": 152,
        "title": "신곡 (3)",
        "author": "단테 알리기에리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/152_%EC%8B%A0%EA%B3%A1-%EC%B2%9C%EA%B5%AD%ED%8E%B8-500x852.jpg"
    },
    {
        "number": 153,
        "title": "구덩이",
        "author": "안드레이 플라토노프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/153_%EA%B5%AC%EB%8D%A9%EC%9D%B4-500x852.jpg"
    },
    {
        "number": 154,
        "title": "카라마조프가의 형제들 (1)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%B9%B4%EB%9D%BC%EB%A7%88%EC%A1%B0%ED%94%84%EA%B0%80%EC%9D%98%ED%98%95%EC%A0%9C%EB%93%A41_%ED%91%9C1-500x831.jpg"
    },
    {
        "number": 155,
        "title": "카라마조프가의 형제들 (2)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%B9%B4%EB%9D%BC%EB%A7%88%EC%A1%B0%ED%94%84-%EA%B0%80%EC%9D%98-%ED%98%95%EC%A0%9C%EB%93%A4-2_%ED%91%9C1-500x831.jpg"
    },
    {
        "number": 156,
        "title": "카라마조프가의 형제들 (3)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%B9%B4%EB%9D%BC%EB%A7%88%EC%A1%B0%ED%94%84-%EA%B0%80%EC%9D%98-%ED%98%95%EC%A0%9C%EB%93%A4-3_%ED%91%9C1-500x861.jpg"
    },
    {
        "number": 157,
        "title": "지상의 양식",
        "author": "앙드레 지드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/157_%EC%A7%80%EC%83%81%EC%9D%98-%EC%96%91%EC%8B%9D-500x852.jpg"
    },
    {
        "number": 158,
        "title": "밤의 군대들",
        "author": "노먼 메일러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/158_%EB%B0%A4%EC%9D%98-%EA%B5%B0%EB%8C%80%EB%93%A4-500x852.jpg"
    },
    {
        "number": 159,
        "title": "주홍 글자",
        "author": "너새니얼 호손",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/159_%EC%A3%BC%ED%99%8D-%EA%B8%80%EC%9E%90-500x852.jpg"
    },
    {
        "number": 160,
        "title": "깊은 강",
        "author": "엔도 슈사쿠",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/160_%EA%B9%8A%EC%9D%80-%EA%B0%95-500x852.jpg"
    },
    {
        "number": 161,
        "title": "욕망이라는 이름의 전차",
        "author": "테네시 윌리엄스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/161_%EC%9A%95%EB%A7%9D%EC%9D%B4%EB%9D%BC%EB%8A%94-%EC%9D%B4%EB%A6%84%EC%9D%98-%EC%A0%84%EC%B0%A8-500x852.jpg"
    },
    {
        "number": 162,
        "title": "마사 퀘스트",
        "author": "도리스 레싱",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/162_%EB%A7%88%EC%82%AC-%ED%80%98%EC%8A%A4%ED%8A%B8-500x852.jpg"
    },
    {
        "number": 163,
        "title": "운명의 딸 (1)",
        "author": "이사벨 아옌데",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/163_%EC%9A%B4%EB%AA%85%EC%9D%98-%EB%94%B8-1-500x852.jpg"
    },
    {
        "number": 164,
        "title": "운명의 딸 (2)",
        "author": "이사벨 아옌데",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/164_%EC%9A%B4%EB%AA%85%EC%9D%98-%EB%94%B8-2-500x852.jpg"
    },
    {
        "number": 165,
        "title": "모렐의 발명",
        "author": "아돌포 비오이 카사레스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/165_%EB%AA%A8%EB%A0%90%EC%9D%98-%EB%B0%9C%EB%AA%85-500x852.jpg"
    },
    {
        "number": 166,
        "title": "삼국유사",
        "author": "일연",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461668/9788937461668_front_medium.jpg"
    },
    {
        "number": 167,
        "title": "풀잎은 노래한다",
        "author": "도리스 레싱",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/167_%ED%92%80%EC%9E%8E%EC%9D%80-%EB%85%B8%EB%9E%98%ED%95%9C%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 168,
        "title": "파리의 우울",
        "author": "샤를 피에르 보들레르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/168_%ED%8C%8C%EB%A6%AC%EC%9D%98-%EC%9A%B0%EC%9A%B8-500x852.jpg"
    },
    {
        "number": 169,
        "title": "포스트맨은 벨을 두 번 울린다",
        "author": "제임스 M. 케인",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/169_%ED%8F%AC%EC%8A%A4%ED%8A%B8%EB%A7%A8%EC%9D%80-%EB%B2%A8%EC%9D%84-%EB%91%90-%EB%B2%88-%EC%9A%B8%EB%A6%B0%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 170,
        "title": "썩은 잎",
        "author": "가브리엘 가르시아 마르케스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/170_%EC%8D%A9%EC%9D%80%EC%9E%8E_%ED%91%9C1-1-500x853.jpg"
    },
    {
        "number": 171,
        "title": "모든 것이 산산이 부서지다",
        "author": "치누아 아체베",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/171_%EB%AA%A8%EB%93%A0-%EA%B2%83%EC%9D%B4-%EC%82%B0%EC%82%B0%EC%9D%B4-%EB%B6%80%EC%84%9C%EC%A7%80%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 172,
        "title": "한여름 밤의 꿈",
        "author": "윌리엄 셰익스피어",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/172_%ED%95%9C%EC%97%AC%EB%A6%84-%EB%B0%A4%EC%9D%98-%EA%BF%88-500x852.jpg"
    },
    {
        "number": 173,
        "title": "로미오와 줄리엣",
        "author": "윌리엄 셰익스피어",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/173_%EB%A1%9C%EB%AF%B8%EC%98%A4%EC%99%80-%EC%A4%84%EB%A6%AC%EC%97%A3-500x852.jpg"
    },
    {
        "number": 174,
        "title": "분노의 포도 (1)",
        "author": "존 스타인벡",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/1.0-%EB%B6%84%EB%85%B8%EC%9D%98-%ED%8F%AC%EB%8F%84-1_%ED%91%9C%EC%A7%80_33%EC%87%84-500x852.jpg"
    },
    {
        "number": 175,
        "title": "분노의 포도 (2)",
        "author": "존 스타인벡",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/1.0-%EB%B6%84%EB%85%B8%EC%9D%98-%ED%8F%AC%EB%8F%84-2_%ED%91%9C%EC%A7%80_31%EC%87%84-500x852.jpg"
    },
    {
        "number": 176,
        "title": "괴테와의 대화 (1)",
        "author": "요한 페터 에커만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/176_%EA%B4%B4%ED%85%8C%EC%99%80%EC%9D%98-%EB%8C%80%ED%99%94-1-500x852.jpg"
    },
    {
        "number": 177,
        "title": "괴테와의 대화 (2)",
        "author": "요한 페터 에커만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/177_%EA%B4%B4%ED%85%8C%EC%99%80%EC%9D%98-%EB%8C%80%ED%99%94-2-500x852.jpg"
    },
    {
        "number": 178,
        "title": "그물을 헤치고",
        "author": "아이리스 머독",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/178_%EA%B7%B8%EB%AC%BC%EC%9D%84-%ED%97%A4%EC%B9%98%EA%B3%A0-500x852.jpg"
    },
    {
        "number": 179,
        "title": "브람스를 좋아하세요...",
        "author": "프랑수아즈 사강",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461798/9788937461798_front_medium.jpg"
    },
    {
        "number": 180,
        "title": "카타리나 블룸의 잃어버린 명예",
        "author": "하인리히 뵐",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/180_%EC%B9%B4%ED%83%80%EB%A6%AC%EB%82%98-%EB%B8%94%EB%A3%B8%EC%9D%98-%EC%9E%83%EC%96%B4%EB%B2%84%EB%A6%B0-%EB%AA%85%EC%98%88-500x852.jpg"
    },
    {
        "number": 181,
        "title": "에덴의 동쪽 (1)",
        "author": "존 스타인벡",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/181_%EC%97%90%EB%8D%B4%EC%9D%98-%EB%8F%99%EC%AA%BD-1-500x852.jpg"
    },
    {
        "number": 182,
        "title": "에덴의 동쪽 (2)",
        "author": "존 스타인벡",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/182_%EC%97%90%EB%8D%B4%EC%9D%98-%EB%8F%99%EC%AA%BD-2-500x852.jpg"
    },
    {
        "number": 183,
        "title": "순수의 시대",
        "author": "이디스 워튼",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/183_%EC%88%9C%EC%88%98%EC%9D%98-%EC%8B%9C%EB%8C%80-500x852.jpg"
    },
    {
        "number": 184,
        "title": "도둑 일기",
        "author": "장 주네",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/184_%EB%8F%84%EB%91%91-%EC%9D%BC%EA%B8%B0-500x852.jpg"
    },
    {
        "number": 185,
        "title": "나자",
        "author": "앙드레 브르통",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/185_%EB%82%98%EC%9E%90-500x852.jpg"
    },
    {
        "number": 186,
        "title": "캐치-22  (1)",
        "author": "조지프 헬러",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461866/9788937461866_front_medium.jpg"
    },
    {
        "number": 187,
        "title": "캐치-22  (2)",
        "author": "조지프 헬러",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461873/9788937461873_front_medium.jpg"
    },
    {
        "number": 188,
        "title": "숄로호프 단편선",
        "author": "미하일 알렉산드로비치 숄로호프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/188_%EC%88%84%EB%A1%9C%ED%98%B8%ED%94%84-%EB%8B%A8%ED%8E%B8%EC%84%A0-500x852.jpg"
    },
    {
        "number": 189,
        "title": "말",
        "author": "장폴 사르트르",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937461897/9788937461897_front_medium.jpg"
    },
    {
        "number": 190,
        "title": "보이지 않는 인간 (1)",
        "author": "랠프 엘리슨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/190_%EB%B3%B4%EC%9D%B4%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%9D%B8%EA%B0%84-1-500x852.jpg"
    },
    {
        "number": 191,
        "title": "보이지 않는 인간 (2)",
        "author": "랠프 엘리슨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/191_%EB%B3%B4%EC%9D%B4%EC%A7%80-%EC%95%8A%EB%8A%94-%EC%9D%B8%EA%B0%84-2-500x852.jpg"
    },
    {
        "number": 192,
        "title": "왑샷 가문 연대기",
        "author": "존 치버",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/192_%EC%99%91%EC%83%B7-%EA%B0%80%EB%AC%B8-%EC%97%B0%EB%8C%80%EA%B8%B0-500x852.jpg"
    },
    {
        "number": 193,
        "title": "왑샷 가문 몰락기",
        "author": "존 치버",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/193_%EC%99%91%EC%83%B7-%EA%B0%80%EB%AC%B8-%EB%AA%B0%EB%9D%BD%EA%B8%B0-500x852.jpg"
    },
    {
        "number": 194,
        "title": "필립과 다른 사람들",
        "author": "세스 노터봄",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/194_%ED%95%84%EB%A6%BD%EA%B3%BC-%EB%8B%A4%EB%A5%B8-%EC%82%AC%EB%9E%8C%EB%93%A4-500x852.jpg"
    },
    {
        "number": 195,
        "title": "하드리아누스 황제의 회상록 (1)",
        "author": "마르그리트 유르스나르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/195_%ED%95%98%EB%91%90%EB%A6%AC%EC%95%84%EB%88%84%EC%8A%A4-%ED%99%A9%EC%A0%9C%EC%9D%98-%ED%9A%8C%EC%83%81%EB%A1%9D-1-500x852.jpg"
    },
    {
        "number": 196,
        "title": "하드리아누스 황제의 회상록 (2)",
        "author": "마르그리트 유르스나르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/196_%ED%95%98%EB%91%90%EB%A6%AC%EC%95%84%EB%88%84%EC%8A%A4-%ED%99%A9%EC%A0%9C%EC%9D%98-%ED%9A%8C%EC%83%81%EB%A1%9D-2-500x852.jpg"
    },
    {
        "number": 197,
        "title": "소피의 선택 (1)",
        "author": "윌리엄 스타이런",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/197_%EC%86%8C%ED%94%BC%EC%9D%98-%EC%84%A0%ED%83%9D-1-500x852.jpg"
    },
    {
        "number": 198,
        "title": "소피의 선택 (2)",
        "author": "윌리엄 스타이런",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/198_%EC%86%8C%ED%94%BC%EC%9D%98-%EC%84%A0%ED%83%9D-2-500x852.jpg"
    },
    {
        "number": 199,
        "title": "피츠제럴드 단편선 2",
        "author": "F. 스콧 피츠제럴드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/199_%ED%94%BC%EC%B8%A0%EC%A0%9C%EB%9F%B4%EB%93%9C-%EB%8B%A8%ED%8E%B8%EC%84%A0-2-500x852.jpg"
    },
    {
        "number": 200,
        "title": "홍길동전",
        "author": "허균",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/200_%ED%99%8D%EA%B8%B8%EB%8F%99%EC%A0%84-500x852.jpg"
    },
    {
        "number": 201,
        "title": "요술 부지깽이",
        "author": "로버트 쿠버",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/201_%EC%9A%94%EC%88%A0-%EB%B6%80%EC%A7%80%EA%B9%BD%EC%9D%B4-500x852.jpg"
    },
    {
        "number": 202,
        "title": "북호텔",
        "author": "외젠 다비",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/202_%EB%B6%81%ED%98%B8%ED%85%94-500x852.jpg"
    },
    {
        "number": 203,
        "title": "톰 소여의 모험",
        "author": "마크 트웨인",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/203_%ED%86%B0-%EC%86%8C%EC%97%AC%EC%9D%98-%EB%AA%A8%ED%97%98-500x852.jpg"
    },
    {
        "number": 204,
        "title": "금오신화",
        "author": "김시습",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/204_%EA%B8%88%EC%98%A4%EC%8B%A0%ED%99%94-500x852.jpg"
    },
    {
        "number": 205,
        "title": "테스 (1)",
        "author": "토머스 하디",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/205_%ED%85%8C%EC%8A%A4-1-500x852.jpg"
    },
    {
        "number": 206,
        "title": "테스 (2)",
        "author": "토머스 하디",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/206_%ED%85%8C%EC%8A%A4-2-500x852.jpg"
    },
    {
        "number": 207,
        "title": "브루스터플레이스의 여자들",
        "author": "글로리아 네일러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/207_%EB%B6%80%EB%A5%B4%EC%8A%A4%ED%84%B0%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%EC%9D%98-%EC%97%AC%EC%9E%90%EB%93%A4-500x852.jpg"
    },
    {
        "number": 208,
        "title": "더 이상 평안은 없다",
        "author": "치누아 아체베",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/208_%EB%8D%94%EC%9D%B4%EC%83%81-%ED%8F%89%EC%95%88%EC%9D%80-%EC%97%86%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 209,
        "title": "그레인지 코플랜드의 세 번째 인생",
        "author": "앨리스 워커",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/209_%EA%B7%B8%EB%A0%88%EC%9D%B8%EC%A7%80-%EC%BD%94%ED%94%8C%EB%9E%9C%EB%93%9C%EC%9D%98-%EC%84%B8-%EB%B2%88%EC%A7%B8-%EC%9D%B8%EC%83%9D-500x852.jpg"
    },
    {
        "number": 210,
        "title": "어느 시골 신부의 일기",
        "author": "조르주 베르나노스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/210_%EC%96%B4%EB%8A%90-%EC%8B%9C%EA%B3%A8-%EC%8B%A0%EB%B6%80%EC%9D%98-%EC%9D%BC%EA%B8%B0-500x852.jpg"
    },
    {
        "number": 211,
        "title": "타라스 불바",
        "author": "니콜라이 바실리예비치 고골",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/211_%ED%83%80%EB%9D%BC%EC%8A%A4-%EB%B6%88%EB%B0%94-500x852.jpg"
    },
    {
        "number": 212,
        "title": "위대한 유산 (1)",
        "author": "찰스 디킨스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/212_%EC%9C%84%EB%8C%80%ED%95%9C-%EC%9C%A0%EC%82%B0-1-500x852.jpg"
    },
    {
        "number": 213,
        "title": "위대한 유산 (2)",
        "author": "찰스 디킨스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/213_%EC%9C%84%EB%8C%80%ED%95%9C-%EC%9C%A0%EC%82%B0-2-500x852.jpg"
    },
    {
        "number": 214,
        "title": "면도날",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/214_%EB%A9%B4%EB%8F%84%EB%82%A0-500x852.jpg"
    },
    {
        "number": 215,
        "title": "성채 (1)",
        "author": "아치볼드 조지프 크로닌",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/215_%EC%84%B1%EC%B1%84-1-500x852.jpg"
    },
    {
        "number": 216,
        "title": "성채 (2)",
        "author": "아치볼드 조지프 크로닌",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/216_%EC%84%B1%EC%B1%84-2-500x852.jpg"
    },
    {
        "number": 217,
        "title": "오이디푸스 왕",
        "author": "소포클레스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/217_%EC%98%A4%EC%9D%B4%EB%94%94%ED%91%B8%EC%8A%A4-%EC%99%95-500x852.jpg"
    },
    {
        "number": 218,
        "title": "세일즈맨의 죽음",
        "author": "아서 밀러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/218_%EC%84%B8%EC%9D%BC%EC%A6%88%EB%A7%A8%EC%9D%98-%EC%A3%BD%EC%9D%8C-500x852.jpg"
    },
    {
        "number": 219,
        "title": "안나 카레니나 (1)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/219_%EC%95%88%EB%82%98-%EC%B9%B4%EB%A0%88%EB%A6%AC%EB%82%98-1-500x852.jpg"
    },
    {
        "number": 220,
        "title": "안나 카레니나 (2)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/220_%EC%95%88%EB%82%98-%EC%B9%B4%EB%A0%88%EB%A6%AC%EB%82%98-2-500x852.jpg"
    },
    {
        "number": 221,
        "title": "안나 카레니나 (3)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/221_%EC%95%88%EB%82%98-%EC%B9%B4%EB%A0%88%EB%A6%AC%EB%82%98-3-500x852.jpg"
    },
    {
        "number": 222,
        "title": "오스카 와일드 작품선",
        "author": "오스카 와일드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/222_%EC%98%A4%EC%8A%A4%EC%B9%B4-%EC%99%80%EC%9D%BC%EB%93%9C-%EC%9E%91%ED%92%88%EC%84%A0-500x852.jpg"
    },
    {
        "number": 223,
        "title": "벨아미",
        "author": "기 드 모파상",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/223_%EB%B2%A8%EC%95%84%EB%AF%B8-500x852.jpg"
    },
    {
        "number": 224,
        "title": "파스쿠알 두아르테 가족",
        "author": "카밀로 호세 셀라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/224_%ED%8C%8C%EC%8A%A4%EC%BF%A0%EC%95%8C-%EB%91%90%EC%95%84%EB%A5%B4%ED%85%8C-%EA%B0%80%EC%A1%B1-500x852.jpg"
    },
    {
        "number": 225,
        "title": "시칠리아에서의 대화",
        "author": "엘리오 비토리니",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/225_%EC%8B%9C%EC%B9%A0%EB%A6%AC%EC%95%84%EC%97%90%EC%84%9C%EC%9D%98-%EB%8C%80%ED%99%94-500x852.jpg"
    },
    {
        "number": 226,
        "title": "길 위에서 (1)",
        "author": "잭 케루악",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/226_%EA%B8%B8-%EC%9C%84%EC%97%90%EC%84%9C-1-500x852.jpg"
    },
    {
        "number": 227,
        "title": "길 위에서 (2)",
        "author": "잭 케루악",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/227_%EA%B8%B8-%EC%9C%84%EC%97%90%EC%84%9C-2-500x852.jpg"
    },
    {
        "number": 228,
        "title": "우리 시대의 영웅",
        "author": "미하일 유리예비치 레르몬토프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/228_%EC%9A%B0%EB%A6%AC-%EC%8B%9C%EB%8C%80%EC%9D%98-%EC%98%81%EC%9B%85-500x852.jpg"
    },
    {
        "number": 229,
        "title": "아우라",
        "author": "카를로스 푸엔테스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/229_%EC%95%84%EC%9A%B0%EB%9D%BC-500x852.jpg"
    },
    {
        "number": 230,
        "title": "클링조어의 마지막 여름",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/230_%ED%81%B4%EB%A7%81%EC%A1%B0%EC%96%B4%EC%9D%98-%EB%A7%88%EC%A7%80%EB%A7%89-%EC%97%AC%EB%A6%84-500x852.jpg"
    },
    {
        "number": 231,
        "title": "리스본의 겨울",
        "author": "안토니오 무뇨스 몰리나",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/231_%EB%A6%AC%EC%8A%A4%EB%B3%B8%EC%9D%98-%EA%B2%A8%EC%9A%B8-500x852.jpg"
    },
    {
        "number": 232,
        "title": "뻐꾸기 둥지 위로 날아간 새",
        "author": "켄 키지",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/232_%EB%BB%90%EA%BE%B8%EA%B8%B0-%EB%91%A5%EC%A7%80-%EC%9C%84%EB%A1%9C-%EB%82%A0%EC%95%84%EA%B0%84-%EC%83%88-500x852.jpg"
    },
    {
        "number": 233,
        "title": "페널티킥 앞에 선 골키퍼의 불안",
        "author": "페터 한트케",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/233_%ED%8C%A8%EB%84%90%ED%8B%B0%ED%82%A5-%EC%95%9E%EC%97%90-%EC%84%A0-%EA%B3%A8%ED%82%A4%ED%8D%BC%EC%9D%98-%EB%B6%88%EC%95%88-500x852.jpg"
    },
    {
        "number": 234,
        "title": "참을 수 없는 존재의 가벼움",
        "author": "밀란 쿤데라",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937462344/9788937462344_front_medium.jpg"
    },
    {
        "number": 235,
        "title": "바다여, 바다여 (1)",
        "author": "아이리스 머독",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/235_%EB%B0%94%EB%8B%A4%EC%97%AC-%EB%B0%94%EB%8B%A4%EC%97%AC-1-500x852.jpg"
    },
    {
        "number": 236,
        "title": "바다여, 바다여 (2)",
        "author": "아이리스 머독",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/236_%EB%B0%94%EB%8B%A4%EC%97%AC-%EB%B0%94%EB%8B%A4%EC%97%AC-2-500x852.jpg"
    },
    {
        "number": 237,
        "title": "한 줌의 먼지",
        "author": "에벌린 워",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/237_%ED%95%9C-%EC%A4%8C%EC%9D%98-%EB%A8%BC%EC%A7%80-500x852.jpg"
    },
    {
        "number": 238,
        "title": "뜨거운 양철 지붕 위의 고양이 · 유리 동물원",
        "author": "테네시 윌리엄스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/238_%EB%9C%A8%EA%B1%B0%EC%9A%B4-%EC%96%91%EC%B2%A0-%EC%A7%80%EB%B6%95-%EC%9C%84%EC%9D%98-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%9C%A0%EB%A6%AC-%EB%8F%99%EB%AC%BC%EC%9B%90-500x852.jpg"
    },
    {
        "number": 239,
        "title": "지하로부터의 수기",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/239_%EC%A7%80%ED%95%98%EB%A1%9C%EB%B6%80%ED%84%B0%EC%9D%98%EC%88%98%EA%B8%B0_%ED%91%9C1-500x853.jpg"
    },
    {
        "number": 240,
        "title": "키메라",
        "author": "존 바스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/240_%ED%82%A4%EB%A9%94%EB%9D%BC-500x852.jpg"
    },
    {
        "number": 241,
        "title": "반쪼가리 자작",
        "author": "이탈로 칼비노",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/241_%EB%B0%98%EC%AA%BC%EA%B0%80%EB%A6%AC-%EC%9E%90%EC%9E%91-500x852.jpg"
    },
    {
        "number": 242,
        "title": "벌집",
        "author": "카밀로 호세 셀라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/242_%EB%B2%8C%EC%A7%91-500x852.jpg"
    },
    {
        "number": 243,
        "title": "불멸",
        "author": "밀란 쿤데라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/243_%EB%B6%88%EB%A9%B8-500x852.jpg"
    },
    {
        "number": 244,
        "title": "파우스트 박사 (1)",
        "author": "토마스 만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/244_%ED%8C%8C%EC%9A%B0%EC%8A%A4%ED%8A%B8-%EB%B0%95%EC%82%AC-1-500x852.jpg"
    },
    {
        "number": 245,
        "title": "파우스트 박사 (2)",
        "author": "토마스 만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/245_%ED%8C%8C%EC%9A%B0%EC%8A%A4%ED%8A%B8-%EB%B0%95%EC%82%AC-2-500x852.jpg"
    },
    {
        "number": 246,
        "title": "사랑할 때와 죽을 때",
        "author": "에리히 마리아 레마르크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/246_%EC%82%AC%EB%9E%91%ED%95%A0-%EB%95%8C%EC%99%80-%EC%A3%BD%EC%9D%84-%EB%95%8C-500x852.jpg"
    },
    {
        "number": 247,
        "title": "누가 버지니아 울프를 두려워하랴?",
        "author": "에드워드 올비",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/247_%EB%88%84%EA%B0%80-%EB%B2%84%EC%A7%80%EB%8B%88%EC%95%84-%EC%9A%B8%ED%94%84%EB%A5%BC-%EB%91%90%EB%A0%A4%EC%9B%8C%ED%95%98%EB%9E%B4-500x852.jpg"
    },
    {
        "number": 248,
        "title": "인형의 집",
        "author": "헨리크 입센",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/248_%EC%9D%B8%ED%98%95%EC%9D%98-%EC%A7%91-500x852.jpg"
    },
    {
        "number": 249,
        "title": "위폐범들",
        "author": "앙드레 지드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/249_%EC%9C%84%ED%8F%90%EB%B2%94%EB%93%A4-500x852.jpg"
    },
    {
        "number": 250,
        "title": "무정",
        "author": "이광수",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/250_%EB%AC%B4%EC%A0%95-500x852.jpg"
    },
    {
        "number": 251,
        "title": "의지와 운명 (1)",
        "author": "카를로스 푸엔테스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/251_%EC%9D%98%EC%A7%80%EC%99%80-%EC%9A%B4%EB%AA%85-1-500x852.jpg"
    },
    {
        "number": 252,
        "title": "의지와 운명 (2)",
        "author": "카를로스 푸엔테스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/252_%EC%9D%98%EC%A7%80%EC%99%80-%EC%9A%B4%EB%AA%85-2-500x852.jpg"
    },
    {
        "number": 253,
        "title": "폭력적인 삶",
        "author": "피에르 파올로 파솔리니",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/253_%ED%8F%AD%EB%A0%A5%EC%A0%81%EC%9D%B8-%EC%82%B6-500x852.jpg"
    },
    {
        "number": 254,
        "title": "거장과 마르가리타",
        "author": "미하일 아파나시예비치 불가코프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/254_%EA%B1%B0%EC%9E%A5%EA%B3%BC-%EB%A7%88%EB%A5%B4%EA%B0%80%EB%A6%AC%ED%83%80-500x852.jpg"
    },
    {
        "number": 255,
        "title": "경이로운 도시 (1)",
        "author": "에두아르도 멘도사",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/255_%EA%B2%BD%EC%9D%B4%EB%A1%9C%EC%9A%B4-%EB%8F%84%EC%8B%9C-1-500x852.jpg"
    },
    {
        "number": 256,
        "title": "경이로운 도시 (2)",
        "author": "에두아르도 멘도사",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/256_%EA%B2%BD%EC%9D%B4%EB%A1%9C%EC%9A%B4-%EB%8F%84%EC%8B%9C-2-500x852.jpg"
    },
    {
        "number": 257,
        "title": "야콥을 둘러싼 추측들",
        "author": "우베 욘존",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/257_%EC%95%BC%EC%BD%A5%EC%9D%84-%EB%91%98%EB%9F%AC%EC%8B%BC-%EC%B6%94%EC%B8%A1%EB%93%A4-500x852.jpg"
    },
    {
        "number": 258,
        "title": "왕자와 거지",
        "author": "마크 트웨인",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/258_%EC%99%95%EC%9E%90%EC%99%80-%EA%B1%B0%EC%A7%80-500x852.jpg"
    },
    {
        "number": 259,
        "title": "존재하지 않는 기사",
        "author": "이탈로 칼비노",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/259_%EC%A1%B4%EC%9E%AC%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EA%B8%B0%EC%82%AC-500x852.jpg"
    },
    {
        "number": 260,
        "title": "눈먼 암살자 (1)",
        "author": "마거릿 애트우드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/260_%EB%88%88%EB%A8%BC-%EC%95%94%EC%82%B4%EC%9E%90-1-500x852.jpg"
    },
    {
        "number": 261,
        "title": "눈먼 암살자 (2)",
        "author": "마거릿 애트우드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/261_%EB%88%88%EB%A8%BC-%EC%95%94%EC%82%B4%EC%9E%90-2-500x852.jpg"
    },
    {
        "number": 262,
        "title": "베니스의 상인",
        "author": "윌리엄 셰익스피어",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/262_%EB%B2%A0%EB%8B%88%EC%8A%A4%EC%9D%98-%EC%83%81%EC%9D%B8-500x852.jpg"
    },
    {
        "number": 263,
        "title": "말리나",
        "author": "잉에보르크 바흐만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/263_%EB%A7%90%EB%A6%AC%EB%82%98-500x852.jpg"
    },
    {
        "number": 264,
        "title": "사볼타 사건의 진실",
        "author": "에두아르도 멘도사",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/264_%EC%82%AC%EB%B3%BC%ED%83%80-%EC%82%AC%EA%B1%B4%EC%9D%98-%EC%A7%84%EC%8B%A4-500x852.jpg"
    },
    {
        "number": 265,
        "title": "뒤렌마트 희곡선",
        "author": "프리드리히 뒤렌마트",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/265_%EB%92%A4%EB%A0%8C%EB%A7%88%ED%8A%B8-%ED%9D%AC%EA%B3%A1%EC%84%A0-500x852.jpg"
    },
    {
        "number": 266,
        "title": "이방인",
        "author": "알베르 카뮈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/266_%EC%9D%B4%EB%B0%A9%EC%9D%B8-500x852.jpg"
    },
    {
        "number": 267,
        "title": "페스트",
        "author": "알베르 카뮈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/267_%ED%8E%98%EC%8A%A4%ED%8A%B8-500x852.jpg"
    },
    {
        "number": 268,
        "title": "검은 튤립",
        "author": "알렉상드르 뒤마",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/268_%EA%B2%80%EC%9D%80-%ED%8A%A4%EB%A6%BD-500x852.jpg"
    },
    {
        "number": 269,
        "title": "베를린 알렉산더 광장 (1)",
        "author": "알프레트 되블린",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/269_%EB%B2%A0%EB%A5%BC%EB%A6%B0-%EC%95%8C%EB%A0%89%EC%82%B0%EB%8D%94-%EA%B4%91%EC%9E%A5-1-500x852.jpg"
    },
    {
        "number": 270,
        "title": "베를린 알렉산더 광장 (2)",
        "author": "알프레트 되블린",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/270_%EB%B2%A0%EB%A5%BC%EB%A6%B0-%EC%95%8C%EB%A0%89%EC%82%B0%EB%8D%94-%EA%B4%91%EC%9E%A5-2-500x852.jpg"
    },
    {
        "number": 271,
        "title": "하얀 성",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/271_%ED%95%98%EC%96%80%EC%84%B1-500x852.jpg"
    },
    {
        "number": 272,
        "title": "푸시킨 선집",
        "author": "알렉산드르 세르게예비치 푸시킨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/272_%ED%91%B8%EC%8A%88%ED%82%A8-%EC%84%A0%EC%A7%91-500x852.jpg"
    },
    {
        "number": 273,
        "title": "유리알 유희 (1)",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/273_%EC%9C%A0%EB%A6%AC%EC%95%8C-%EC%9C%A0%ED%9D%AC-1-500x852.jpg"
    },
    {
        "number": 274,
        "title": "유리알 유희 (2)",
        "author": "헤르만 헤세",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/274_%EC%9C%A0%EB%A6%AC%EC%95%8C-%EC%9C%A0%ED%9D%AC-2-500x852.jpg"
    },
    {
        "number": 275,
        "title": "픽션들",
        "author": "호르헤 루이스 보르헤스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/275_%ED%94%BD%EC%85%98%EB%93%A4-500x852.jpg"
    },
    {
        "number": 276,
        "title": "신의 화살",
        "author": "치누아 아체베",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/276_%EC%8B%A0%EC%9D%98-%ED%99%94%EC%82%B4-500x852.jpg"
    },
    {
        "number": 277,
        "title": "빌헬름 텔 · 간계와 사랑",
        "author": "요한 크리스토프 프리드리히 폰 실러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/277_%EB%B9%8C%ED%97%AC%EB%A6%84-%ED%85%94-%EA%B0%84%EA%B3%84%EC%99%80-%EC%82%AC%EB%9E%91-500x852.jpg"
    },
    {
        "number": 278,
        "title": "노인과 바다",
        "author": "어니스트 헤밍웨이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/278_%EB%85%B8%EC%9D%B8%EA%B3%BC-%EB%B0%94%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 279,
        "title": "무기여 잘 있어라",
        "author": "어니스트 헤밍웨이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/279_%EB%AC%B4%EA%B8%B0%EC%97%AC-%EC%9E%98-%EC%9E%88%EC%96%B4%EB%9D%BC-500x852.jpg"
    },
    {
        "number": 280,
        "title": "태양은 다시 떠오른다",
        "author": "어니스트 헤밍웨이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/280_%ED%83%9C%EC%96%91%EC%9D%80-%EB%8B%A4%EC%8B%9C-%EB%96%A0%EC%98%A4%EB%A5%B8%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 281,
        "title": "알레프",
        "author": "호르헤 루이스 보르헤스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/281_%EC%95%8C%EB%A0%88%ED%94%84-500x852.jpg"
    },
    {
        "number": 282,
        "title": "일곱 박공의 집",
        "author": "너새니얼 호손",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/282_%EC%9D%BC%EA%B3%B1-%EB%B0%95%EA%B3%B5%EC%9D%98-%EC%A7%91-500x852.jpg"
    },
    {
        "number": 283,
        "title": "에마",
        "author": "제인 오스틴",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/283_%EC%97%90%EB%A7%88-500x852.jpg"
    },
    {
        "number": 284,
        "title": "죄와 벌 (1)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/284-%EC%A3%84%EC%99%80%EB%B2%8C1_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 285,
        "title": "죄와 벌 (2)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/285-%EC%A3%84%EC%99%80%EB%B2%8C2_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 286,
        "title": "시련",
        "author": "아서 밀러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/286_%EC%8B%9C%EB%A0%A8-500x852.jpg"
    },
    {
        "number": 287,
        "title": "모두가 나의 아들",
        "author": "아서 밀러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/287_%EB%AA%A8%EB%91%90%EA%B0%80-%EB%82%98%EC%9D%98-%EC%95%84%EB%93%A4-500x852.jpg"
    },
    {
        "number": 288,
        "title": "누구를 위하여 종은 울리나 (1)",
        "author": "어니스트 헤밍웨이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/288_%EB%88%84%EA%B5%AC%EB%A5%BC-%EC%9C%84%ED%95%98%EC%97%AC-%EC%A2%85%EC%9D%84-%EC%9A%B8%EB%A6%AC%EB%82%98-1-500x852.jpg"
    },
    {
        "number": 289,
        "title": "누구를 위하여 종은 울리나 (2)",
        "author": "어니스트 헤밍웨이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/289_%EB%88%84%EA%B5%AC%EB%A5%BC-%EC%9C%84%ED%95%98%EC%97%AC-%EC%A2%85%EC%9D%84-%EC%9A%B8%EB%A6%AC%EB%82%98-2-500x852.jpg"
    },
    {
        "number": 290,
        "title": "구르브 연락 없다",
        "author": "에두아르도 멘도사",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/290_%EA%B5%AC%EB%A5%B4%EB%B8%8C-%EC%97%B0%EB%9D%BD-%EC%97%86%EB%8B%A4-500x852.jpg"
    },
    {
        "number": 291,
        "title": "데카메론 (1)",
        "author": "조반니 보카치오",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/291_%EB%8D%B0%EC%B9%B4%EB%A9%94%EB%A1%A0-1-500x852.jpg"
    },
    {
        "number": 292,
        "title": "데카메론 (2)",
        "author": "조반니 보카치오",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8D%B0%EC%B9%B4%EB%A9%94%EB%A1%A02-%ED%91%9C1-500x848.jpg"
    },
    {
        "number": 293,
        "title": "데카메론 (3)",
        "author": "조반니 보카치오",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8D%B0%EC%B9%B4%EB%A9%94%EB%A1%A03-%ED%91%9C1-500x863.jpg"
    },
    {
        "number": 294,
        "title": "나누어진 하늘",
        "author": "크리스타 볼프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/294_%EB%82%98%EB%88%84%EC%96%B4%EC%A7%84-%ED%95%98%EB%8A%98-500x852.jpg"
    },
    {
        "number": 295,
        "title": "제브데트 씨와 아들들 (1)",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/295_%EC%A0%9C%EB%B8%8C%EB%8D%B0%ED%8A%B8-%EC%94%A8%EC%99%80-%EC%95%84%EB%93%A4%EB%93%A4-1-500x852.jpg"
    },
    {
        "number": 296,
        "title": "제브데트 씨와 아들들 (2)",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/296_%EC%A0%9C%EB%B8%8C%EB%8D%B0%ED%8A%B8-%EC%94%A8%EC%99%80-%EC%95%84%EB%93%A4%EB%93%A4-2-500x852.jpg"
    },
    {
        "number": 297,
        "title": "여인의 초상 (1)",
        "author": "헨리 제임스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/297_%EC%97%AC%EC%9D%B8%EC%9D%98-%EC%B4%88%EC%83%81-1-500x852.jpg"
    },
    {
        "number": 298,
        "title": "여인의 초상 (2)",
        "author": "헨리 제임스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/298_%EC%97%AC%EC%9D%B8%EC%9D%98-%EC%B4%88%EC%83%81-2-500x852.jpg"
    },
    {
        "number": 299,
        "title": "압살롬, 압살롬!",
        "author": "윌리엄 포크너",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/299_%EC%95%95%EC%82%B4%EB%A1%AC-%EC%95%95%EC%82%B4%EB%A1%AC-500x852.jpg"
    },
    {
        "number": 300,
        "title": "이상 소설 전집",
        "author": "이상",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/300_%EC%9D%B4%EC%83%81-%EC%86%8C%EC%84%A4-%EC%A0%84%EC%A7%91-500x852.jpg"
    },
    {
        "number": 301,
        "title": "레 미제라블 (1)",
        "author": "빅토르 위고",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/301_%EB%A0%88-%EB%AF%B8%EC%A0%9C%EB%9D%BC%EB%B8%94-1-500x852.jpg"
    },
    {
        "number": 302,
        "title": "레 미제라블 (2)",
        "author": "빅토르 위고",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/302_%EB%A0%88-%EB%AF%B8%EC%A0%9C%EB%9D%BC%EB%B8%94-2-500x852.jpg"
    },
    {
        "number": 303,
        "title": "레 미제라블 (3)",
        "author": "빅토르 위고",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/303_%EB%A0%88-%EB%AF%B8%EC%A0%9C%EB%9D%BC%EB%B8%94-3-500x852.jpg"
    },
    {
        "number": 304,
        "title": "레 미제라블 (4)",
        "author": "빅토르 위고",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/304_%EB%A0%88-%EB%AF%B8%EC%A0%9C%EB%9D%BC%EB%B8%94-4-500x852.jpg"
    },
    {
        "number": 305,
        "title": "레 미제라블 (5)",
        "author": "빅토르 위고",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/305%EB%A0%88-%EB%AF%B8%EC%A0%9C%EB%9D%BC%EB%B8%94-5-500x852.jpg"
    },
    {
        "number": 306,
        "title": "관객모독",
        "author": "페터 한트케",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/306_%EA%B4%80%EA%B0%9D%EB%AA%A8%EB%8F%85-500x852.jpg"
    },
    {
        "number": 307,
        "title": "더블린 사람들",
        "author": "제임스 조이스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/307_%EB%8D%94%EB%B8%94%EB%A6%B0-%EC%82%AC%EB%9E%8C%EB%93%A4-500x852.jpg"
    },
    {
        "number": 308,
        "title": "에드거 앨런 포 단편선",
        "author": "에드거 앨런 포",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/308_%EC%95%A0%EB%93%9C%EA%B1%B0-%EC%95%A8%EB%9F%B0-%ED%8F%AC-%EB%8B%A8%ED%8E%B8%EC%84%A0-500x852.jpg"
    },
    {
        "number": 309,
        "title": "보이체크 · 당통의 죽음",
        "author": "게오르크 뷔히너",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/309_%EB%B3%B4%EC%9D%B4%EC%B2%B4%ED%81%AC-%EB%8B%B9%ED%86%B5%EC%9D%98-%EC%A3%BD%EC%9D%8C-500x852.jpg"
    },
    {
        "number": 310,
        "title": "노르웨이의 숲",
        "author": "무라카미 하루키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/310_%EB%85%B8%EB%A5%B4%EC%9B%A8%EC%9D%B4%EC%9D%98-%EC%88%B2_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 311,
        "title": "운명론자 자크와 그의 주인",
        "author": "드니 디드로",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/311_%EC%9A%B4%EB%AA%85%EB%A1%A0%EC%9E%90-%EC%9E%90%ED%81%AC%EC%99%80-%EA%B7%B8%EC%9D%98-%EC%A3%BC%EC%9D%B8_%ED%91%9C11-500x847.jpg"
    },
    {
        "number": 312,
        "title": "헤밍웨이 단편선 1",
        "author": "어니스트 헤밍웨이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%97%A4%EB%B0%8D%EC%9B%A8%EC%9D%B4-%EB%8B%A8%ED%8E%B8%EC%84%A0-1_%ED%91%9C1-500x853.jpg"
    },
    {
        "number": 313,
        "title": "헤밍웨이 단편선 2",
        "author": "어니스트 헤밍웨이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%97%A4%EB%B0%8D%EC%9B%A8%EC%9D%B4-%EB%8B%A8%ED%8E%B8%EC%84%A0-2_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 314,
        "title": "피라미드",
        "author": "윌리엄 골딩",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%94%BC%EB%9D%BC%EB%AF%B8%EB%93%9C_%ED%91%9C%EC%A7%801-500x852.jpg"
    },
    {
        "number": 315,
        "title": "닫힌 방 · 악마와 선한 신",
        "author": "장폴 사르트르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8B%AB%ED%9E%8C-%EB%B0%A9-%EC%95%85%EB%A7%88%EC%99%80-%EC%84%A0%ED%95%9C-%EC%8B%A0_%ED%91%9C1-500x855.jpg"
    },
    {
        "number": 316,
        "title": "등대로",
        "author": "버지니아 울프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%93%B1%EB%8C%80%EB%A1%9C-%ED%91%9C%EC%A7%80-11-500x828.jpg"
    },
    {
        "number": 317,
        "title": "한국 희곡선 (1)",
        "author": "송영",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%95%9C%EA%B5%AD%ED%9D%AC%EA%B3%A1%EC%84%A01_%ED%91%9C11-500x852.jpg"
    },
    {
        "number": 318,
        "title": "한국 희곡선 (2)",
        "author": "송영",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%95%9C%EA%B5%AD%ED%9D%AC%EA%B3%A1%EC%84%A02_%ED%91%9C1-500x854.jpg"
    },
    {
        "number": 319,
        "title": "여자의 일생",
        "author": "기 드 모파상",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/319_%EC%97%AC%EC%9E%90%EC%9D%98-%EC%9D%BC%EC%83%9D_%ED%91%9C1_s-500x851.jpg"
    },
    {
        "number": 320,
        "title": "의식",
        "author": "세스 노터봄",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/320_%EC%9D%98%EC%8B%9D_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 321,
        "title": "육체의 악마",
        "author": "레몽 라디게",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/321_%EC%9C%A1%EC%B2%B4%EC%9D%98%EC%95%85%EB%A7%88_%ED%91%9C1_72dpi.jpg"
    },
    {
        "number": 322,
        "title": "감정 교육 (1)",
        "author": "귀스타브 플로베르",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937463228/9788937463228_front_medium.jpg"
    },
    {
        "number": 323,
        "title": "감정 교육 (2)",
        "author": "귀스타브 플로베르",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937463235/9788937463235_front_medium.jpg"
    },
    {
        "number": 324,
        "title": "불타는 평원",
        "author": "후안 룰포",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%B6%88%ED%83%80%EB%8A%94-%ED%8F%89%EC%9B%90_%ED%91%9C11-500x853.jpg"
    },
    {
        "number": 325,
        "title": "위대한 몬느",
        "author": "알랭 푸르니에",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/325_%EC%9C%84%EB%8C%80%ED%95%9C%EB%AA%AC%EB%8A%90_%ED%91%9C1_%EC%9B%B9-500x851.jpg"
    },
    {
        "number": 326,
        "title": "라쇼몬",
        "author": "아쿠타가와 류노스케",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91326_%EB%9D%BC%EC%87%BC%EB%AA%AC-%ED%91%9C1-500x832.jpg"
    },
    {
        "number": 327,
        "title": "반바지 당나귀",
        "author": "앙리 보스코",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%B0%98%EB%B0%94%EC%A7%80%EB%8B%B9%EB%82%98%EA%B7%80_web.jpg"
    },
    {
        "number": 328,
        "title": "정복자들",
        "author": "앙드레 말로",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937463280/9788937463280_front_medium.jpg"
    },
    {
        "number": 329,
        "title": "우리 동네 아이들 (1)",
        "author": "나지브 마흐푸즈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_329_%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4%EC%95%84%EC%9D%B4%EB%93%A41-500x853.jpg"
    },
    {
        "number": 330,
        "title": "우리 동네 아이들 (2)",
        "author": "나지브 마흐푸즈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_330_%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4%EC%95%84%EC%9D%B4%EB%93%A42-500x852.jpg"
    },
    {
        "number": 331,
        "title": "개선문 (1)",
        "author": "에리히 마리아 레마르크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EA%B0%9C%EC%84%A0%EB%AC%B81_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 332,
        "title": "개선문 (2)",
        "author": "에리히 마리아 레마르크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EA%B0%9C%EC%84%A0%EB%AC%B82_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 333,
        "title": "사바나의 개미 언덕",
        "author": "치누아 아체베",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/333_%EC%82%AC%EB%B0%94%EB%82%98%EC%9D%98%EA%B0%9C%EB%AF%B8%EC%96%B8%EB%8D%95_%ED%91%9C12-500x847.jpg"
    },
    {
        "number": 334,
        "title": "게걸음으로",
        "author": "귄터 그라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91-334_%EA%B2%8C%EA%B1%B8%EC%9D%8C%EC%9C%BC%EB%A1%9C_%ED%91%9C1_%EC%9B%B9%EC%82%AC%EC%9D%B4%EC%A6%88.jpg"
    },
    {
        "number": 335,
        "title": "코스모스",
        "author": "비톨트 곰브로비치",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91335_%EC%BD%94%EC%8A%A4%EB%AA%A8%EC%8A%A4_%ED%91%9C1-500x853.jpg"
    },
    {
        "number": 336,
        "title": "좁은 문 · 전원교향곡 · 배덕자",
        "author": "앙드레 지드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%A2%81%EC%9D%80%EB%AC%B8%EC%99%B8_%ED%91%9C1_%EC%9B%B9%EC%9A%A9-500x851.jpg"
    },
    {
        "number": 337,
        "title": "암 병동 (1)",
        "author": "알렉산드르 솔제니친",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/337_%EC%95%94%EB%B3%91%EB%8F%991_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 338,
        "title": "암 병동 (2)",
        "author": "알렉산드르 솔제니친",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/338_%EC%95%94%EB%B3%91%EB%8F%992_%ED%91%9C1-500x854.jpg"
    },
    {
        "number": 339,
        "title": "피의 꽃잎들",
        "author": "응구기 와 시옹오",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_339_%ED%94%BC%EC%9D%98-%EA%BD%83%EC%9E%8E%EB%93%A4-500x852.jpg"
    },
    {
        "number": 340,
        "title": "운명",
        "author": "임레 케르테스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/340_%EC%9A%B4%EB%AA%85-%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 341,
        "title": "벌거벗은 자와 죽은 자 (1)",
        "author": "노먼 메일러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%B2%8C%EA%B1%B0%EB%B2%97%EC%9D%80%EC%9E%90%EC%99%80%EC%A3%BD%EC%9D%80%EC%9E%901_%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 342,
        "title": "벌거벗은 자와 죽은 자 (2)",
        "author": "노먼 메일러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%B2%8C%EA%B1%B0%EB%B2%97%EC%9D%80%EC%9E%90%EC%99%80%EC%A3%BD%EC%9D%80%EC%9E%902_%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 343,
        "title": "시지프 신화",
        "author": "알베르 카뮈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%8B%9C%EC%A7%80%ED%94%84-%EC%8B%A0%ED%99%94_%ED%91%9C1%EC%9D%B4%EB%AF%B8%EC%A7%80-500x852.jpg"
    },
    {
        "number": 344,
        "title": "뇌우",
        "author": "차오위",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/344_%EB%87%8C%EC%9A%B0_%ED%91%9C11-500x849.jpg"
    },
    {
        "number": 345,
        "title": "모옌 중단편선",
        "author": "모옌",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/345_%EB%AA%A8%EC%98%8C-%EC%A4%91%EB%8B%A8%ED%8E%B8%EC%84%A0_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 346,
        "title": "일야서",
        "author": "한사오궁",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%9D%BC%EC%95%BC%EC%84%9C-%ED%91%9C11-500x831.jpg"
    },
    {
        "number": 347,
        "title": "상속자들",
        "author": "윌리엄 골딩",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_%EC%83%81%EC%86%8D%EC%9E%90%EB%93%A4%EC%B5%9C%EC%A2%85-500x852.jpg"
    },
    {
        "number": 348,
        "title": "설득",
        "author": "제인 오스틴",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91348_%EC%84%A4%EB%93%9D_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 349,
        "title": "히로시마 내 사랑",
        "author": "마르그리트 뒤라스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91349_%ED%9E%88%EB%A1%9C%EC%8B%9C%EB%A7%88%EB%82%B4%EC%82%AC%EB%9E%91_%ED%91%9C%EC%A7%80-500x854.jpg"
    },
    {
        "number": 350,
        "title": "오 헨리 단편선",
        "author": "오 헨리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/350_%EC%98%A4%ED%97%A8%EB%A6%AC_%ED%91%9C1%EA%B5%90%EC%B2%B4-500x851.jpg"
    },
    {
        "number": 351,
        "title": "올리버 트위스트 (1)",
        "author": "찰스 디킨스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%98%AC%EB%A6%AC%EB%B2%84-%ED%8A%B8%EC%9C%84%EC%8A%A4%ED%8A%B8_1%EA%B6%8C-%ED%91%9C%EC%A7%80-500x852.jpg"
    },
    {
        "number": 352,
        "title": "올리버 트위스트 (2)",
        "author": "찰스 디킨스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%98%AC%EB%A6%AC%EB%B2%84-%ED%8A%B8%EC%9C%84%EC%8A%A4%ED%8A%B8_2%EA%B6%8C-%ED%91%9C%EC%A7%80-500x853.jpg"
    },
    {
        "number": 353,
        "title": "전쟁과 평화 (1)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%91%9C%EC%A7%80_%EC%A0%84%EC%9F%81%EA%B3%BC%ED%8F%89%ED%99%941-500x852.jpg"
    },
    {
        "number": 354,
        "title": "전쟁과 평화 (2)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%91%9C%EC%A7%80_%EC%A0%84%EC%9F%81%EA%B3%BC%ED%8F%89%ED%99%942-500x852.jpg"
    },
    {
        "number": 355,
        "title": "전쟁과 평화 (3)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%91%9C%EC%A7%80_%EC%A0%84%EC%9F%81%EA%B3%BC%ED%8F%89%ED%99%943-500x852.jpg"
    },
    {
        "number": 356,
        "title": "전쟁과 평화 (4)",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%91%9C%EC%A7%80_%EC%A0%84%EC%9F%81%EA%B3%BC%ED%8F%89%ED%99%944-500x851.jpg"
    },
    {
        "number": 357,
        "title": "다시 찾은 브라이즈헤드",
        "author": "에벌린 워",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/357_%EB%8B%A4%EC%8B%9C%EC%B0%BE%EC%9D%80%EB%B8%8C%EB%9D%BC%EC%9D%B4%EC%A6%88%ED%97%A4%EB%93%9C_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 358,
        "title": "아무도 대령에게 편지하지 않다",
        "author": "가브리엘 가르시아 마르케스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/358_%EC%95%84%EB%AC%B4%EB%8F%84-%EB%8C%80%EB%A0%B9%EC%97%90%EA%B2%8C-%ED%8E%B8%EC%A7%80%ED%95%98%EC%A7%80-%EC%95%8A%EB%8B%A4_%ED%91%9C11-500x852.jpg"
    },
    {
        "number": 359,
        "title": "사양",
        "author": "다자이 오사무",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/359_%EC%82%AC%EC%96%91_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 360,
        "title": "좌절",
        "author": "임레 케르테스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/360_%EC%A2%8C%EC%A0%88_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 361,
        "title": "닥터 지바고 (1)",
        "author": "보리스 파스테르나크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8B%A5%ED%84%B0-%EC%A7%80%EB%B0%94%EA%B3%A0-1_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 362,
        "title": "닥터 지바고 (2)",
        "author": "보리스 파스테르나크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8B%A5%ED%84%B0-%EC%A7%80%EB%B0%94%EA%B3%A0-2_%ED%91%9C1jpg-500x852.jpg"
    },
    {
        "number": 363,
        "title": "노생거 사원",
        "author": "제인 오스틴",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_363_%EB%85%B8%EC%83%9D%EA%B1%B0%EC%82%AC%EC%9B%90_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 364,
        "title": "개구리",
        "author": "모옌",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EA%B0%9C%EA%B5%AC%EB%A6%AC_%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 365,
        "title": "마왕",
        "author": "미셸 투르니에",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_%EB%A7%88%EC%99%95_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 366,
        "title": "맨스필드 파크",
        "author": "제인 오스틴",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_366_%EB%A7%A8%EC%8A%A4%ED%95%84%EB%93%9C-%ED%8C%8C%ED%81%AC_%ED%91%9C11-500x851.jpg"
    },
    {
        "number": 367,
        "title": "이선 프롬",
        "author": "이디스 워튼",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/367_%EC%9D%B4%EC%84%A0%ED%94%84%EB%A1%AC_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 368,
        "title": "여름",
        "author": "이디스 워튼",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/368_%EC%97%AC%EB%A6%84_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 369,
        "title": "나는 고백한다 (1)",
        "author": "자우메 카브레",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/369_%EB%82%98%EB%8A%94-%EA%B3%A0%EB%B0%B1%ED%95%9C%EB%8B%A41_%ED%91%9C11-500x852.jpg"
    },
    {
        "number": 370,
        "title": "나는 고백한다 (2)",
        "author": "자우메 카브레",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/370_%EB%82%98%EB%8A%94-%EA%B3%A0%EB%B0%B1%ED%95%9C%EB%8B%A42_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 371,
        "title": "나는 고백한다 (3)",
        "author": "자우메 카브레",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/371_%EB%82%98%EB%8A%94-%EA%B3%A0%EB%B0%B1%ED%95%9C%EB%8B%A43_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 372,
        "title": "태엽 감는 새 연대기 (1)",
        "author": "무라카미 하루키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84372_%ED%83%9C%EC%97%BD%EA%B0%90%EB%8A%94%EC%83%88%EC%97%B0%EB%8C%80%EA%B8%B01%EA%B6%8C-%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 373,
        "title": "태엽 감는 새 연대기 (2)",
        "author": "무라카미 하루키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84373_%ED%83%9C%EC%97%BD%EA%B0%90%EB%8A%94%EC%83%88%EC%97%B0%EB%8C%80%EA%B8%B02%EA%B6%8C-%ED%91%9C1-500x848.jpg"
    },
    {
        "number": 374,
        "title": "태엽 감는 새 연대기 (3)",
        "author": "무라카미 하루키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84374_%ED%83%9C%EC%97%BD%EA%B0%90%EB%8A%94%EC%83%88%EC%97%B0%EB%8C%80%EA%B8%B03%EA%B6%8C-%ED%91%9C1-500x853.jpg"
    },
    {
        "number": 375,
        "title": "대사들  (1)",
        "author": "헨리 제임스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8C%80%EC%82%AC%EB%93%A4_1_%ED%91%9C1-500x841.jpg"
    },
    {
        "number": 376,
        "title": "대사들  (2)",
        "author": "헨리 제임스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8C%80%EC%82%AC%EB%93%A4_2_%ED%91%9C1-500x847.jpg"
    },
    {
        "number": 377,
        "title": "족장의 가을",
        "author": "가브리엘 가르시아 마르케스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_377_%EC%A1%B1%EC%9E%A5%EC%9D%98-%EA%B0%80%EC%9D%84_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 378,
        "title": "핏빛 자오선",
        "author": "코맥 매카시",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%95%8F%EB%B9%9B%EC%9E%90%EC%98%A4%EC%84%A0_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 379,
        "title": "모두 다 예쁜 말들",
        "author": "코맥 매카시",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%AA%A8%EB%91%90%EB%8B%A4%EC%98%88%EC%81%9C%EB%A7%90%EB%93%A4_%ED%91%9C1-1-500x851.jpg"
    },
    {
        "number": 380,
        "title": "국경을 넘어",
        "author": "코맥 매카시",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EA%B5%AD%EA%B2%BD%EC%9D%84%EB%84%98%EC%96%B4_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 381,
        "title": "평원의 도시들",
        "author": "코맥 매카시",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%8F%89%EC%9B%90%EC%9D%98%EB%8F%84%EC%8B%9C%EB%93%A4_%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 382,
        "title": "만년",
        "author": "다자이 오사무",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937463822/9788937463822_front_medium.jpg"
    },
    {
        "number": 383,
        "title": "반항하는 인간",
        "author": "알베르 카뮈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84%EB%B0%98%ED%95%AD%ED%95%98%EB%8A%94%EC%9D%B8%EA%B0%84_%ED%91%9C11-500x847.jpg"
    },
    {
        "number": 384,
        "title": "악령 (1)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/384-386_%EC%95%85%EB%A0%B91_%ED%91%9C%EC%A7%80%ED%8E%BC%EC%B9%A841-500x852.jpg"
    },
    {
        "number": 385,
        "title": "악령 (2)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/384-386_%EC%95%85%EB%A0%B91_%ED%91%9C%EC%A7%80%ED%8E%BC%EC%B9%A842-500x852.jpg"
    },
    {
        "number": 386,
        "title": "악령 (3)",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/384-386_%EC%95%85%EB%A0%B91_%ED%91%9C%EC%A7%80%ED%8E%BC%EC%B9%A843-500x852.jpg"
    },
    {
        "number": 387,
        "title": "태평양을 막는 제방",
        "author": "마르그리트 뒤라스",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937463877/9788937463877_front_medium.jpg"
    },
    {
        "number": 388,
        "title": "남아 있는 나날",
        "author": "가즈오 이시구로",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/388_%EB%82%A8%EC%95%84-%EC%9E%88%EB%8A%94-%EB%82%98%EB%82%A0_%ED%91%9C12-500x854.jpg"
    },
    {
        "number": 389,
        "title": "앙리 브륄라르의 생애",
        "author": "스탕달",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%95%99%EB%A6%AC-%EB%B8%8C%EB%A5%84%EB%9D%BC%EB%A5%B4%EC%9D%98-%EC%83%9D%EC%95%A0_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 390,
        "title": "찻집",
        "author": "라오서",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%91%9C15-500x841.jpg"
    },
    {
        "number": 391,
        "title": "태어나지 않은 아이를 위한 기도",
        "author": "임레 케르테스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%ED%91%9C17-500x852.jpg"
    },
    {
        "number": 392,
        "title": "서머싯 몸 단편선  (1)",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/392_%EC%84%9C%EB%A8%B8%EC%8B%AF%EB%AA%B8%EB%8B%A8%ED%8E%B8%EC%84%A0_1_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 393,
        "title": "서머싯 몸 단편선  (2)",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/393_%EC%84%9C%EB%A8%B8%EC%8B%AF%EB%AA%B8%EB%8B%A8%ED%8E%B8%EC%84%A0_2_%ED%91%9C1-500x849.jpg"
    },
    {
        "number": 394,
        "title": "케이크와 맥주",
        "author": "서머싯 몸",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/394_%EC%BC%80%EC%9D%B4%ED%81%AC%EC%99%80%EB%A7%A5%EC%A3%BC_%ED%91%9C1-1-500x851.jpg"
    },
    {
        "number": 395,
        "title": "월든",
        "author": "헨리 데이비드 소로",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937463952/9788937463952_front_medium.jpg"
    },
    {
        "number": 396,
        "title": "모래 사나이",
        "author": "E. T. A. 호프만",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84_%EB%AA%A8%EB%9E%98%EC%82%AC%EB%82%98%EC%9D%B4_%ED%91%9C1-500x815.jpg"
    },
    {
        "number": 397,
        "title": "검은 책 (1)",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EA%B2%80%EC%9D%80%EC%B1%851%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 398,
        "title": "검은 책 (2)",
        "author": "오르한 파묵",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EA%B2%80%EC%9D%80%EC%B1%852%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 399,
        "title": "방랑자들",
        "author": "올가 토르카추크",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937463990/9788937463990_front_medium.jpg"
    },
    {
        "number": 400,
        "title": "시여, 침을 뱉어라",
        "author": "김수영",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464003/9788937464003_front_medium.jpg"
    },
    {
        "number": 401,
        "title": "환락의 집  (1)",
        "author": "이디스 워튼",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/401_%ED%99%98%EB%9D%BD%EC%9D%98%EC%A7%911_%ED%91%9C11-500x852.jpg"
    },
    {
        "number": 402,
        "title": "환락의 집  (2)",
        "author": "이디스 워튼",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/402_%ED%99%98%EB%9D%BD%EC%9D%98%EC%A7%912_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 403,
        "title": "달려라 메로스",
        "author": "다자이 오사무",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%8B%AC%EB%A0%A4%EB%9D%BC%EB%A9%94%EB%A1%9C%EC%8A%A4_%ED%91%9C1-500x851.jpg"
    },
    {
        "number": 404,
        "title": "아버지와 자식",
        "author": "이반 세르게예비치 투르게네프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%95%84%EB%B2%84%EC%A7%80%EC%99%80%EC%9E%90%EC%8B%9D_%ED%91%9C1-500x847.jpg"
    },
    {
        "number": 405,
        "title": "청부 살인자의 성모",
        "author": "페르난도 바예호",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464058/9788937464058_front_medium.jpg"
    },
    {
        "number": 406,
        "title": "세피아빛 초상",
        "author": "이사벨 아옌데",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%ED%94%BC%EC%95%84%EB%B9%9B%EC%B4%88%EC%83%81_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 407,
        "title": "사기 열전  (1)",
        "author": "사마천",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/407_%EC%82%AC%EA%B8%B0%EC%97%B4%EC%A0%84_%ED%91%9C%EC%A7%801-500x852.jpg"
    },
    {
        "number": 408,
        "title": "사기 열전  (2)",
        "author": "사마천",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/408_%EC%82%AC%EA%B8%B0%EC%97%B4%EC%A0%84_%ED%91%9C%EC%A7%801-500x852.jpg"
    },
    {
        "number": 409,
        "title": "사기 열전  (3)",
        "author": "사마천",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/409_%EC%82%AC%EA%B8%B0%EC%97%B4%EC%A0%84_%ED%91%9C%EC%A7%801-500x852.jpg"
    },
    {
        "number": 410,
        "title": "사기 열전  (4)",
        "author": "사마천",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/410_%EC%82%AC%EA%B8%B0%EC%97%B4%EC%A0%84_%ED%91%9C%EC%A7%801-500x852.jpg"
    },
    {
        "number": 411,
        "title": "이상 시 전집",
        "author": "이상",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%9D%B4%EC%83%81%EC%8B%9C%EC%A0%84%EC%A7%91%ED%91%9C1-500x850.jpg"
    },
    {
        "number": 412,
        "title": "어둠 속의 사건",
        "author": "오노레 드 발자크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%E1%84%89%E1%85%A6%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB412%E1%84%8B%E1%85%A5%E1%84%83%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B4%E1%84%89%E1%85%A1%E1%84%80%E1%85%A5%E1%86%AB_%E1%84%91%E1%85%AD1-1-500x852.jpg"
    },
    {
        "number": 413,
        "title": "태평천하",
        "author": "채만식",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84_%ED%83%9C%ED%8F%89%EC%B2%9C%ED%95%98_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 414,
        "title": "노스트로모 (1)",
        "author": "조지프 콘래드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/414-415_%EB%85%B8%EC%8A%A4%ED%8A%B8%EB%A1%9C%EB%AA%A81_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 415,
        "title": "노스트로모 (2)",
        "author": "조지프 콘래드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/414-415_%EB%85%B8%EC%8A%A4%ED%8A%B8%EB%A1%9C%EB%AA%A82_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 416,
        "title": "제르미날 (1)",
        "author": "에밀 졸라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/416_%EC%A0%9C%EB%A5%B4%EB%AF%B8%EB%82%A01_%ED%91%9C1-1-500x852.jpg"
    },
    {
        "number": 417,
        "title": "제르미날 (2)",
        "author": "에밀 졸라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/417_%EC%A0%9C%EB%A5%B4%EB%AF%B8%EB%82%A02_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 418,
        "title": "명인",
        "author": "가와바타 야스나리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/418_%EB%AA%85%EC%9D%B8_%ED%91%9C1-500x849.jpg"
    },
    {
        "number": 419,
        "title": "핀처 마틴",
        "author": "윌리엄 골딩",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/419%E1%84%91%E1%85%B5%E1%86%AB%E1%84%8E%E1%85%A5%E1%84%86%E1%85%A1%E1%84%90%E1%85%B5%E1%86%AB_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 420,
        "title": "사라진 · 샤베르 대령",
        "author": "오노레 드 발자크",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%E1%84%89%E1%85%A6%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB420%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB_%E1%84%89%E1%85%A3%E1%84%87%E1%85%A6%E1%84%85%E1%85%B3%E1%84%83%E1%85%A2%E1%84%85%E1%85%A7%E1%86%BC_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 421,
        "title": "빅 서",
        "author": "잭 케루악",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464218/9788937464218_front_medium.jpg"
    },
    {
        "number": 422,
        "title": "코뿔소",
        "author": "외젠 이오네스코",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%BD%94%EB%BF%94%EC%86%8C_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 423,
        "title": "블랙박스",
        "author": "아모스 오즈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/423_%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%A8%E1%84%87%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3_%E1%84%91%E1%85%AD1-500x856.jpg"
    },
    {
        "number": 424,
        "title": "고양이 눈 (1)",
        "author": "마거릿 애트우드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/424%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%8B%E1%85%B5%E1%84%82%E1%85%AE%E1%86%AB1_%E1%84%91%E1%85%AD1-500x851.jpg"
    },
    {
        "number": 425,
        "title": "고양이 눈 (2)",
        "author": "마거릿 애트우드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/425%E1%84%80%E1%85%A9%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%8B%E1%85%B5%E1%84%82%E1%85%AE%E1%86%AB2_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 426,
        "title": "도둑 신부 (1)",
        "author": "마거릿 애트우드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/426%E1%84%83%E1%85%A9%E1%84%83%E1%85%AE%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%87%E1%85%AE1_%E1%84%91%E1%85%AD1-500x851.jpg"
    },
    {
        "number": 427,
        "title": "도둑 신부 (2)",
        "author": "마거릿 애트우드",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/427%E1%84%83%E1%85%A9%E1%84%83%E1%85%AE%E1%86%A8%E1%84%89%E1%85%B5%E1%86%AB%E1%84%87%E1%85%AE2_%E1%84%91%E1%85%AD1-500x851.jpg"
    },
    {
        "number": 428,
        "title": "슈니츨러 작품선",
        "author": "아르투어 슈니츨러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84_%EC%8A%88%EB%8B%88%EC%B8%A8%EB%9F%AC_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 429,
        "title": "세계의 끝과 하드보일드 원더랜드 (1)",
        "author": "무라카미 하루키",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464294/9788937464294_front_medium.jpg"
    },
    {
        "number": 430,
        "title": "세계의 끝과 하드보일드 원더랜드 (2)",
        "author": "무라카미 하루키",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464300/9788937464300_front_medium.jpg"
    },
    {
        "number": 431,
        "title": "멜랑콜리아 Ⅰ–Ⅱ",
        "author": "욘 포세",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464317/9788937464317_front_medium.jpg"
    },
    {
        "number": 432,
        "title": "도적들",
        "author": "요한 크리스토프 프리드리히 폰 실러",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EB%AF%BC%EC%9D%8C%EC%82%AC_%EB%8F%84%EC%A0%81%EB%93%A4_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 433,
        "title": "예브게니 오네긴 · 대위의 딸",
        "author": "알렉산드르 세르게예비치 푸시킨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/433_%EC%98%88%EB%B8%8C%EA%B2%8C%EB%8B%88%EC%98%A4%EB%84%A4%EA%B8%B4_%EB%8C%80%EC%9C%84%EC%9D%98%EB%94%B8_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 434,
        "title": "초대받은 여자 (1)",
        "author": "시몬 드 보부아르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/434-%E1%84%8E%E1%85%A9%E1%84%83%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AE%E1%84%8B%E1%85%B3%E1%86%AB-%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%A11-%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 435,
        "title": "초대받은 여자 (2)",
        "author": "시몬 드 보부아르",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/435-%E1%84%8E%E1%85%A9%E1%84%83%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AE%E1%84%8B%E1%85%B3%E1%86%AB-%E1%84%8B%E1%85%A7%E1%84%8C%E1%85%A12-%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 436,
        "title": "미들마치 (1)",
        "author": "조지 엘리엇",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_436_%EB%AF%B8%EB%93%A4%EB%A7%88%EC%B9%98_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 437,
        "title": "미들마치 (2)",
        "author": "조지 엘리엇",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_437_%EB%AF%B8%EB%93%A4%EB%A7%88%EC%B9%982_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 438,
        "title": "이반 일리치의 죽음",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/438_%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%B7_%E1%84%91%E1%85%AD1-500x851.jpg"
    },
    {
        "number": 439,
        "title": "캔터베리 이야기 (1)",
        "author": "제프리 초서",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/439-%EC%BA%94%ED%84%B0%EB%B2%A0%EB%A6%AC-%EC%9D%B4%EC%95%BC%EA%B8%B0-%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 440,
        "title": "캔터베리 이야기 (2)",
        "author": "제프리 초서",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/440-%EC%BA%94%ED%84%B0%EB%B2%A0%EB%A6%AC-%EC%9D%B4%EC%95%BC%EA%B8%B0-%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 441,
        "title": "아소무아르(목로주점) (1)",
        "author": "에밀 졸라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/441_%E1%84%8B%E1%85%A1%E1%84%89%E1%85%A9%E1%84%86%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B3_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 442,
        "title": "아소무아르(목로주점) (2)",
        "author": "에밀 졸라",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/442_%E1%84%8B%E1%85%A1%E1%84%89%E1%85%A9%E1%84%86%E1%85%AE%E1%84%8B%E1%85%A1%E1%84%85%E1%85%B3_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 443,
        "title": "가난한 사람들",
        "author": "표도르 미하일로비치 도스토옙스키",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%E1%84%89%E1%85%A6%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB_443_%E1%84%80%E1%85%A1%E1%84%82%E1%85%A1%E1%86%AB%E1%84%92%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A1%E1%84%85%E1%85%A1%E1%86%B7%E1%84%83%E1%85%B3%E1%86%AF_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 444,
        "title": "마차오 사전 (1)",
        "author": "한사오궁",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/444-%EB%A7%88%EC%B0%A8%EC%98%A4-%EC%82%AC%EC%A0%84-1-.jpg"
    },
    {
        "number": 445,
        "title": "마차오 사전 (2)",
        "author": "한사오궁",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/445-%EB%A7%88%EC%B0%A8%EC%98%A4-%EC%82%AC%EC%A0%84-2.jpg"
    },
    {
        "number": 446,
        "title": "집으로 날아가다",
        "author": "랠프 엘리슨",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%A7%91%EC%9C%BC%EB%A1%9C%EB%82%A0%EC%95%84%EA%B0%80%EB%8B%A4_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 447,
        "title": "집으로부터 멀리",
        "author": "피터 케리",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%A7%91%EC%9C%BC%EB%A1%9C%EB%B6%80%ED%84%B0-%EB%A9%80%EB%A6%AC_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 448,
        "title": "바스커빌가의 사냥개",
        "author": "아서 코넌 도일",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/448_%EB%B0%94%EC%8A%A4%EC%BB%A4%EB%B9%8C%EA%B0%80%EC%9D%98-%EC%82%AC%EB%83%A5%EA%B0%9C_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 449,
        "title": "사냥꾼의 스케치",
        "author": "이반 세르게예비치 투르게네프",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464492/9788937464492_front_medium.jpg"
    },
    {
        "number": 450,
        "title": "필경사 바틀비 · 선원 빌리 버드",
        "author": "허먼 멜빌",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/450-%ED%95%84%EA%B2%BD%EC%82%AC-%EB%B0%94%ED%8B%80%EB%B9%84_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 451,
        "title": "8월은 악마의 달",
        "author": "에드나 오브라이언",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%E1%84%89%E1%85%A6%E1%84%86%E1%85%AE%E1%86%AB%E1%84%8C%E1%85%A5%E1%86%AB451_8%E1%84%8B%E1%85%AF%E1%86%AF%E1%84%8B%E1%85%B3%E1%86%AB%E1%84%8B%E1%85%A1%E1%86%A8%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B4%E1%84%83%E1%85%A1%E1%86%AF_%E1%84%91%E1%85%AD1-500x852.jpg"
    },
    {
        "number": 452,
        "title": "헌등사",
        "author": "다와다 요코",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/452-%ED%97%8C%EB%93%B1%EC%82%AC_%ED%91%9C%EC%A7%804-500x852.jpg"
    },
    {
        "number": 453,
        "title": "색, 계",
        "author": "장아이링",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%83%89%EA%B3%84_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 454,
        "title": "겨울 여행",
        "author": "자우메 카브레",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_454_%EA%B2%A8%EC%9A%B8%EC%97%AC%ED%96%89_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 455,
        "title": "기억의 빛",
        "author": "마이클 온다치",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EA%B3%84%EB%AC%B8%ED%95%99%EC%A0%84%EC%A7%91_455_%EA%B8%B0%EC%96%B5%EC%9D%98%EB%B9%9B-%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 456,
        "title": "표범",
        "author": "주세페 토마시 디 람페두사",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464560/9788937464560_front_medium.jpg"
    },
    {
        "number": 457,
        "title": "크리스마스 캐럴",
        "author": "찰스 디킨스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84457_%ED%81%AC%EB%A6%AC%EC%8A%A4%EB%A7%88%EC%8A%A4%EC%BA%90%EB%9F%B4_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 458,
        "title": "버진 수어사이드",
        "author": "제프리 유제니디스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/458_%EB%B2%84%EC%A7%84%EC%88%98%EC%96%B4%EC%82%AC%EC%9D%B4%EB%93%9C_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 459,
        "title": "미들섹스 (1)",
        "author": "제프리 유제니디스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/459-460_%EB%AF%B8%EB%93%A4%EC%84%B9%EC%8A%A41_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 460,
        "title": "미들섹스 (2)",
        "author": "제프리 유제니디스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/459-460_%EB%AF%B8%EB%93%A4%EC%84%B9%EC%8A%A42_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 461,
        "title": "사랑에 대하여",
        "author": "안톤 체호프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84_461_%EC%82%AC%EB%9E%91%EC%97%90%EB%8C%80%ED%95%98%EC%97%AC_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 462,
        "title": "나?",
        "author": "페터 플람",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464621/9788937464621_front_medium.jpg"
    },
    {
        "number": 463,
        "title": "지킬 박사와 하이드 씨의 기이한 사건",
        "author": "로버트 루이스 스티븐슨",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464638/9788937464638_front_medium.jpg"
    },
    {
        "number": 464,
        "title": "박지원 소설선",
        "author": "박지원",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464645/9788937464645_front_medium.jpg"
    },
    {
        "number": 465,
        "title": "안과 겉 · 결혼 · 여름",
        "author": "알베르 카뮈",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84_465_%EC%95%88%EA%B3%BC-%EA%B2%89%E2%80%A7%EA%B2%B0%ED%98%BC%E2%80%A7%EC%97%AC%EB%A6%84_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 466,
        "title": "소중한 저주",
        "author": "제럴드 머네인",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84466_%EC%86%8C%EC%A4%91%ED%95%9C%EC%A0%80%EC%A3%BC_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 467,
        "title": "향성",
        "author": "나탈리 사로트",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84_467_%ED%96%A5%EC%84%B1_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 468,
        "title": "퀴어",
        "author": "윌리엄 S. 버로스",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/%EC%84%B8%EB%AC%B8%EC%A0%84468_%ED%80%B4%EC%96%B4_%ED%91%9C4-500x852.jpg"
    },
    {
        "number": 469,
        "title": "악수도 없이 헤어졌다",
        "author": "피천득",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464690/9788937464690_front_medium.jpg"
    },
    {
        "number": 470,
        "title": "버지니아 울프 단편선",
        "author": "버지니아 울프",
        "coverUrl": "https://minumsa.minumsa.com/wp-content/uploads/bookcover/470-%EB%B2%84%EC%A7%80%EB%8B%88%EC%95%84%EC%9A%B8%ED%94%84%EB%8B%A8%ED%8E%B8%EC%84%A0_%ED%91%9C1-500x852.jpg"
    },
    {
        "number": 471,
        "title": "쓰가루",
        "author": "다자이 오사무",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464713/9788937464713_front_medium.jpg"
    },
    {
        "number": 472,
        "title": "사람은 무엇으로 사는가",
        "author": "레프 니콜라예비치 톨스토이",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464720/9788937464720_front_medium.jpg"
    },
    {
        "number": 473,
        "title": "도련님",
        "author": "나쓰메 소세키",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464737/9788937464737_front_medium.jpg"
    },
    {
        "number": 474,
        "title": "레볼루셔너리 로드",
        "author": "리처드 예이츠",
        "coverUrl": "https://app.minumsa.com/images/book-covers/9788937464768/9788937464768_front_medium.jpg"
    },
    {
        "number": 476,
        "title": "댈러웨이 부인",
        "author": "버지니아 울프",
        "coverUrl": "https://i.ibb.co/Nnn61Jvg/484-1-500x852.jpg"
    }
];

export function getBookByNumber(num: number): Book | undefined {
    return books.find(b => b.number === num);
}

export function getBookColor(num: number): { bg: string; accent: string } {
    const hue = (num * 137.508) % 360;
    const saturation = 45 + (num % 20);
    const lightness = 85 + (num % 10);
    return {
        bg: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
        accent: `hsl(${hue}, ${saturation + 15}%, ${lightness - 35}%)`,
    };
}
