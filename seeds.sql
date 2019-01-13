INSERT INTO Communities (name, description, createdAt, updatedAt) VALUES
	("UCB", "Coding Bootcamp members", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("Stanford", "Tree lovers anonymous", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("UCSF", "Med students united", "2019-01-08 03:14:07", "2019-01-08 03:14:07");

INSERT INTO Events (name, date, description, max_attendees, createdAt, updatedAt, CommunityId) VALUES
	("UCB code event", "2019-04-09 16:20:00", "Coding together Coding together Coding together Coding together Coding together", 8, "2019-01-08 03:14:07", "2019-01-08 03:14:07", 1),
    ("Stanford spring event", "2019-05-03 18:00:00", "Spring fling party", 4, "2019-01-08 03:14:07", "2019-01-08 03:14:07", 2),
    ("UCSF polar bear swim", "2019-06-08 08:30:00", "Swim in the bay", 6, "2019-01-08 03:14:07", "2019-01-08 03:14:07", 3);