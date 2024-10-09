CREATE TABLE book_names(
	id SERIAL PRIMARY KEY,
	name varchar(150),
	author varchar(100),
	ISBN INT UNIQUE NOT NULL,
	time_added DATE NOT NULL
);

CREATE TABLE review(
	id SERIAL PRIMARY KEY,
	review TEXT,
	rating INT NOT NULL,
	book_id INTEGER REFERENCES book_names(id)
);



ALTER TABLE book_names
ADD img_url VARCHAR(100);


INSERT INTO book_names(name, author, isbn, time_added, img_url)
VALUES('Harry Potter and the Philosophers Stone', 'J.K Rowling', 9780747532699, '2024-10-09T10:43:19.132Z', 'https://covers.openlibrary.org/b/ISBN/9780747532699-L.jpg')


ALTER TABLE book_names
ALTER COLUMN isbn TYPE BIGINT

INSERT INTO review(review, rating, book_id)
VALUES('Harry Potter and the Philosopher''s Stone is a magical, captivating introduction to a world of wizards, friendship, and adventure. J.K. Rowling''s vivid storytelling makes it a timeless classic for all ages.', 4, 1);



SELECT b.id, b.name, b.author, r.review, r.rating, r.book_id
FROM book_names b
JOIN review r
ON b.id = r.book_id