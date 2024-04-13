import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Listoption from "./components/Listoption";

//dummy data for demo
const pagesData = [
  { id: 0, name: "Page 1", checked: false },
  { id: 1, name: "Page 2", checked: false },
  { id: 2, name: "Page 3", checked: false },
  { id: 3, name: "Page 4", checked: false },
];

function App() {
  const [pages, setPages] = useState(pagesData);

  //handler for selecting all pages
  const selectAllPagesHandler = (selectAll) => {
    if (selectAll) {
      const newPages = pages.map((page) => {
        return { ...page, checked: true };
      });
      setPages(newPages);
    } else {
      const newPages = pages.map((page) => {
        return { ...page, checked: false };
      });
      setPages(newPages);
    }
  };

  //handler for selecting individual and multiple pages
  const selectPagesHandler = (receivedPage) => {
    const newPages = pages.map((page) => {
      if (page.id == receivedPage.id) {
        return { ...page, checked: !page.checked };
      } else return page;
    });
    setPages(newPages);
  };

  return (
    <div className="container">
      <div className="box">
        <Listoption
          displayText="All pages"
          selectAllPages={selectAllPagesHandler}
        />
        <div className="divider"></div>
        {pages.map((page) => (
          <Listoption
            key={page.id}
            page={page}
            displayText={page.name}
            checked={page.checked}
            selectPages={selectPagesHandler}
          />
        ))}
        <div className="divider"></div>
        <Button pages={pages} />
      </div>
    </div>
  );
}

export default App;
