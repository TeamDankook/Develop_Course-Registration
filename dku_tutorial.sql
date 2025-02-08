CREATE DATABASE DKU;

USE DKU;
CREATE TABLE students (
    student_id INT PRIMARY KEY,          -- 학번 (고유번호)
    password VARCHAR(255) NOT NULL       -- 비밀번호 (암호화 가능)
);
CREATE TABLE courses (
    course_id INT PRIMARY KEY,           -- 교과목 번호 (고유번호)
    campus VARCHAR(10) NOT NULL,         -- 캠퍼스 (죽전, 천안)
    division INT NOT NULL,               -- 분반
    name VARCHAR(100) NOT NULL,          -- 교과목 명
    credits INT NOT NULL,                -- 학점
    professor VARCHAR(50),               -- 교강사명
    schedule VARCHAR(255),               -- 요일/교시/강의실
    enrolled INT DEFAULT 0,              -- 신청 인원
    max_capacity INT NOT NULL,           -- 제한 인원
    is_cancelled BOOLEAN DEFAULT FALSE   -- 폐강 여부
);
CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,   -- 신청 고유 ID
    student_id INT NOT NULL,             -- 학생 ID
    course_id INT NOT NULL,              -- 과목 ID
    status VARCHAR(10) NOT NULL,         -- '성공' or '실패'
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

desc students;

# 수강신청할 과목 삽입해야됨
INSERT INTO courses (course_id, campus, division, name, credits, professor, schedule, enrolled, max_capacity, is_cancelled)
VALUES
(372460, '죽전', 2, '알고리즘', 3, '최홍인', '목9,10,11,12,13,14(소프트307)', 0, 43, FALSE),
(527570, '죽전', 1, '실무중심산학협력프로젝트1(캡스톤디자인-SW)', 3, '박소현', '수17,18,19,20(소프트406)', 0, 20, FALSE),
(524660, '죽전', 2, 'SW보안개론', 3, '조성제', '월12,13,14/수12,13,14(미디어406)', 0, 39, FALSE),
(329810, '죽전', 1, '데이터베이스', 3, '박소현', '화4,5,6/목4,5,6(소프트517)', 0, 34, FALSE),
(558020, '죽전', 2, '오픈소스SW분석(빅데이터)', 3, '최종무', '수5,6,7,8,9,10(소프트517)', 0, 40, FALSE),
(388600, '죽전', 2, '인공지능', 3, '최상일', '월1,2,3/수1,2,3(2공105)', 0, 68, FALSE);


select *
	from courses;
