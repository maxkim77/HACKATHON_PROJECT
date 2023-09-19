# HackertonProject


![슬라이드1](https://github.com/maxkim77/HackertonProject/assets/141907655/629b8643-a80e-45aa-a135-40576aea2458)


**1. 추진배경**


**1.1 아이디어 제시:** 


**『급할 때, 사람들이 쉽게 주변의 화장실을 찾을 수 있도록 하는 서비스』**

 ‘더편한세상’은 디지털 대전환 시대에 디지털 불평등을 줄이고 모든 이에게 편의성을 제공하는 혁신적인 서비스를 개발하고자 하는 열정을 갖고 해커톤에 참여하게 되었습니다. **목표는 공중 화장실 위치 서비스를 개발하여, 모든 사람들이 편리하게 이용할 수 있으면서 특히 장애인을 중심으로 한 취약 계층들에게 접근성과 편의성을 제공하는 것**입니다. 이 서비스를 통해 장애인들이 도시 환경에서 더 자유롭고 편리하게 활동할 수 있는 데 기여하고자 합니다. 



**1.2 추진배경 :** 


 대다수의 인기 앱은 지도, 내비게이션, 대중교통, 예약 등을 중심으로 하지만 ***취약계층에 특화된 서비스**는 부족합니다. FIT-TO는 외출 시 **화장실 위치 정보 제공과 사용자 평가 기반으로 도시 화장실 품질을 개선**하려 합니다. 이 서비스를 통해 모든 이, 특히 취약 계층에게 디지털로의 접근성과 편의성을 보장하고자 합니다. 따라서 FitTo는 다양한 기능을 통해 사회적, 경제적, 기술적 파급효과를 낼 수 있습니다.


**2. 개발목표 및 내용**


**2.1 서비스 모델 구현 목표, 개발내용, 개발범위**


(1) 서비스 모델 구현 목표: 사용자 친화적인 인터페이스와 정확한 위치 정보 및 다양한 기능 제공


(2) 개발내용 :


- 프론트엔드 : UI/UX, React Web
- 백엔드 : 백서버 구축, 데이터베이스 설계, API 개발, 인증 및 권한 관리
- 데이터베이스 : 사용할 데이터베이스 시스템, 테이블 및 스키마 설계, 쿼리 최적화
- 보안 : HTTPS, HTTPS, 기본적인 Injection 및 XSS 공격에 대한 대응책 강구 
- 테스팅: 통합 테스트, 성능 테스트, 사용자 테스트 


(3) 개발범위: 


**프론트엔드**
- Tech Stack : HTML, CSS, JavaScript, React


**백엔드**
- Tech Stack : Java, Spring
- 데이터베이스: MySQL
- 코드 에디터 : VSCode
- 배포 및 버전 관리 : Git, GitHub, AWS


**2.2 서비스 모델** 


![슬라이드4](https://github.com/maxkim77/HackertonProject/assets/141907655/04329db5-36bf-46b9-a6e9-756a9edb702c)


(1) 시스템 구성: 사용자 앱, 사용자 웹페이지, 관리자 웹페이지
(2) 주요기능 : 
- 공공 화장실의 위치 찾기 기능 (표시기능: 전체/장애인전용/기저귀 교체 공간 여부)
- 화장실 리뷰 : 화장실 상태 관련 내용 및 별점
- 시각장애인을 위한 AI 음성인식 API 활용
- 취약 계층을 위한 보호자 호출 기능(등록된 메시지 발송) 
- 신규등록 : 등록되지 않은 화장실 제보 기능
- 커뮤니티 기능 : 화장실 정보 공유 및 지역정보 제공, 분실물 신고 게시글 업로드 가능



**2.3 서비스 모델** 


(1) 개발목표 및 기술명세


**개발목표**


- 사용자 중심의 빠른 화장실 위치 제공 및 
  최적화된 화장실 추천
- 장애인 전용 화장실 정보 및 청결도, 
  편의시설 별점 시스템 제공
- 사용자 기반 화장실 정보 제보 시스템 도입
- 최적화된 반응형 UI/UX 구현


**기술명세**
- 반응형 프론트엔드 구축 및 모바일 환경 최적화
- RESTful API를 통한 개발
- 공공데이터 API 통신 및 비즈니스 로직간
  Non-blocking I/O 지향
- RDB 사용으로 DB 쿼리 최적화 및 유닛 테스트
- 각 개발단위간 유닛 테스트 시행 및 피드백


(2) 개발 내용: 
앱 및 웹 기반 서비스 개발, 데이터베이스 구축, 사용자 피드백 시스템 도입


**3. 주요특징 및 핵심기술**


**3.1 서비스 모델 구현 시 디지털 신기술의 장점 극대화 및 단점 최소화**


(1) 장점 극대화: 
- 개인화된 맞춤형 서비스 제공
- 취약 계층을 위한 다양한 보조 기능 제공


(2) 단점 최소화: 
- 실제 운영하지 않는 화장실은 불편함을 초래하기 때문에, 신고기능을 통해서 해당 화장실 위치 삭제
- 매크로 광고 댓글 및 악성 댓글 관리를 통한 어플리케이션 운영 최적화


**3.2 기존 기능 및 기술 대비 독창성과 우수성**
(1) 독창성: 
- 취약 계층을 위한 보호자 호출 기능(등록된 메시지 발송) 
- 시각장애인을 위한 AI 음성 인식 시스템
- 사진 등을 포함한 리뷰 기능을 통한 화장실 품질을 보장


(2) 우수성:
- 검색 필터 기능을 통한 다양한 화장실 옵션 제공
- 신규화장실 신고 및 등록을 통한 확장 가능성
- 구글 맵을 활용한 해외 시장 확장 가능성


**3.3 그림으로 표현**


![슬라이드5](https://github.com/maxkim77/HackertonProject/assets/141907655/fad22eca-69bc-41f1-b2b0-f5897514468a)



<앱화면 기능>


(1) 회원가입/로그인 바로 시작기능
(2) GPS활용 근처 화장실 위치서비스(별점 서비스)
(3) 긴급메시지발송기능
(4) 박스태그를 통한 검색필터기능
(5) 설정표시 클릭시 각종 화장실 신규 및 허위신고 기능


![슬라이드6](https://github.com/maxkim77/HackertonProject/assets/141907655/84154ed0-4a07-4cb3-87ed-fc914545f67f)


<웹화면기능>


(6) 커뮤니티 웹 화면 링크 연동


**4. 기대효과 및 활용방안**


![슬라이드5](https://github.com/maxkim77/HackertonProject/assets/141907655/2354cba8-5e64-4368-9831-c60ad08600cb)


4-1 제시한 모델의 파급효과 및 디지털 신기술 활용


(1) 파급효과: 
- 도시의 접근성을 향상 및 지역상인 매출증대 경제적 파급효과 기대
- AI 음성인식 등 다양한 기능 도입을 통해 차별화된 기술적 파급효과 기대
- 장애인, 노약자, 어린이와 같은 취약 계층의 생활 편의성을 크게 증진 사회적 파급효과 기대


(2) 디지털 신기술 활용: 
- 시각 장애인을 위한 AI음성인식 시스템으로 사용자에게 보다 편리한 서비스를 제공
- GPS를 활용한 사용자의 위치 기반으로 가까운 화장실을 실시간으로 검색서비스 제공
- 각 화장실의 현재 상태나 리뷰를 데이터베이스에서 불러와 사용자에게 제공


4.2 제안 아이디어의 현실적인 구현 가능성 및 활용 방안


(1) 구현 가능성
- 화장실 찾기 : Google Maps API을 활용한 구현
- 화장실 등록 : 공공기관 화장실 데이터를 활용한 DB생성과 신규화장실 신고기능을 통한 DB확장성
- 음성인식 기능: Google Cloud의 Speech-to-Text을 활용한 구현
- 로그인 기능 : Oracle 데이터베이스시스템을 통한 회원정보 관리
(2) 활용 방안
- 광고 및 제휴 : 사용자가 앱을 이용하는 동안, 지역 광고 배너를 통한 지역상인 매출증대 및 수익화
- 화장실 관련 상품 판매: 쿠팡파트너스 및 스마트스토어와 협약을 통한 휴대용 휴지 광고 등
- 프리미엄 서비스: 광고 Block 기능 및 맞춤형 ‘화면 테마’ 선택 기능

4.3 제안 아이디어의 향후 발전 가능성 및 사회적 기여도


(1) 발전 가능성:

   
- 화장실 정보 외에도 다양한 편의시설(휴게소, 음식점, 복지시설 등)의 정보 제공으로 서비스를 확장
- 사용자 간의 소통을 위한 커뮤니티 기능을 추가하여 활성화된 사용자 커뮤니티를 구축
- 추후 해외 확장 가능성

  
(2) 사회적 기여도: 
- 해당 서비스는 사회의 취약계층의 편의성 증진 뿐만 아니라 일상의 불편함을 해소
- 사업자와 사용자 간의 연결을 강화하여 지역 경제 활성화에도 기여 기대


**5. 개발 추진 체계**
   

5.1 최종 결과물 일정


![슬라이드7](https://github.com/maxkim77/HackertonProject/assets/141907655/9c019499-7511-48dc-84ab-41d073039482)


5.2 역할 분담

- 김**: 팀장 역할 및 기획안작성, 프론트 및 백엔드

- 송**
앱개발: 앱 개발 리드


- 최**
기술 및 백엔드 리드: 테스트 유지 및 보수


- 김**
기술 및 백엔드: 기능 구현 담당

- 최**
기술 및 백엔드: 기능 구현 담당



