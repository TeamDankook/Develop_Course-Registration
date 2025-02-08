require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();  // ✅ 먼저 app을 초기화해야 함
const PORT = process.env.PORT || 5000;

// 미들웨어 설정
app.use(express.json());
app.use(cors());

// API 라우트 추가 (순서 수정됨)
const dbTestRoutes = require('./routes/db_test');
app.use('/db', dbTestRoutes);

// 기본 테스트 라우트
app.get('/', (req, res) => {
    res.send('DKU Course Registration API is running...');
	});

	app.listen(PORT, () => {
	    console.log(`Server running on port ${PORT}`);
		});


