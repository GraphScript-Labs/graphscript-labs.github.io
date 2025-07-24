import "./style.css";

export function GSAbout() {
  return (<>
    <div className="gs-section">
      <h1 className="gs-section-title">
        What is GraphScript?
      </h1>

      <div className="gs-section-content">
        <p>
          GraphScript is a scripting language designed to simplify the development
          of applications by focusing on logic rather than syntax. It provides a
          powerful and intuitive visual programming environment that allows
          developers to create applications with ease.
        </p>

        <p>
          Instead of writing code line by line, users define scripts by visually
          linking components like conditions, actions, loops, and I/O elements. Each
          node represents a component, and connections between them define the
          execution flow.
        </p>
      </div>
    </div>

    <div className="gs-section">
      <h1 className="gs-section-title">
        The Ecosystem
      </h1>

      <div className="gs-section-content">
        <p>
          The GraphScript ecosystem includes a variety of tools and libraries that
          enhance the development experience. These tools are designed to work
          seamlessly with each other, providing a cohesive environment for building
          applications.
        </p>

        <p>
          The tools include a visual editor for creating scripts, a console for
          testing each project, a launcher for managing projects, and a runtime
          environment that includes the GraphScript compiler and capable of
          updating the entire ecosystem.
        </p>
      </div>
    </div>

    <div className="gs-section">
      <h1 className="gs-section-title">
        Open Source
      </h1>

      <div className="gs-section-content">
        <p>
          GraphScript is an open-source project, which means that anyone can
          contribute to its development. The source code is available on GitHub,
          and contributions are welcome from developers of all skill levels.
        </p>
      </div>
    </div>
  </>);
}
