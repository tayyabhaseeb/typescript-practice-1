import { useEffect, useState } from 'react';
import Quotes from './Quotes';
import InspirationalQuote from './InspirationalQuote';



export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [count, setCount] = useState<number>(0)

function handleSubmit(){console.log('hello world')}

  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      <Quotes onSubmit = {handleSubmit} setCount = {setCount}>
        {quotes.map((quote) => (
          <InspirationalQuote
            key={quote.id}
            content={quote.content}
            source={quote.source}
          />
        ))}
      </Quotes>
    </main>
  );
};

export default Application;