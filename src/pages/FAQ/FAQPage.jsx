import Accordion from "../../components/UI/Accordion";

function FAQPage() {
  return (
    <div>
      <h1>THIS IS THE FAQ PAGE</h1>
      <Accordion
        title={"Pregunta 1"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur deleniti pariatur ad adipisci autem quasi architecto earum dolores quia placeat ullam magnam temporibus est, voluptate libero, iusto quaerat amet!"
        }
      />
    </div>
  );
}

export default FAQPage;
