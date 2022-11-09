# 서울과학기술대학교 산업정보시스템 전공 열정페이 웹사이트 개발 (Seoultech iise passionpay club website)

## 코드 메뉴얼 (mac os terminal 기준)
1. git clone [main branch repository]
2. 해당 폴더 접근 후 (docker-compose.yml이 있는), docker compose up -d
3. 디버깅을 위해서 프론트, 백, db 전부 수동으로 동작하도록 만듦(자동 실행x)으로 docker compose 내 container 각각에 접근해서 실행 (프로젝트 완료 후 개선)
  - container 명은 docker ps를 통해서 조회
  - docker exec -it [container 이름] /bin/bash 로 각 container에 접근
  
  * a DB container (따로 할 것 없음)
  * b frontend container (구동 방식 추가 바람)
  * c backend container
    1. container 내부 접근시 main.py가 있는 경로에서 "python db_init_setting.py" (추가 예정)
    2. 이후 backend web server 띄우기 -> "python main.py"
    3. 각 API 접근은 " [구동한 환경의 ip or 로컬이라면 localhost]:8080/~~~~"
    4. 각 API Swagger UI(document) 확인은 "[구동한 환경의 ip or 로컬이라면 localhost]:8080/docs"
    
