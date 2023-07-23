import React, { useState } from "react";

const Add_Movie = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    releaseDate: "",
    duration: "",
    genre: [],
    description: "",
    image: null, // This will store the selected image file
  });

  const [movies, setMovies] = useState([]);

  const genresOptions = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      genre: checked
        ? [...prevData.genre, value]
        : prevData.genre.filter((genre) => genre !== value),
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, image: file }));
  };

  const handleAddMovie = () => {
    // Add the movie data to the list of movies
    const newMovie = {
      id: movies.length + 1,
      title: formData.title,
      releaseDate: formData.releaseDate,
      duration: formData.duration,
      genre: formData.genre.join(", "),
      description: formData.description,
      image: formData.image, // Store the selected image
      likes: 0,
      dislikes: 0,
    };

    setMovies((prevMovies) => [...prevMovies, newMovie]);

    setFormData({
      title: "",
      releaseDate: "",
      duration: "",
      genre: [],
      description: "",
      image: null, // Reset the image field after adding the movie
    });

    console.log("Added movie:", newMovie);
    setIsFormOpen(false);
  };

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, dislikes: movie.dislikes + 1 } : movie
      )
    );
  };

  return (
    <div className="Add_movie">
      <div className="add_text">
        <h1>Add A New Movie</h1>
        <p>
          To add a movie, you have to fill out the form. The added movie will
          appear in the list above.
        </p>
      </div>
      <br />
      {isFormOpen ? (
        <div className="form">
          <label>
            Movie Name:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Released Date:
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Duration:
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>Genres:</label>
          {genresOptions.map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                name="genre"
                value={genre}
                checked={formData.genre.includes(genre)}
                onChange={handleGenreChange}
              />
              {genre}
            </label>
          ))}
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Upload Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
          <br />
          <button onClick={handleAddMovie}>Add Movie</button>
        </div>
      ) : (
        <div className="button1">
          <button className="button" onClick={() => setIsFormOpen(true)}>
            Add Movie
          </button>
        </div>
      )}

      {/* Display the list of movies */}
      <div className="Z">
        <h2>List of Movies:</h2>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Duration: {movie.duration}</p>
            <p>Genre: {movie.genre}</p>
            <p>Description: {movie.description}</p>
            {movie.image && <img src={URL.createObjectURL(movie.image)} alt={movie.title} />}
            <div>
              <button onClick={() => handleLike(movie.id)}>Like</button>
              <span>{movie.likes} likes</span>
              <button onClick={() => handleDislike(movie.id)}>Dislike</button>
              <span>{movie.dislikes} dislikes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add_Movie;

