# 👟 KREAM Admin 프로젝트

> 부트스트랩 기반의 관리자 페이지
> 상품 조회 및 회원가입 기능을 구현한 웹 

---

## 📸 주요 기능 미리보기

### ✅ 상품 목록 조회  
<img width="1488" alt="스크린샷 2025-04-02 오전 11 06 43" src="https://github.com/user-attachments/assets/c26aa364-07c8-4f5f-9f6a-c58477ee98c9" />

### ✅ 회원가입 폼  
<img width="1488" alt="스크린샷 2025-04-02 오전 11 07 09" src="https://github.com/user-attachments/assets/fac5a861-9cc3-484d-892e-74eeb3b9b5d2" />

### ✅ 가입 완료 페이지  
<img width="1488" alt="스크린샷 2025-04-02 오전 11 07 58" src="https://github.com/user-attachments/assets/be85a60b-501a-4f56-b297-c45da5c9bec9" />

### ✅ 서버 실행 상태  
<img width="521" alt="스크린샷 2025-04-02 오전 11 34 22" src="https://github.com/user-attachments/assets/c3ca9638-b952-4c71-97af-dcf5bfcacb64" />

### ✅ 서버 로그 출력  
<img width="402" alt="스크린샷 2025-04-02 오후 1 35 02" src="https://github.com/user-attachments/assets/c2f40322-eb6b-4bc4-a5dc-1ded5d3e58c1" />

### ✅ 회원 데이터 저장 (JSON) 
<img width="1292" alt="스크린샷 2025-04-02 오후 1 35 12" src="https://github.com/user-attachments/assets/f2a86149-10e7-416d-a8cc-7dc758976b22" />


---

## 🔧 기술 스택

- HTML / CSS / JavaScript
- Bootstrap 5
- Node.js + Express
- JSON 파일 기반 데이터 저장
- Git + GitHub

---
## 📁 폴더 구조
 ``` kream_admin_backend/ ├── adminpage.html # 상품 목록 ├── join.html # 회원가입 폼 ├── success.html # 가입 완료 페이지 ├── users.json # 회원 정보 저장 ├── server.js # Node.js 서버 ├── screenshot_*.png # 캡처 이미지들 └── README.md # 프로젝트 소개 ``` 
---

+ ## 📂 주요 파일 설명

+ | 파일명            | 설명                       |
+ | `adminpage.html` | 상품 목록 페이지             |
+ | `join.html`      | 회원가입 폼                 |
+ | `success.html`   | 가입 완료 페이지             |
+ | `users.json`     | 가입된 회원 정보를 저장하는 파일 |
+ | `server.js`      | Node.js + Express 서버     |


---


## ✨ 주요 기능
- 상품 목록 조회, 카테고리 필터링, 페이지네이션
- 회원가입 폼 및 유효성 검사
- 가입 완료 후 success.html로 이동
- 서버 연동(Node.js + JSON 저장)
- 다크모드 토글 기능

---


## 🚀 실행 방법

# 1. 프로젝트 클론
git clone https://github.com/somineda/js.git

# 2. 폴더 이동
cd kream_admin_backend

# 3. 의존성 설치
npm install

# 4. 서버 실행
node server.js
