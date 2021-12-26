import React from "react";

function Nav() {

    const sections = [
        { name: "about me" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume"  }
      ];

    function sectionSelected(name) {
        console.log(`${name} clicked`)
    }


    return (
        <header>
            <h2>
                <a href="/">Max Willner</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {sections.map((section) => (
                    <li
                        className="mx-1" key={section.name}>
                        <span onClick={() => sectionSelected(section.name)}>{section.name}</span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;