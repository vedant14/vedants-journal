import { Dividerwithbutton } from "../components/Divider";
import { SEO } from "../components/SEO";
import data from "../data/side-projects.json";

export default function SideProjects() {
  return (
    <div>
      <SEO title="Side-Projects" />
      <Dividerwithbutton
        text="My Side Projects"
        buttonText="read updates on side-projects"
        url="tags/side-projects"
      />
      <ul className="space-y-8">
        {data.map((item, i) => (
          <li key={i}>
            <div className="mb-2">
              <a href={item.link} target="_blank">
                # {item.name}
              </a>{" "}
              - <span className="text-zinc-400">{item.state}</span>
            </div>
            <ul className="text-zinc-600 space-y-2 list-none dashed">
              <li className="">{item.whatItIs}</li>

              {item?.highlights?.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
