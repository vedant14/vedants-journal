import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Divider, Dividerwithbutton } from "../components/Divider";
import { SEO } from "../components/SEO";
import { getPOWData } from "../utils/pow";
import { classNames, findByRange } from "../utils/lib";
import { Container } from "../components/Container";

export default function POW({ powData }) {
  const [range, setRange] = useState(0);
  const MAX = 8;

  function SliderItem({ number, text }) {
    return (
      <span onClick={() => setRange(number)}>
        <span
          className={classNames(
            range == number ? `ease-in text-gray-900` : `text-gray-500`,
            `text-sm  absolute bottom-6 cursor-pointer`
          )}
          style={{
            insetInlineStart: `calc(${(number / MAX) * 100}% - 20px)`,
          }}
        >
          {number} years
        </span>
        <span
          className={classNames(
            range == number ? `hidden` : `text-gray-500`,
            `text-sm  absolute bottom-0 cursor-pointer`
          )}
          style={{
            insetInlineStart: `calc(${(number / MAX) * 100}%)`,
          }}
        >
          |
        </span>
        <span
          className={classNames(
            range == number
              ? `underline ease-in text-gray-900`
              : `text-gray-500`,
            `text-sm  absolute -bottom-6 cursor-pointer`
          )}
          style={{
            insetInlineStart: `calc(${(number / MAX) * 100}% - 20px)`,
          }}
        >
          {text}
        </span>
      </span>
    );
  }

  function POWContent({ range }) {
    const content = findByRange(powData, range);
    if (!content) return null;
    return (
      <div>
        <Divider text={content.title} />
        <article className="prose">
          <ReactMarkdown>{content.content}</ReactMarkdown>
        </article>
      </div>
    );
  }

  function POWPAGE() {
    return (
      <Container>
        <Dividerwithbutton
          text="last updated Dec,2023"
          buttonText="read updates on work"
          url="tags/work"
        />

        <div className="relative my-16">
          <input
            id="labels-range-input"
            type="range"
            defaultValue={range}
            disabled={true}
            min="0"
            max={MAX}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div>
            <SliderItem text="Start-up" number={0} />
            <SliderItem text="Into PM" number={2} />
            <SliderItem text="Joining Razorpay" number={5} />
            <SliderItem text="Product leader" number={6.5} />
          </div>
        </div>
        <POWContent range={range} />
      </Container>
    );
  }
  return (
    <>
      <SEO title="Proof-of-work" />
      <Container>
        <span className="line-through">Work</span> Page in progress
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const powData = getPOWData();
  return {
    props: {
      powData,
    },
  };
}
