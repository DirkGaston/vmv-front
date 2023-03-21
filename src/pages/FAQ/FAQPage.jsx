import Accordion from "../../components/UI/Accordion";
import faq from "../../data/faq.json";

function FAQPage() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center w-1/2">
        <h1 className="font-josefin text-gray-200 text-3xl md:text-sxl uppercase mb-7 mt-10">
          Preguntas Frecuentes
        </h1>
        {faq.map((faq) => (
          <Accordion title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
