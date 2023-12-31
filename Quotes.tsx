

type ComponentProp = {
  children: React.ReactNode,
  count?: number,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  setCount: React.Dispatch<React.SetStateAction<number>>

  
}


const Quotes = ({ children, count, onSubmit, onChange , setCount }: ComponentProp) => {
  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          
          onSubmit(e) // here
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={onChange}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;