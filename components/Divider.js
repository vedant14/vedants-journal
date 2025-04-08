import Link from "next/link";
import { BackIcon } from "./SocialIcons";

export function Divider({ text }) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-2 bg-white text-sm text-gray-500">
          {text ? text : "note starts here"}
        </span>
      </div>
    </div>
  );
}

export function Dividerwithbutton({ text, url, buttonText }) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
        <span className="pr-2 bg-white text-sm text-gray-500">
          {text ? text : "note starts here"}
        </span>
        <Link href={url ? url : "/notes"}>
          <button
            type="button"
            className="inline-flex items-center shadow-sm px-4 py-1.5 border border-zinc-300 text-sm leading-5 rounded-full bg-white text-sm text-zinc-500 hover:text-zinc-600 stroke-zinc-500 hover:stroke-zinc-600 hover:border-zinc-400"
          >
            <span>
              {buttonText ? (
                <span>{buttonText}</span>
              ) : (
                <div className="flex items-center">
                  <BackIcon className="fill-none stroke-2 h-5" />
                  <span className="">back</span>
                </div>
              )}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
