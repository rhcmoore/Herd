INSERT INTO Communities (name, description, createdAt, updatedAt) VALUES
	("UCB", "Coding Bootcamp members", "2014-01-01", "2018-01-09"),
    ("Stanford", "Tree lovers anonymous", "2015-01-01", "2017-03-01"),
    ("UCSF", "Med students united", "2016-01-11", "2016-04-01");

INSERT INTO Events (name, date, description, max_attendees, createdAt, updatedAt, CommunityId) VALUES
	("UCB code event", "2019-04-09", "Coding together", 8, "2014-01-01", "2018-01-09", 1),
    ("Stanford spring event", "2019-05-03", "Spring fling party", 4, "2015-01-01", "2017-03-01", 2),
    ("UCSF polar bear swim", "2019-06-08", "Swim in the bay", 6, "2016-01-11", "2016-04-01", 3);