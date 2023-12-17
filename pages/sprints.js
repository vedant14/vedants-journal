import Link from "next/link";
import { Divider } from "../components/Divider";
import goals from "../data/sprint-goals.json";
import { classNames } from "../utils/lib";
export default function Sprints() {
  console.log(goals);
  return (
    <div>
      <Divider text="My Sprint Goals" />
      <div className="flex flex-col my-12">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-amber-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Goal
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Theme
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Why this goal?
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      % completed
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {goals.map((goalItem, i) => (
                    <tr
                      key={i}
                      className={classNames(
                        i % 2 === 0 ? "bg-amber-0" : "bg-amber-60",
                        "border-b border-gray-200"
                      )}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {goalItem.goal}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {goalItem.theme}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {goalItem.whyThis}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {goalItem.percentCompleted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {goalItem.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Divider text="Execution" />
        <ul role="list" className="space-y-2 text-gray-600 list-none dashed">
          <li>
            The excercise itself is pretty simple and is something that every
            tech person probably is already familar with.
          </li>
          <li>
            I have set goals for myself keeping a few themes in mind - basically
            healthy, wealthy and wise :P
          </li>
          <li>
            I create a sprint with a two week action plan. (Public documentation
            started from 2nd quarter of 2022)
          </li>
          <li>
            You can read the latest{" "}
            <Link href="/tags/sprints">updates here</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
