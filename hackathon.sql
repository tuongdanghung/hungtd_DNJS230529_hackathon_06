CREATE DATABASE hackathon;

CREATE TABLE hackathon.categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE hackathon.questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    level TINYINT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE hackathon.answers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    is_answer INT NOT NULL,
    content LONGTEXT NOT NULL,
    question_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO hackathon.categories (name) VALUES
    ('Toán'),
    ('Văn');
    
INSERT INTO hackathon.questions (content, category_id, level) VALUES
    ('1 + 1 = ?', 1,1),
    ('1 + 2 = ?', 1,2),
    ('1 + 3 = ?', 1,3);

INSERT INTO hackathon.questions (content, category_id, level) VALUES
    ('Từ nào dưới đây là danh từ?', 2,1),
    ('Loài vật nào có vú và ưa sống trong nước?', 2,2),
    ('Tác phẩm nào sau đây được viết bởi Nguyễn Du?', 2,3);

INSERT INTO hackathon.answers (is_answer, content, question_id) VALUES
    (1, '2', 1),
    (0, '3', 1),
    (0, '4)', 1),
    (0, '5', 1);
    
INSERT INTO hackathon.answers (is_answer, content, question_id) VALUES
    (0, '2', 2),
    (1, '3', 2),
    (0, '4)', 2),
    (0, '5', 2);
INSERT INTO hackathon.answers (is_answer, content, question_id) VALUES
    (0, '2', 3),
    (0, '5', 3),
    (1, '4', 3),
    (0, '5', 3);
    
INSERT INTO hackathon.answers (is_answer, content, question_id) VALUES
    (0, 'Đọc', 4),
    (0, 'Chạy', 4),
    (1, 'Bàn', 4),
    (0, 'Nhanh', 4);

INSERT INTO hackathon.answers (is_answer, content, question_id) VALUES
    (0, 'Sư tử', 5),
    (0, 'Khỉ', 5),
    (1, 'Cá voi', 5),
    (0, 'Gấu trúc', 5);

INSERT INTO hackathon.answers (is_answer, content, question_id) VALUES
    (1, 'Truyện Kiều', 6),
    (0, 'Số đỏ', 6),
    (0, 'Chí Phèo', 6),
    (0, 'Đất nước', 6);