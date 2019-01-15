INSERT INTO Communities (name, description, image, createdAt, updatedAt) VALUES
	("UCB", "Coding Bootcamp members", "https://thebottomline.as.ucsb.edu/wp-content/uploads/2011/11/200px-University_of_California_Seal.svg_.png", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("Stanford", "Tree lovers anonymous", "https://identity.stanford.edu/img/seal-light-red.png", "2019-01-08 03:14:07", "2019-01-08 03:14:07"),
    ("UCSF", "Med students united", "https://identity.ucsf.edu/sites/g/files/tkssra266/f/wysiwyg/logo_expression_1.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07");

INSERT INTO Events (name, date, description, location, max_attendees, image, createdAt, updatedAt, CommunityId) VALUES
	("UCB code event", "2019-04-09 16:20:00", "Coding together to create a web app with a new awesome API called Herd", "Berkeley", 8, "https://storage.googleapis.com/webdesignledger.pub.network/WDL/work-better-with-coders-1.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07", 1),
    ("Stanford spring event", "2019-05-03 18:00:00", "Spring fling party", "Palo Alto",  24, "https://images.studentuniverse.com/new/suwebui/photos/marketing/spring-break-us-party-destinations.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07", 2),
    ("UCSF polar bear swim", "2019-06-08 08:30:00", "Swim in the bay", "San Francisco", 16,  "https://www.mynelsonnow.com/wp-content/uploads/2016/12/Polar_bear_swimming_in_zoo.jpg", "2019-01-08 03:14:07", "2019-01-08 03:14:07", 3);