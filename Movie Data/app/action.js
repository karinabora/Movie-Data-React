import Rating from "./rating.js";
const Action_row = ({ movie, onDelete, onupadtedVotes }) => {
    return (
        <div className="action-row">
            <Rating
                movie={movie}
                onupadtedVotes={onupadtedVotes}
            />
            <Delete
                OnDelete={onDelete}
            />
        </div>
    );
};
export default Action_row;


