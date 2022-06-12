import Image from "./Image";

export default function Index(props) {
  const {title, poster, id} = props;


  return (
    <div className="movie-card" id={id}>
      
      <Image image={poster} alt={title}/>

      <p>{title}</p>

      <div className="card-buttons">
          <img src="/play.svg" alt="play"/>
          <img src="/Union.svg" alt="add"/>
      </div>
    </div>
  );
}