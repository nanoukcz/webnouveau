import React from "react";

function Page() {
  return (
    <div className="container flex flex-col items-left justify-between gap-12 py-8">
      <p className="text-base">&#47;&#47; Crafting ideas with code</p>
      <p className="whitespace-pre text-deco">
        {`*                 *
                                .
  *             'M8&&&&&&'
               'M88&&&&&&&&'
               MMM88&&&&&&&&
               'MMM88&&&&&&'
                 'MM8&&&&'       *
        |\\___/|
        )     (             .             
       =\\     /=
         )===(       *
        /     \\
        |     |
       /       \\
       \\       /
_/\\_/\\_/\\__  _/_/\\_/\\_/\\_/\\_/\\_/\\_
|  |  |  |( (  |  |  |  |  |  |  |
|  |  |  | ) ) |  |  |  |  |  |  |
|  |  |  |(_(  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |`}
      </p>

      <section
        id="aboutMe"
        className="text-xl text-primary glow after:content-['}']"
      >
        <span className="text-primary text-xl glow after:content-['{']">
          aboutMe{" "}
        </span>
        <p className="text-base text-foreground not-glow pl-8">
          name: <span className="text-secondary">&quot;František&quot;</span>;
        </p>
        <p className="text-base text-foreground not-glow pl-8">
          profession:{" "}
          <span className="text-secondary">&quot;Front-End Developer&quot;</span>;
        </p>
        <p className="text-base text-foreground not-glow pl-8">
          titles:{" "}
          <span className="text-secondary">
            [&quot;HTML5&quot;, &quot;CSS3&quot;, &quot;JavaScript&quot;, &quot;React.js&quot;,
              &quot;Typescript&quot;, &quot;Python&quot;]
          </span>
          ;
        </p>
        <p className="text-base text-foreground not-glow pl-8">
          titles:{" "}
          <span className="text-secondary">
            [&quot;Bookworm&quot;, &quot;Language Lover&quot;, &quot;Cat Owner&quot;, &quot;Plant Daddy&quot;]
          </span>
          ;
        </p>
      </section>

      <section
        id="contact"
        className="text-xl text-primary glow after:content-['}']"
      >
        <span className="text-primary text-xl glow after:content-['{']">
          contact(){" "}
        </span>
        <p className="text-base text-foreground not-glow pl-8">
          return{" "}
          <span className="text-secondary">
            [
            <a
              href="mailto:frantisek@webnouveau.cz"
              className="underline underline-offset-8"
            >
              &quot;email&quot;
            </a>
            ,
            <a
              href="https://www.linkedin.com/in/frantisek-svoboda/"
              className="underline underline-offset-8"
            >
              &quot;linkedin&quot;
            </a>
            ,
            <a
              href="https://github.com/nanoukcz"
              className="underline underline-offset-8"
            >
              &quot;github&quot;
            </a>
            ]
          </span>
          ;
        </p>
      </section>

      <footer>
        <p>{`// © 2024 webnouveau.cz`}</p>
      </footer>
    </div>
  );
}

export default Page;
