const express = require('express');
const db = require('../db'); // MySQL 연결 모듈
const router = express.Router();

// 📌 강의 목록 조회 API
router.get('/courses', (req, res) => {
    db.query('SELECT * FROM courses', (err, results) => {
	        if (err) {
			            console.error("MySQL 오류:", err);
						            return res.status(500).json({ error: '데이터 조회 실패' });
									        }
											        res.json(results);
													    });
														});

														// 📌 강의 추가 API
														router.post('/courses', (req, res) => {
														    const { course_id, campus, division, name, credits, professor, schedule, max_capacity } = req.body;

															    const query = `INSERT INTO courses (course_id, campus, division, name, credits, professor, schedule, enrolled, max_capacity, is_cancelled)
																                   VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, FALSE)`;

																				       db.query(query, [course_id, campus, division, name, credits, professor, schedule, max_capacity], (err, result) => {
																					           if (err) {
																							               console.error("강의 추가 실패:", err);
																										               return res.status(500).json({ error: '강의 추가 실패' });
																													           }
																															           res.json({ message: '강의 추가 성공', course_id });
																																	       });
																																		   });

																																		   // 📌 학생 목록 조회 API
																																		   router.get('/students', (req, res) => {
																																		       db.query('SELECT * FROM students', (err, results) => {
																																			           if (err) {
																																					               console.error("MySQL 오류:", err);
																																								               return res.status(500).json({ error: '데이터 조회 실패' });
																																											           }
																																													           res.json(results);
																																															       });
																																																   });

																																																   // 📌 학생 추가 API
																																																   router.post('/students', (req, res) => {
																																																       const { student_id, password } = req.body;

																																																	       db.query('INSERT INTO students (student_id, password) VALUES (?, ?)', [student_id, password], (err, result) => {
																																																		           if (err) {
																																																				               console.error("학생 추가 실패:", err);
																																																							               return res.status(500).json({ error: '학생 추가 실패' });
																																																										           }
																																																												           res.json({ message: '학생 추가 성공', student_id });
																																																														       });
																																																															   });

																																																															   module.exports = router;

