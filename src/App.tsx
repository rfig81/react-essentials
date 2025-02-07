import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { CoreConceptProps, ExampleKeys } from "./types";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
  const [activeTab, setActiveTab] = useState<ExampleKeys>();

  const handleTabButton = (clickedButton: ExampleKeys) => {
    setActiveTab(clickedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (activeTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[activeTab].title}</h3>
        <p>{EXAMPLES[activeTab].description}</p>
        <pre>
          <code>{EXAMPLES[activeTab].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept: CoreConceptProps, index: number) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => handleTabButton("components")}
              isActive={activeTab === "components"}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => handleTabButton("jsx")}
              isActive={activeTab === "jsx"}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => handleTabButton("props")}
              isActive={activeTab === "props"}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => handleTabButton("state")}
              isActive={activeTab === "state"}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;
