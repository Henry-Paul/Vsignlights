export default function FAQAccordion({ faqs }) {
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <details key={i}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
