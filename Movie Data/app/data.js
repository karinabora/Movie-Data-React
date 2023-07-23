/**import React, { useState, useEffect } from "react";
import Movie_row from "./movie_row.js"
const MovieList = () => {
    const [votes, setVotes] = useState(0);
    const [movies, setMovies] = useState([

        {
            id: 1,
            movieName: "Dear ZIndagi",
            movieYear: "2016",
            votes: 0,
            duration: "2H 31M",
            gender: "Drama,Romance",
            image: "Dear Zindagi.png",
            discription: "Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections. "
        }, {
            id: 2,
            movieName: " Brave",
            movieYear: "2012",
            votes: 0,
            duration: "1h 33msec",
            gender: "Adventuoos,comedy",
            image: "DEAR.png",
            discription: "Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "

        }, {
            id: 3,
            movieName: "Moana",
            movieYear: "2016",
            votes: 0,
            duration: "1h 47sec",
            gender: "Adventurous,Comedy",
            image: "image 1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 4,
            movieName: "Mulan",
            movieYear: "1998",
            duration: "1h 27m",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "D1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 5,
            movieName: "He Named Me Malala",
            movieYear: "2015",
            duration: "1h 20m",
            votes: 0,
            gender: "Biography, Documentary",
            image: "k5.png",
            discription: "A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
        }, {
            id: 6,
            movieName: "Soul Surfer",
            movieYear: "2011",
            duration: "1h 52minsec",
            votes: 0,
            gender: "Drama ,Biography,Family",
            image: "Zindagi.png",
            discription: "Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
        }, {
            id: 7,
            movieName: "Bend It Like Beckham",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Dear Zindagi100.png",
            image: "Zindagi1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 8,
            movieName: "Into The Wild",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "k2.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 9,
            movieName: "THe Pursuit Of Happyness",
            movieYear: "2006",
            duration: "1h 57m",
            votes: 0,
            gender: "Drama,Biography",

            image: "Dear Zindagi10.png",
            discription: "A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
        }, {
            id: 10,
            movieName: "The Intouchables",
            movieYear: "2011",
            duration: "1h 52min",
            votes: 0,
            gender: "Drama Biography Drama",
            image: "k3.png",
            discription: "After He Becomes Aquadriplegic from A paraglicing Accident,An AristocratHires A young Man From The Projects To Be His Caregiver , "

        }]);


    const handleDelete = (id) => {
        const updatedMovies = movies.filter((item) => item.id !== id);
        setMovies(updatedMovies);
    }

    const handleLike = (id) => {
        setVotes(votes + 1);
    };

    const handleDislike = (id) => {
        setVotes(votes - 1);
    };

    return (
        <div>
            {movies.map((item) => (
                <Movie_row key={item.id} item={item} onDelete={handleDelete} votes={votes}
                    onclick_like={() => handleLike(item.id)}
                    onclick_dislike={() => handleDislike(item.id)}
                />
            ))}
        </div>
    );
};

export default MovieList;



import React, { useState, useEffect } from "react";
import Movie_row from "./movie_row.js";

const MovieList = () => {
    const [votes, setVotes] = useState(0);
    const [movies, setMovies] = useState([

        {
            id: 1,
            movieName: "Dear ZIndagi",
            movieYear: "2016",
            votes: 0,
            duration: "2H 31M",
            gender: "Drama,Romance",
            image: "Dear Zindagi.png",
            discription: "Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections. "
        }, {
            id: 2,
            movieName: " Brave",
            movieYear: "2012",
            votes: 0,
            duration: "1h 33msec",
            gender: "Adventuoos,comedy",
            image: "DEAR.png",
            discription: "Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "

        }, {
            id: 3,
            movieName: "Moana",
            movieYear: "2016",
            votes: 0,
            duration: "1h 47sec",
            gender: "Adventurous,Comedy",
            image: "image 1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 4,
            movieName: "Mulan",
            movieYear: "1998",
            duration: "1h 27m",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "D1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 5,
            movieName: "He Named Me Malala",
            movieYear: "2015",
            duration: "1h 20m",
            votes: 0,
            gender: "Biography, Documentary",
            image: "k5.png",
            discription: "A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
        }, {
            id: 6,
            movieName: "Soul Surfer",
            movieYear: "2011",
            duration: "1h 52minsec",
            votes: 0,
            gender: "Drama ,Biography,Family",
            image: "Zindagi.png",
            discription: "Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
        }, {
            id: 7,
            movieName: "Bend It Like Beckham",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Dear Zindagi100.png",
            image: "Zindagi1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 8,
            movieName: "Into The Wild",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "k2.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 9,
            movieName: "THe Pursuit Of Happyness",
            movieYear: "2006",
            duration: "1h 57m",
            votes: 0,
            gender: "Drama,Biography",

            image: "Dear Zindagi10.png",
            discription: "A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
        }, {
            id: 10,
            movieName: "The Intouchables",
            movieYear: "2011",
            duration: "1h 52min",
            votes: 0,
            gender: "Drama Biography Drama",
            image: "k3.png",
            discription: "After He Becomes Aquadriplegic from A paraglicing Accident,An AristocratHires A young Man From The Projects To Be His Caregiver , "

        }]);

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, votes: item.votes - 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((item) => item.id !== id));
  };

  useEffect(() => {
    sortMovies();
  }, [movies]); // Update the sorting whenever the movies state changes

  const sortMovies = () => {
    setMovies((prevMovies) =>
      [...prevMovies].sort((a, b) => b.votes - a.votes)
    );
  };

  return (
    <div>
      {movies.map((item) => (
        <Movie_row
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onLike={handleLike}
          onDislike={handleDislike}
         />
      ))}
    </div>
  );
}

export default MovieList;


import React, { useState, useEffect } from "react";
import Movie_row from "./movie_row.js";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
            id: 1,
            movieName: "Dear ZIndagi",
            movieYear: "2016",
            votes: 0,
            duration: "2H 31M",
            gender: "Drama,Romance",
            image: "Dear Zindagi.png",
            discription: "Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections. "
        }, {
            id: 2,
            movieName: " Brave",
            movieYear: "2012",
            votes: 0,
            duration: "1h 33msec",
            gender: "Adventuoos,comedy",
            image: "DEAR.png",
            discription: "Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "

        }, {
            id: 3,
            movieName: "Moana",
            movieYear: "2016",
            votes: 0,
            duration: "1h 47sec",
            gender: "Adventurous,Comedy",
            image: "image 1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 4,
            movieName: "Mulan",
            movieYear: "1998",
            duration: "1h 27m",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "D1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 5,
            movieName: "He Named Me Malala",
            movieYear: "2015",
            duration: "1h 20m",
            votes: 0,
            gender: "Biography, Documentary",
            image: "k5.png",
            discription: "A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
        }, {
            id: 6,
            movieName: "Soul Surfer",
            movieYear: "2011",
            duration: "1h 52minsec",
            votes: 0,
            gender: "Drama ,Biography,Family",
            image: "Zindagi.png",
            discription: "Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
        }, {
            id: 7,
            movieName: "Bend It Like Beckham",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Dear Zindagi100.png",
            image: "Zindagi1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 8,
            movieName: "Into The Wild",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "k2.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 9,
            movieName: "THe Pursuit Of Happyness",
            movieYear: "2006",
            duration: "1h 57m",
            votes: 0,
            gender: "Drama,Biography",

            image: "Dear Zindagi10.png",
            discription: "A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
        }, {
            id: 10,
            movieName: "The Intouchables",
            movieYear: "2011",
            duration: "1h 52min",
            votes: 0,
            gender: "Drama Biography Drama",
            image: "k3.png",
            discription: "After He Becomes Aquadriplegic from A paraglicing Accident,An AristocratHires A young Man From The Projects To Be His Caregiver , "

        }
  ]);

  // Calculate the initial total votes for all movies
  const initialVotes = movies.reduce((total, movie) => total + movie.votes, 0);
  const [votes, setVotes] = useState(initialVotes);

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes + 1 } : movie
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes - 1 } : movie
      )
    );
  };

  // Update the total votes whenever the movies state changes
  useEffect(() => {
    const totalVotes = movies.reduce((total, movie) => total + movie.votes, 0);
    setVotes(totalVotes);
  }, [movies]);

  const sortMovies = () => {
    setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.votes - a.votes));
  };

  return (
    <div>
      <h2>Total Votes: {votes}</h2>
      {movies.map((movie) => (
        <Movie_row
          key={movie.id}
          movie={movie}
          onDelete={() => handleDelete(movie.id)}
          onLike={() => handleLike(movie.id)}
          onDislike={() => handleDislike(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;


import React, { useState, useEffect } from "react";
import Movie_row from "./movie_row.js";

const MovieList = () => {
  const [movies, setMovies] = useState([
     {
            id: 1,
            movieName: "Dear ZIndagi",
            movieYear: "2016",
            votes: 0,
            duration: "2H 31M",
            gender: "Drama,Romance",
            image: "Dear Zindagi.png",
            discription: "Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections. "
        }, {
            id: 2,
            movieName: " Brave",
            movieYear: "2012",
            votes: 0,
            duration: "1h 33msec",
            gender: "Adventuoos,comedy",
            image: "DEAR.png",
            discription: "Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "

        }, {
            id: 3,
            movieName: "Moana",
            movieYear: "2016",
            votes: 0,
            duration: "1h 47sec",
            gender: "Adventurous,Comedy",
            image: "image 1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 4,
            movieName: "Mulan",
            movieYear: "1998",
            duration: "1h 27m",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "D1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 5,
            movieName: "He Named Me Malala",
            movieYear: "2015",
            duration: "1h 20m",
            votes: 0,
            gender: "Biography, Documentary",
            image: "k5.png",
            discription: "A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
        }, {
            id: 6,
            movieName: "Soul Surfer",
            movieYear: "2011",
            duration: "1h 52minsec",
            votes: 0,
            gender: "Drama ,Biography,Family",
            image: "Zindagi.png",
            discription: "Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
        }, {
            id: 7,
            movieName: "Bend It Like Beckham",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Dear Zindagi100.png",
            image: "Zindagi1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 8,
            movieName: "Into The Wild",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "k2.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 9,
            movieName: "THe Pursuit Of Happyness",
            movieYear: "2006",
            duration: "1h 57m",
            votes: 0,
            gender: "Drama,Biography",

            image: "Dear Zindagi10.png",
            discription: "A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
        }, {
            id: 10,
            movieName: "The Intouchables",
            movieYear: "2011",
            duration: "1h 52min",
            votes: 0,
            gender: "Drama Biography Drama",
            image: "k3.png",
            discription: "After He Becomes Aquadriplegic from A paraglicing Accident,An AristocratHires A young Man From The Projects To Be His Caregiver , "

        }
  ]);

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes + 1 } : movie
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes - 1 } : movie
      )
    );
  };

  useEffect(() => {
    sortMovies();
  }, [movies]);

  const sortMovies = () => {
    setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.votes - a.votes));
  };

  return (
    <div>
      {movies.map((movie) => (
        <Movie_row
          key={movie.id}
          movie={movie}
          onDelete={() => handleDelete(movie.id)}
          onLike={() => handleLike(movie.id)}
          onDislike={() => handleDislike(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;

import React, { useState, useEffect } from "react";
import Movie_row from "./movie_row.js";

const MovieList = () => {
  const [movies, setMovies] = useState([
    // Existing movies
    // ...
  ]);

  const [newMovie, setNewMovie] = useState({
    movieName: "",
    movieYear: "",
    duration: "",
    gender: "",
    image: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleAddMovie = () => {
    if (
      newMovie.movieName &&
      newMovie.movieYear &&
      newMovie.duration &&
      newMovie.gender &&
      newMovie.image &&
      newMovie.description
    ) {
      const newMovieWithId = {
        ...newMovie,
        id: movies.length + 1, // Assign a unique ID to the new movie
        votes: 0,
      };
      setMovies((prevMovies) => [...prevMovies, newMovieWithId]);
      setNewMovie({
        movieName: "",
        movieYear: "",
        duration: "",
        gender: "",
        image: "",
        description: "",
      });
    } else {
      alert("Please fill in all fields before adding the movie.");
    }
  };

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes + 1 } : movie
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes - 1 } : movie
      )
    );
  };

  useEffect(() => {
    sortMovies();
  }, [movies]);

  const sortMovies = () => {
    setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.votes - a.votes));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="movieName"
          value={newMovie.movieName}
          onChange={handleInputChange}
          placeholder="Movie Name"
        />
        <input
          type="text"
          name="movieYear"
          value={newMovie.movieYear}
          onChange={handleInputChange}
          placeholder="Movie Year"
        />
        <input
          type="text"
          name="duration"
          value={newMovie.duration}
          onChange={handleInputChange}
          placeholder="Duration"
        />
        <input
          type="text"
          name="gender"
          value={newMovie.gender}
          onChange={handleInputChange}
          placeholder="Gender"
        />
        <input
          type="text"
          name="image"
          value={newMovie.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <textarea
          name="description"
          value={newMovie.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <button type="button" onClick={handleAddMovie}>
          Add Movie
        </button>
      </form>

      {movies.map((movie) => (
        <Movie_row
          key={movie.id}
          movie={movie}
          onDelete={() => handleDelete(movie.id)}
          onLike={() => handleLike(movie.id)}
          onDislike={() => handleDislike(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;

/**
import React, { useState, useEffect } from "react";
import Movie_row from "./movie_row.js";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      movieName: "Dear ZIndagi",
      movieYear: "2016",
      votes: 0,
      duration: "2H 31M",
      gender: "Drama,Romance",
      image: "Dear Zindagi.png",
      description:
        "Kaira is a cinematographer searching for a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections.",
    },
    // Add more movies as needed...
  ]);

  const [newMovie, setNewMovie] = useState({
    movieName: "",
    movieYear: "",
    duration: "",
    gender: "",
    image: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  const handleAddMovie = () => {
    if (
      newMovie.movieName &&
      newMovie.movieYear &&
      newMovie.duration &&
      newMovie.gender &&
      newMovie.image &&
      newMovie.description
    ) {
      const newMovieWithId = {
        ...newMovie,
        id: movies.length + 1,
        votes: 0,
      };
      setMovies((prevMovies) => [...prevMovies, newMovieWithId]);
      setNewMovie({
        movieName: "",
        movieYear: "",
        duration: "",
        gender: "",
        image: "",
        description: "",
      });
    } else {
      alert("Please fill in all fields before adding the movie.");
    }
  };

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes + 1 } : movie
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, votes: movie.votes - 1 } : movie
      )
    );
  };

  useEffect(() => {
    sortMovies();
  }, [movies]);

  const sortMovies = () => {
    setMovies((prevMovies) => [...prevMovies].sort((a, b) => b.votes - a.votes));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="movieName"
          value={newMovie.movieName}
          onChange={handleInputChange}
          placeholder="Movie Name"
        />
        <input
          type="text"
          name="movieYear"
          value={newMovie.movieYear}
          onChange={handleInputChange}
          placeholder="Movie Year"
        />
        <input
          type="text"
          name="duration"
          value={newMovie.duration}
          onChange={handleInputChange}
          placeholder="Duration"
        />
        <input
          type="text"
          name="gender"
          value={newMovie.gender}
          onChange={handleInputChange}
          placeholder="Gender"
        />
        <input
          type="text"
          name="image"
          value={newMovie.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <textarea
          name="description"
          value={newMovie.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <button type="button" onClick={handleAddMovie}>
          Add Movie
        </button>
      </form>

      {movies.map((movie) => (
        <Movie_row
          key={movie.id}
          movie={movie}
          onDelete={() => handleDelete(movie.id)}
          onLike={() => handleLike(movie.id)}
          onDislike={() => handleDislike(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;

**/

import React, { useState, useEffect } from "react";
import Movie_row from "./movie_row.js";
import Add_Movie from "./Add_movie.js";
const Data = () => {
  const [movies, setMovies] = useState([
    {
            id: 1,
            movieName: "Dear ZIndagi",
            movieYear: "2016",
            votes: 0,
            duration: "2H 31M",
            gender: "Drama,Romance",
            image: "Dear Zindagi.png",
            discription: "Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections. "
        }, {
            id: 2,
            movieName: " Brave",
            movieYear: "2012",
            votes: 0,
            duration: "1h 33msec",
            gender: "Adventuoos,comedy",
            image: "DEAR.png",
            discription: "Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "

        }, {
            id: 3,
            movieName: "Moana",
            movieYear: "2016",
            votes: 0,
            duration: "1h 47sec",
            gender: "Adventurous,Comedy",
            image: "image 1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 4,
            movieName: "Mulan",
            movieYear: "1998",
            duration: "1h 27m",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "D1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 5,
            movieName: "He Named Me Malala",
            movieYear: "2015",
            duration: "1h 20m",
            votes: 0,
            gender: "Biography, Documentary",
            image: "k5.png",
            discription: "A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
        }, {
            id: 6,
            movieName: "Soul Surfer",
            movieYear: "2011",
            duration: "1h 52minsec",
            votes: 0,
            gender: "Drama ,Biography,Family",
            image: "Zindagi.png",
            discription: "Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
        }, {
            id: 7,
            movieName: "Bend It Like Beckham",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Dear Zindagi100.png",
            image: "Zindagi1.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 8,
            movieName: "Into The Wild",
            movieYear: "2016",
            duration: "1h 47sec",
            votes: 0,
            gender: "Adventurous,Comedy",
            image: "k2.png",
            discription: "To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
        }, {
            id: 9,
            movieName: "THe Pursuit Of Happyness",
            movieYear: "2006",
            duration: "1h 57m",
            votes: 0,
            gender: "Drama,Biography",

            image: "Dear Zindagi10.png",
            discription: "A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
        }, {
            id: 10,
            movieName: "The Intouchables",
            movieYear: "2011",
            duration: "1h 52min",
            votes: 0,
            gender: "Drama Biography Drama",
            image: "k3.png",
            discription: "After He Becomes Aquadriplegic from A paraglicing Accident,An AristocratHires A young Man From The Projects To Be His Caregiver , "

        }
    // Rest of the movie objects...
  ]);

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, votes: item.votes - 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((item) => item.id !== id));
  };

  useEffect(() => {
    sortMovies();
  }, [movies]); // Update the sorting whenever the movies state changes

  const sortMovies = () => {
    setMovies((prevMovies) =>
      [...prevMovies].sort((a, b) => b.votes - a.votes)
    );
  };

  return (
    <div>
    
      {movies.map((item) => (
        <Movie_row
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onLike={handleLike}
          onDislike={handleDislike}
         />
        
      ))
      
      }
    </div>
  );
}

export default Data;






