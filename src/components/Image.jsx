
export default function Index(props) {
  const {image, alt} = props;


  return (
    <div className="image-container">
     <img src={image} alt={alt}/>
    </div>
  );
}