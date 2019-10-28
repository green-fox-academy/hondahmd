-- Q1
select title from movie
where director="Steven Spielberg";

-- Q2
select distinct year from movie join rating on movie.mID=rating.mID
where stars in (4,5)
order by year asc;

-- Q3
select title from movie left join rating on rating.mId=movie.mId
where stars is null;

-- Q4
select name from reviewer join rating on reviewer.rID=rating.rID
where ratingDate is null;

-- Q5
select name, title, stars, ratingDate from 
    ((movie join rating on movie.mID=rating.mID) as movieRating) 
    join reviewer on movieRating.rID=reviewer.rID
order by name, title, stars;

-- TODO: The date comparison might not be as exactly as what we want
-- Q6
select name, title from (rating as rating1 join rating as rating2 on rating1.rId=rating2.rId 
    and rating1.mId=rating2.mId
    and rating1.ratingDate>rating2.ratingDate
    and rating1.stars>rating2.stars) as foundRating
    join reviewer on reviewer.rId=foundRating.rId
    join movie on foundRating.mId=movie.mId

-- Q7
select title, max(foundRatings.stars) from 
    (rating as rating1 join rating as rating2 on rating1.mId=rating2.mId) as foundRatings
    join movie on movie.mId=foundRatings.mId
group by foundRatings.mId
order by title;

-- Q8
select title, (max(stars) - min(stars)) as ratingSpread from rating
    join movie on movie.mId=rating.mId
group by movie.mId
order by ratingSpread desc, title;

-- Q9
select abs(after.avg - before.avg) from (
    (select avg(avgStars) as avg from 
        (select avg(stars) as avgStars from rating
            join movie on movie.mId=rating.mId
            where year>=1980
            group by rating.mId))as after
    join (select avg(avgStars) avg from 
        (select avg(stars) as avgStars from rating
            join movie on movie.mId=rating.mId
            where year<1980
            group by rating.mId))as before)

-- S**t, I just realized that I only have to do until Q5 -_-

-- Extra
-- Q1
select distinct(name) from rating 
    join reviewer on rating.rId=reviewer.rId
    join movie on movie.mId=rating.mId
where title="Gone with the Wind";

-- Q2
select name, title, stars from (rating
    join reviewer on reviewer.rId = rating.rId) as foundReviewer
    join movie on foundReviewer.mId=movie.mId
        and movie.director = foundReviewer.name;