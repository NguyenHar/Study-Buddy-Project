USE StudyBuddy;
GO

DELETE FROM [User];
DBCC CHECKIDENT ([User], RESEED, 0);
GO
DELETE FROM Prompt;
DBCC CHECKIDENT (Prompt, RESEED, 0);
GO
DELETE FROM Favorited;
DBCC CHECKIDENT (Favorited, RESEED, 0);
GO

INSERT INTO [User]([Name])
VALUES('Harry'),('Mikael'),('Yiding');
GO
INSERT INTO Prompt(Question,Answer)
VALUES('What is OOP?','Object Oriented Programming'),
('What is ASP.NET?','A Microsoft web framework for developing web applications using HTML, CSS, and JS'),
('What is Angular?','An open-source JavaScript framework written in TypeScript'),
('What are the different loops?','For, ForEach, While, Do-While'),
('What is Inheritance?','Classes can inherit properties and methods from parent class, allowing the extension of functionality and creating a hierarchy'),
('What is Polymorphism?','Child objects can be treated as their parent class, allowing them to respond to the parents method calls'),
('What is Encapsulation?','Encapsulation is the packing of data and functions into a single component.'),
('What is Abstraction?','Complex systems are simplified by hiding unnecessary details'),
('What are comments','Used to document code, making it easier to read and understand'),
('List some branching techniques in C#','If/Else, Switch/Case, Try/Catch, Jump Statements (break, continue, return, goto), Ternary Operator'),
('What is an interface?','A reference type of abstract methods that inherited classes must implement'),
('What is keyword "static" in C#?','A declaration that it belongs to the class instead of instances of the class');
GO
INSERT INTO Favorited([User_Id],Prompt_Id)
VALUES(1,5),(1,6),(1,7),(1,8),
(2,9),(2,11),
(3,1),(3,2),(3,3);
GO

SELECT * FROM Favorited;
SELECT * FROM Prompt;
SELECT * FROM [User];
GO
