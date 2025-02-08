require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db'); // MySQL 연결 파일
const apiRoutes = require('./routes/api'); // 📌 API 라우트 가져오기

const app = express();
const PORT = process.env.PORT || 5000;

// 📌 미들웨어 설정
app.use(express.json()); // JSON 요청 파싱
app.use(cors()); // CORS 허용

// 📌 API 라우트 추가
app.use('/api', apiRoutes);

// 📌 기본 테스트 라우트 (서버가 실행 중인지 확인용)
app.get('/', (req, res) => {
    res.send('DKU Course Registration API is running...');
	});

	// 📌 서버 실행
	app.listen(PORT, () => {
	    console.log(`✅ Server running on port ${PORT}`);
		});

