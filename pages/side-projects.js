import { Divider, Dividerwithbutton } from "../components/Divider";
import data from "../data/side-projects.json";

export default function SideProjects() {
  return (
    <div>
      <p className="text-xl mb-6">My Side-Projects</p>
      <Dividerwithbutton
        text="list"
        buttonText="read updates on side-projects"
        url="tags/side-projects"
      />
      <ul className="space-y-8 mt-8">
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
