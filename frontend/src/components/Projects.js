import React, { useEffect, useState } from "react";

const Projects = () => {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch("getText")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setText(res.text);
      });
  }, []);

  return (
    <div>
      <div>My projects</div>
      <h3>Text from backend is: {text}</h3>
    </div>
  );
};

export default Projects;
