import Link from "next/link";

export function Divider({ text }) {
  return (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-2 bg-amber-50 text-sm text-gray-500">
          {text ? text : "note starts here"}
        </span>
      </div>
    </div>
  );
}

export function Dividerwithbutton({ text, url, buttonText }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex items-center justify-between">
        <span className="pr-2 bg-amber-50 text-sm text-gray-500">
          {text ? text : "note starts here"}
        </span>
        <Link href={url ? url : "/notes"}>
          <button
            type="button"
            className="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 rounded-full text-gray-700 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
          >
            <span className="bg-amber-50 text-sm text-gray-500">
              {buttonText ? buttonText : "< back"}
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
