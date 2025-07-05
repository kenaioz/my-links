function Button({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="hover:bg-foreground hover:text-background focus:bg-foreground focus:text-background w-full cursor-pointer py-1 transition-all duration-300 ease-in-out focus:outline-0"
      {...props}
    ></button>
  );
}

export { Button };
