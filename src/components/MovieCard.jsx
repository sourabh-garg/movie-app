import Image from "./Image";

export default function Index(props) {
  const {title, poster} = props;


  return (
    <div className="movie-card">
      
      <Image image={poster} alt={title}/>

      <p>{title}</p>
    </div>
  );
}