import { Container } from "../components/Container";
import { Dividerwithbutton } from "../components/Divider";
import { SEO } from "../components/SEO";
import data from "../data/side-projects.json";
import { classNames } from "../utils/lib";

export default function SideProjects() {
  return (
    <Container>
      <SEO title="Side-Projects" />
      <Dividerwithbutton
        text="My Side Projects"
        buttonText="read updates on side-projects"
        url="tags/side-projects"
      />
      <ul className="space-y-8">
        {data.map((item, i) => (
          <li key={i}>
            <div className="mb-2 space-x-2 flex items-center">
              <a href={item.link} target="_blank">
                # {item.name}
              </a>
              <span
                className={classNames(
                  `text-zinc-400 py-1 bg-gray-200 px-3 text-xs rounded-full lowercase`
                )}
              >
                {item.state}
              </span>
            </div>
            <ul className="text-zinc-600 space-y-2 list-none dashed">
              <li className="text-gray-600">
                What is it?
                {item.whatItIs}
              </li>
              {item?.highlights?.map((highlight, i) => (
                <li className="text-gray-500 font-light" key={i}>
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
}
