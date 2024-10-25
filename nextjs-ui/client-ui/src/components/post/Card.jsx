import Image from "next/image";
import Img1 from "../../../public/assets/img1.jpeg";
import Img2 from "../../../public/assets/img2.jpeg";
import Img3 from "../../../public/assets/img3.jpeg";

const cards = [
  { imgsrc: Img1, content: "Volunteer ya 3zezi" },
  { imgsrc: Img2, content: "Volunteer ya 3zezi" },
  { imgsrc: Img3, content: "Volunteer ya 3zezi" },
];

export default function Card() {
  return (
    <div className="container my-4">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-img-container">
                <Image
                  src={card.imgsrc}
                  alt={`Card image ${index}`}
                  className="card-img-top"
                  layout="fixed" // Fixed image layout for same size
                  width={300} // Set fixed width
                  height={300} // Set fixed height
                />
              </div>
              <div className="card-body">
                <p className="card-text text-center">{card.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
