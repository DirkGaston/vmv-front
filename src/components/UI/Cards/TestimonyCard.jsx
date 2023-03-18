import "../../../assets/css/Home.css";

function TestimonyCard(props) {
  const { title, description, image } = props.card;

  return (
    <blockquote className="bg-gray-100 p-8 h-full rounded-lg testimony-card-glow">
      <div className="flex justify-center items-center gap-4">
        <img
          alt="{title}"
          src={image}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div className="text-sm">
          <p className="font-medium font-proxima">{title}</p>
        </div>
      </div>

      <p className="relative mt-4 text-gray-500 font-proxima">
        <span className="text-xl font-proxima">&ldquo;</span>
        {description}
        <span className="text-xl font-proxima">&rdquo;</span>
      </p>
    </blockquote>
  );
}

export default TestimonyCard;
