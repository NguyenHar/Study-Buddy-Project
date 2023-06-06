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

SELECT * FROM Prompt;
SELECT * FROM [User];
SELECT * FROM Favorited;

INSERT INTO PROMPT(Question,Answer)
VALUES('What is OOP?','Object Oriented Programming'),
('What is Angular?','A javascript framework');

INSERT INTO [User]([Name])
VALUES('Harry'),('Yiding'),('Mikael');

INSERT INTO Favorited([User_Id],Prompt_Id)
VALUES(1,2),(3,1),(2,1),(2,2);