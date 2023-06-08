CREATE DATABASE StudyBuddy;
GO
USE StudyBuddy;
GO
CREATE TABLE Prompt (
	id INT PRIMARY KEY IDENTITY(1,1),
	[Question] NVARCHAR(100),
	[Answer] NVARCHAR(255)
);
GO
CREATE TABLE [User] (
	id INT PRIMARY KEY IDENTITY(1,1),
	[Name] NVARCHAR(30),
);
GO
CREATE TABLE Favorited (
	id INT PRIMARY KEY IDENTITY(1,1),
	[User_Id] INT FOREIGN KEY REFERENCES [User](id),
	Prompt_Id INT FOREIGN KEY REFERENCES Prompt(id)
);
GO
SELECT * FROM Prompt;
SELECT * FROM [User];
SELECT * FROM Favorited;

INSERT INTO PROMPT(Question,Answer)
VALUES('What is OOP?','Object Oriented Programming'),
('What is Angular?','A javascript framework'),
('What is Encapsulation?','Encapsulation is the packing of data and functions into a single component.');
GO
INSERT INTO [User]([Name])
VALUES('Harry'),('Yiding'),('Mikael');
GO
INSERT INTO Favorited([User_Id],Prompt_Id)
VALUES(1,24),(1,25),(1,31),(2,27),(2,24);
