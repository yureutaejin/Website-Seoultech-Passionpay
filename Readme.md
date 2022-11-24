# 서울과학기술대학교 산업정보시스템 전공 열정페이 웹사이트 개발 (Seoultech iise passionpay club website)

## 코드 메뉴얼 (mac os terminal 기준)
1. git clone [main branch repository]
2. 해당 폴더 접근 후 (docker-compose.yml이 있는), 환경에 맞는 yml 파일 고르고 docker-compose.yml으로 이름을 바꾼 뒤, docker compose up -d
3. (11월 25일) docker compose up -d만으로 모듈, 라이브러리 설치부터 세팅, 파일 실행 자동 진행 됨. API 사용 시 ip(or localhost):80/api/~~ 사용.   
API 확인은 기존과 동일하게 localhost:8080/docs로 확인  
  ### 구조
    1. nginx(local port 80: docker nginx port 80) => nginx를 통한 리버스 프록시
    2. backend (docker nginx port 80 to docker compose backend:8080) => API 제공
    3. frontend (docker nginx port 80 to docker compose frontend:3000) => 프론트엔드 제공 
    4. db (docker compose db:3306) => DB


   
    
