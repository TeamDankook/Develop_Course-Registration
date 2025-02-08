const express = require('express');
const db = require('../db'); // MySQL 연결 모듈
const router = express.Router();

// 학생 목록 조회 API
router.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
	        if (err) {
			            return res.status(500).json({ error: '데이터 조회 실패' });
						        }
								        res.json(results);
										    });
											});

											// 강의 목록 조회 API
											router.get('/courses', (req, res) => {
											    db.query('SELECT * FROM courses', (err, results) => {
												        if (err) {
														            return res.status(500).json({ error: '데이터 조회 실패' });
																	        }
																			        res.json(results);
																					    });
																						});

																						// 수강 신청 목록 조회 API
																						router.get('/enrollments', (req, res) => {
																						    db.query('SELECT * FROM enrollments', (err, results) => {
																							        if (err) {
																									            return res.status(500).json({ error: '데이터 조회 실패' });
																												        }
																														        res.json(results);
																																    });
																																	});

																																	module.exports = router;

