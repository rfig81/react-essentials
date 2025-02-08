import { useState } from "react";
import Section from "../Section";
import Tabs from "../Tabs/Tabs";
import TabButton from "../Tabs/TabButton";
import { EXAMPLES } from "../../data";
import "./Examples.css";

type ExampleKeys = "components" | "jsx" | "props" | "state";

const Examples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ExampleKeys>();

  const handleTabButton = (clickedButton: ExampleKeys) => {
    setActiveTab(clickedButton);
  };

  const TabButtons = () => (
    <>
      {Object.keys(EXAMPLES).map((example: string, i: number) => (
        <TabButton
          key={i}
          onClick={() => handleTabButton(example as ExampleKeys)}
          isActive={activeTab === example}
        >
          {example}
        </TabButton>
      ))}
    </>
  );

  const TabContent = () => {
    if (activeTab)
      return (
        <div id="tab-content">
          <h3>{EXAMPLES[activeTab].title}</h3>
          <p>{EXAMPLES[activeTab].description}</p>
          <pre>
            <code>{EXAMPLES[activeTab].code}</code>
          </pre>
        </div>
      );
    return <p>Please select a topic.</p>;
  };

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={<TabButtons />}>{<TabContent />}</Tabs>
    </Section>
  );
};

export default Examples;
