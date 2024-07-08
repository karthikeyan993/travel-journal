import Header from "./components/Header";
import Journal from "./components/Journal";
import data from "./data";

export default function App() {
  let jounralList = data.map((journal, index) => {
    return <Journal key={index + 1} data={journal} />;
  });

  return (
    <>
      <Header />
      <section className="journal-list">{jounralList}</section>
    </>
  );
}
