
const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors()); 
app.use(express.static(__dirname)); 
app.use(express.json()); 


const productData = [
    { category: "상의", brand: 'Adidas', product: '와플 베켄바우어', price: '260,000' },
      { category: "하의", brand: 'Stussy', product: '스탁 워터 쇼츠', price: '110,000' },
      { category: "신발", brand: 'Adidas', product: '삼바 OG', price: '92,000' },
      { category: "패션잡화", brand: 'COS', product: '퀼티드 미니백', price: '169,000' },
      { category: "상의", brand: 'BAPE', product: '티셔츠 화이트 퍼플', price: '140,000' },
      { category: "하의", brand: 'Adidas', product: '오리지널스 파이어버드', price: '92,000' },
      { category: "신발", brand: 'Asics', product: 'kiko', price: '595,000' },
      { category: "신발", brand: 'Nike', product: '에어포스 1', price: '124,000' },
      { category: "신발", brand: 'Asics', product: '언리미티드 젤 카야노', price: '180,000' },
      { category: "상의", brand: 'Supreme', product: '어나운싱 티셔츠 화이트', price: '105,000' },
      { category: "패션잡화", brand: 'Human Made', product: '하트 키링 레드', price: '45,000' },
      { category: "상의", brand: 'Carhartt', product: '루즈 핏 헤비웨이트', price: '31,000' },
      { category: "하의", brand: 'Suade', product: '컬러 위시드 데님', price: '45,000' }
  ];


app.get('/products', (req, res) => {
  res.json(productData);
});

app.listen(3000, () => {
  console.log('✅ 서버 실행 중: http://localhost:3000');
});

app.post('/signup', (req, res) => {
    const userData = req.body;
  
    console.log("📩 회원가입 요청:", userData);
    
    //json 파일에 회원정보 저장!
    fs.appendFile('users.json', JSON.stringify(userData) + '\n', (err) => {
      if (err) {
        console.error("❌ 파일 저장 실패:", err);
        return res.status(500).json({ message: '저장 실패' });
      }
  
      res.status(200).json({ message: '가입 완료' });
    });
  });
  
