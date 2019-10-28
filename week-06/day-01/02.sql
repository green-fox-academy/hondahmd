create table UserInfo(
    UserId integer PRIMARY KEY,
    UserName varchar(30));

create table TodoIssues(
    IssueId integer PRIMARY KEY,
    IssueName varchar(30),
    Done tinyint,
    UserId integer REFERENCES UserInfo(UserId));

insert into UserInfo values (1, "Honda"), (2, "Earvin"), (3, "Arthur");

insert into TodoIssues values
    (1, "buy milk", 0, 1),
    (2, "sleep", 1, 1);

insert into TodoIssues values
    (3, "game", 0, 2),
    (4, "order pizza", 1, 2);

insert into TodoIssues values
    (5, "code", 0, 3),
    (6, "cook", 1, 3);

select * from TodoIssues;

select * from TodoIssues
    where UserId=1;

update TodoIssues set Done=1 where IssueName="buy milk";

delete from TodoIssues
    where IssueName="buy milk";
