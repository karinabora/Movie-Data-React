
const Movie_row = ({item,onDelete,onLike,onDislike}) => {
    return (
        <div className='row1_movie_row'>
            <div className='image'>
            <img src={item.image} className="image"/>
            </div>

            <div className='Discription'>
                <h1>{item.movieName}</h1>
                <p>{item.movieYear + "|" + item.duration + "|" + item.gender}</p>
                <h>Discription</h>
                <p>{item.discription}</p>
                <div className ="action-row">
               		<img className ="like" src="Icon - Like.png" onClick={()=>onLike(item.id)} />
						<div className="votes">{item.votes}</div>
					<img className="dislike" src="Vector.png" onClick={()=>onDislike(item.id)} />
                  	<img className="delete"  src="fluent_delete-32-regular@2x.jpg"  onClick={()=>onDelete(item.id)} />
              </div>
            </div>
        </div>
           
             
               
         
       
    );
};

export default Movie_row;






